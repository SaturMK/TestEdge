export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      exams: {
        Row: {
          id: string
          title: string
          description: string | null
          duration_minutes: number
          passing_score: number
          category: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          duration_minutes?: number
          passing_score?: number
          category: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          duration_minutes?: number
          passing_score?: number
          category?: string
          created_at?: string
          updated_at?: string
        }
      }
      questions: {
        Row: {
          id: string
          exam_id: string
          question_text: string
          options: Json
          correct_answer: string
          points: number
          created_at: string
        }
        Insert: {
          id?: string
          exam_id: string
          question_text: string
          options: Json
          correct_answer: string
          points?: number
          created_at?: string
        }
        Update: {
          id?: string
          exam_id?: string
          question_text?: string
          options?: Json
          correct_answer?: string
          points?: number
          created_at?: string
        }
      }
      user_exam_attempts: {
        Row: {
          id: string
          user_id: string
          exam_id: string
          start_time: string
          end_time: string | null
          score: number | null
          passed: boolean | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          exam_id: string
          start_time?: string
          end_time?: string | null
          score?: number | null
          passed?: boolean | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          exam_id?: string
          start_time?: string
          end_time?: string | null
          score?: number | null
          passed?: boolean | null
          created_at?: string
        }
      }
      user_responses: {
        Row: {
          id: string
          attempt_id: string
          question_id: string
          selected_answer: string
          is_correct: boolean
          created_at: string
        }
        Insert: {
          id?: string
          attempt_id: string
          question_id: string
          selected_answer: string
          is_correct: boolean
          created_at?: string
        }
        Update: {
          id?: string
          attempt_id?: string
          question_id?: string
          selected_answer?: string
          is_correct?: boolean
          created_at?: string
        }
      }
    }
  }
}