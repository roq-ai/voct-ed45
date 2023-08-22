import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  status: string;
  inviter_id: string;
  invitee_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  user_invitation_inviter_idTouser?: UserInterface;
  user_invitation_invitee_idTouser?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  inviter_id?: string;
  invitee_id?: string;
  company_id?: string;
}
