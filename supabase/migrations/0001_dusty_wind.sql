/*
  # Exam Platform Database Schema

  1. New Tables
    - `exams`
      - Core exam information including title, description, duration
    - `questions`
      - Exam questions with options and correct answers
    - `user_exam_attempts`
      - Tracks user's exam attempts and scores
    - `user_responses`
      - Individual question responses for each attempt

  2. Security
    - Enable RLS on all tables
    - Policies for:
      - Users can view available exams
      - Users can only see their own exam attempts and responses
      - Questions are only visible during active exam attempts
*/

-- Exams table
CREATE TABLE IF NOT EXISTS exams (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  duration_minutes integer NOT NULL DEFAULT 60,
  passing_score integer NOT NULL DEFAULT 70,
  category text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Questions table
CREATE TABLE IF NOT EXISTS questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  exam_id uuid REFERENCES exams(id) ON DELETE CASCADE,
  question_text text NOT NULL,
  options jsonb NOT NULL,
  correct_answer text NOT NULL,
  points integer NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now()
);

-- User exam attempts
CREATE TABLE IF NOT EXISTS user_exam_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  exam_id uuid REFERENCES exams(id) ON DELETE CASCADE,
  start_time timestamptz NOT NULL DEFAULT now(),
  end_time timestamptz,
  score integer,
  passed boolean,
  created_at timestamptz DEFAULT now()
);

-- User responses
CREATE TABLE IF NOT EXISTS user_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  attempt_id uuid REFERENCES user_exam_attempts(id) ON DELETE CASCADE,
  question_id uuid REFERENCES questions(id) ON DELETE CASCADE,
  selected_answer text NOT NULL,
  is_correct boolean NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_exam_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_responses ENABLE ROW LEVEL SECURITY;

-- Policies

-- Exams policies
CREATE POLICY "Exams are viewable by all users"
  ON exams FOR SELECT
  TO authenticated
  USING (true);

-- Questions policies
CREATE POLICY "Questions are viewable during active exam"
  ON questions FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_exam_attempts
      WHERE user_id = auth.uid()
      AND exam_id = questions.exam_id
      AND end_time IS NULL
    )
  );

-- User exam attempts policies
CREATE POLICY "Users can view their own exam attempts"
  ON user_exam_attempts FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create exam attempts"
  ON user_exam_attempts FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own exam attempts"
  ON user_exam_attempts FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

-- User responses policies
CREATE POLICY "Users can view their own responses"
  ON user_responses FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_exam_attempts
      WHERE id = user_responses.attempt_id
      AND user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create responses for their attempts"
  ON user_responses FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_exam_attempts
      WHERE id = attempt_id
      AND user_id = auth.uid()
    )
  );