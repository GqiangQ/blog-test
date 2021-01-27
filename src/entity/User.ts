import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    username: string;

    @Column('varchar')
    password: string;

    @Column('number')
    age: number;

    @Column('number')
    phoneNumber: number

    @Column('boolean')
    six: boolean

    @Column({type:"timestamp"})
    createAt: Date
    @Column({type: "timestamp"})
    updateAt: Date

}
