import {Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Comment } from "./Comment";
import { User } from "./User";

@Entity()
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;
  // 用户id
  @Column("int")
  userId: number
  // 标题
  @Column("varchar")
  title: string
  // 内容
  @Column("text")
  content: string
  // 创建时间
  @Column({type:"timestamp"})
  createAt: Date
  // 跟新时间
  @Column({type: "timestamp"})
  updateAt: Date
  @Column({type: 'json'})
  views: JSON
  // 点赞
  @Column("int")
  upTotal: number
  //踩
  @Column('int')
  downTotal: number
  // 多个用博客可以被一个用户创建
  @ManyToOne(type =>User, user => user.post )
  user:User
  // 一个博客可以有多个评论
  @OneToMany( type => Comment, comment => comment.post)
  comment: Comment[]
}
