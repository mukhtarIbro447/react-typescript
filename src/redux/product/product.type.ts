export interface ProductState {
  isLoading: boolean;
  data?: ResponseData[];
  error?:Error
}

export interface ResponseData {
  userId: number;
  id: number;
  title: string;
  completed: boolean
}
