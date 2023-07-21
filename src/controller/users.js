//Bismillah//
import { readFile, writeFile } from "../utils/fs.js";

export const GET_ROOMS = (req , res) => {
    try {
        const { name , type} = req.query        
        const rooms = readFile('room')
    if (!name && !type) {
            res.status(200).json({
                status: 200,
                count : rooms.length,
                results : rooms

            })
        }   
        if (name) {
            const home = rooms.find( e => e.name == name)
            res.status(200).json({
                status: 200,
                home
            })
        }
        if (type) {
            const typeRoom = rooms.find( e => e.type == type)
            res.status(200).json({
                status: 200,
                typeRoom
            })
            
        }
      
    } catch (error) {
        console.log(error.message);
    }
}

export const GET_ROOMS_ID = (req , res) => {
    try {
        const {id} =  req.params
        const rooms = readFile('room')
        const roomsId = rooms.find(e => e.id == id)

            if (!roomsId) {
              return  res.status(404).json({
                     status: 404,
                     message : "topilmadi"
                     })
             }

            res.send({
                status: 200,
                roomsId
            })
    } catch (error) {
        console.log(error.message);
    }
}

export const GET_ROOMSID_AVAILABILITY = (req , res) => {
    try {
        const {id} = req.params
        const roomData  = readFile('roomDate')

        const newRoomData  = roomData.find(e => e.id == id)
        res.status(200).json({  
            status: 200,
            rooms: newRoomData
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const POST_ROOMSID_BOOK = (req , res) => {
    try {
        const {id} = req.params
        const data = readFile('roomDate')
        const newData  = data.find(e => e.id == id)
        const {start , end} = req.body
        
        for (let i = 0; i < newData.data.length; i++) {
            const starts = start.split([" "])
            const ends = end.split([" "])
            if (starts[0] > ends[0] ) {
               return res.send({
                    message: "siz rostan ham shuncha kunga zakas bermoqchimisiz aniq kiritish uchun kirgizayotgan vaqtingizga qarang balki start kunidan end kuni oldin otib ketkandr"
                })
            }
            if (new Date(newData.data[i].start) < new Date(start) && new Date(newData.data[i].end) > new Date(start) ) {
              return   res.send(
                {
                    "error": "uzr, siz tanlagan vaqtda xona band"
                  }
                )  
            }
            
           if (newData.data[i].start == start  || newData.data[i].end == end || newData.data[i].start == end  || newData.data[i].end == start) {
           return res.send({
                "error": "uzr, siz tanlagan vaqtda xona band"
              })
           }  
        }
        newData.data.push(req.body)
        writeFile('roomDate' , data)  
        res.send(
            {
                "message": "xona muvaffaqiyatli band qilindi"
              }
        )  
   
    } catch (error) {
        console.log(error.message);
    }
}