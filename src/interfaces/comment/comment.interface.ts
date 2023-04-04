export interface Comment{
    id: number
    comment: string
    task_id: number
    user_id: number
    created_at: Date
    updated_at: Date
}

export interface CommentForm {
    comment: string
}

export interface CommentErrors {
    [key: string]: string[];
  }