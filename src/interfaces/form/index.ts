import { FeedbackInterface } from 'interfaces/feedback';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface FormInterface {
  id?: string;
  title: string;
  description?: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  feedback?: FeedbackInterface[];
  company?: CompanyInterface;
  _count?: {
    feedback?: number;
  };
}

export interface FormGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  company_id?: string;
}
