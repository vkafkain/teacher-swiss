import { Router, Response, Request } from "express";
import { getItem, postItem } from "../controllers/item";

const router = Router()


router.get('/', getItem);
router.post('/', postItem);
router.post()

export { router }