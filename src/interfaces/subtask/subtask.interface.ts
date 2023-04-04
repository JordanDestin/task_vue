export interface Subtask {
    id: number
    name: string
    validate: boolean
    task_id: number
    created_at: Date
    updated_at: Date
}

export interface SubstaskForm {
    name: string
    validate: boolean
}

export interface SubtaskErrors {
    [key: string]: string[];
  }