import {User} from './users';

export class Complaint{
  owner: User;
  date: Date;
  reason: string;
  status: boolean;
}
