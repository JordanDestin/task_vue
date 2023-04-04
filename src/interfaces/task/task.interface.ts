export interface Task {
    id: string
    title: string
    detail: string
    category_id: number
    created_at: Date
    updated_at: Date
    theme_id: number
    statutes_id: number
}

export interface TaskForm {
    title: string
    detail: string
    category_id: number
    statutes_id: number
}

export interface TaskErrors {
    [key: string]: string[];
  }