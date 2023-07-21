export const logger = (req , res , next) => {
    try {
        if (new Date(req.body.start) =="Invalid Date" || new Date(req.body.end)=="Invalid Date") {
          return  res.send({
               message: "vaqtdi togri kiriting"
           })
       }
        next()
    } catch (error) {
        console.log(error.message);
    }
}           