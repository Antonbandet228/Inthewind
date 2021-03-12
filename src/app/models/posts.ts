import {Hashtag} from './hash-tags';
import {User} from './users';

export class Post {
  id: number;
  text: string;
  tags: Hashtag[];
  date: Date;
  owner: User;
  picture: string;
}

