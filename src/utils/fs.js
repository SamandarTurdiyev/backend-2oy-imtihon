import fs from "fs"
import path from "path"

export function readFile(fileName) {
    try {
        const filePath = path.join(process.cwd(), 'src', 'db' , fileName + '.json')
    const data = fs.readFileSync(filePath , "utf-8")
    return JSON.parse(data)

    } catch (error) {
        console.log(`error while reading file {${error.message}}`);
    }
}

export function writeFile(fileName , data ) {
    try {
        const filePath = path.join(process.cwd(), 'src', 'db' , fileName + '.json')
        fs.writeFileSync(filePath , JSON.stringify(data , null , 4))
    } catch (error) {
        console.log(`error while writing file {${error.message}}`);
    }
}