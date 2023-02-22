import {userService} from "../servises/user.service";
import {Response} from "express";

const userDependency = userService();

export const userController = () => {
    const getUser = (userId: number, res: Response) => {
        res.send(userDependency.getUser(userId))
    }

    const getUserList = (res: Response) => {
        res.send(userDependency.getUserList())
    }

    return {
        getUserList,
        getUser
    }
}