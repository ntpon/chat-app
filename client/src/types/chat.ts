import { IMessage } from "./message";

export interface IChat {
  id: number;
  message: string;
  positionName: string;
  createdAt: string;
  updatedAt: string;
  user: IUser;
  messages?: IMessage[];
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
}
