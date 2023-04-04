export interface Category {
    id: number
    name: string
}

export interface CategoryForm {
    name: string
}

export interface CategoryErrors {
    [key: string]: string[];
  }