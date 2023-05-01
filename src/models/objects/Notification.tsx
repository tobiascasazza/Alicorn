import { notificationStatus, notificationType } from "../helpers/enums";
import { User } from "./User";

export interface Notification {
  notificationStatus: notificationStatus;
  notificationDateTime: Date;
  notificationType: notificationType;
  user: User;
  item: string;
}
