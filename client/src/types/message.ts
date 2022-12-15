import { IUser } from "./chat";

export interface IMessage {
  id: number;
  chatId: number;
  content: string;
  fileUrl?: string;
  imageUrl?: string;
  userType: "hr" | "jsk";
  idUser: number;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
  user: IUser;
  isOwn: boolean;
}
