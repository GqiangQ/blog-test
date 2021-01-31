import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn("increment")
  id: number
  // 用户的id
  @Column("int")
  userId: number
  // 博客的id
  @Column('int')
  postId: number
  // 评论的内容
  @Column("text")
  content: string
  // 评论的时间
  @Column("timestamp")
  createAt: Date
  // 点赞
  @Column("int")
  upTotal: number
  //踩
  @Column('int')
  downTotal: number
  // 多个评论可以是一个人写的
  @ManyToOne(type =>User, user => user.comment )
  user:User
  // 对个评论可以是一个博客的
  @ManyToOne(type =>Post, post => post.comment )
  post:Post
}
