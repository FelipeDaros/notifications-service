import { Content } from "./content";

export interface NotificationsProps{
  recipientId: string;
  content: Content;
  category: string;
  readtAt?: Date | null;
  createdAt: Date;
}

export class Notification{
  private props: NotificationsProps;

  constructor(props: NotificationsProps){
    this.props = props;
  }

  public set recipientId(recipientId: string){
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string{
    return this.props.recipientId;
  }

  public set content(content: Content){
    this.props.content = content;
  }

  public get content(): Content{
    return this.props.content;
  }
  public set category(category: string){
    this.props.category = category;
  }

  public get category(): string{
    return this.props.category;
  }

  public set readAt(readAt: Date | null | undefined){
    this.props.readtAt = readAt;
  }

  public get readAt(): Date | null | undefined{
    return this.props.readtAt;
  }

  public get createdAt(): Date{
    return this.props.createdAt;
  }

}