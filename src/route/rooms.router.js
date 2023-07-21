import { Router } from "express";
import { GET_ROOMS, GET_ROOMSID_AVAILABILITY, GET_ROOMS_ID, POST_ROOMSID_BOOK} from "../controller/users.js";
import { logger } from "../middlewer/middlewerfunctions.js";

const router = Router()

router.get('/rooms' , GET_ROOMS);
router.get('/rooms/:id' , GET_ROOMS_ID);
router.get('/rooms/:id/availability' , GET_ROOMSID_AVAILABILITY);
router.post('/rooms/:id/book' ,logger , POST_ROOMSID_BOOK);

export default router