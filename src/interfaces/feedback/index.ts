import { FormInterface } from 'interfaces/form';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FeedbackInterface {
  id?: string;
  content: string;
  rating: number;
  form_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  form?: FormInterface;
  user?: UserInterface;
  _count?: {};
}

export interface FeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  form_id?: string;
  user_id?: string;
}
