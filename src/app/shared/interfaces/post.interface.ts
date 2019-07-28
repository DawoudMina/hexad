import { IUser } from './user.interface';
import { IComment } from './comment.interface';

export interface IPost {
  id: number;
  owner: IUser;
  content: string;
  time: Date;
  comments: Array<IComment>;
  likeCount: number;
}
