import { writeFile } from "fs";
import { join } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const fileWrite = (path,data, yourFunc =() => {}) =>{
    writeFile(join(__dirname, "../",path), data, "utf-8", (err) => {
        if(!err)
        {
            yourFunc("done")
        }
    })


}

export default fileWrite;