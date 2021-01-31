import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

createConnection().then(async connection => {
    const user = new User();
    user.username = 'gqq'
    user.password = 'gqqgqq'
    user.age = 18
    user.phoneNumber =  15504473441
    user.six = false
    user.email = '740407980@qq.com'
    await connection.manager.save(user);
    const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);


}).catch(error => console.log(error));
