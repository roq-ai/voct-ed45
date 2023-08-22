import { FormInterface } from 'interfaces/form';
import { InvitationInterface } from 'interfaces/invitation';
import { TeamMemberInterface } from 'interfaces/team-member';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  industry?: string;
  location?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  form?: FormInterface[];
  invitation?: InvitationInterface[];
  team_member?: TeamMemberInterface[];
  user?: UserInterface;
  _count?: {
    form?: number;
    invitation?: number;
    team_member?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  industry?: string;
  location?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
