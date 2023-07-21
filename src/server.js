// BISMILLAH //
import express from "express"
import router from "./route/rooms.router.js"

const app = express();

app.use(express.json())
app.use(router)

app.listen(7777 , () => {
    console.log('this is running 7777 port');
})