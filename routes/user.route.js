import { Router } from "express";
import { userRegister , getAllUsers, getUserById} from "../controllers/user.controler.js";

const router = Router();

router.route("/register").post(userRegister);
router.route("/getUsers").get(getAllUsers);
router.route("/:id").get(getUserById);

export default router;