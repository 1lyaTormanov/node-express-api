import express from 'express'
import {userController} from "../controllers/user.controller";
const router = express.Router();
const controller = userController()

router.route(`/:id`).get((req, res)=> controller.getUser(1,res))
router.route('/').get((req,res) => controller.getUserList(res))

export const userRouter = router