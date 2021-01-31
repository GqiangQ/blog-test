import { Comment } from './Comment';
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Post } from "./Post";

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;
    // 用户名
    @Column('varchar')
    username: string;
    // 密码
    @Column('varchar')
    password: string;
    // 年龄
    @Column('int')
    age: number;
    // 电话
    @Column('varchar')
    phoneNumber: number
    // 性别 默认是男生 true
    @Column('boolean')
    six: boolean
    // 邮箱
    @Column({ type: "varchar" })
    email: string
    // 创建时间
    @Column({type:"timestamp"})
    createAt: Date
    // 跟新时间
    @Column({type: "timestamp"})
    updateAt: Date
    
    // 一个用户可以创建多个博客
    @OneToMany(type=>Post, post=>post.userId)
    post: Post[]
    // 一个用户可以添加对条评论
    @OneToMany(type=>Comment, comment=>comment.userId)
    comment: Comment[]
}
