export enum Priority {
    IMPORTANT_URGENT = 'Important & Urgent',
    IMPORTANT_NOT_URGENT = 'Important & Not Urgent',
    NOT_IMPORTANT_URGENT = 'Not Important & Urgent',
    NOT_IMPORTANT_NOT_URGENT = 'Not Important & Not Urgent',
  }
  
  export interface Task {
    id: string
    text: string
    completed: boolean
    priority: Priority
  }
  
  