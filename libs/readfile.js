import { log } from 'node:console';
import { readFile, writeFile } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const fileRead = (path, yourFun = () => {})=>{
    readFile(join(__dirname,"../",path) , "utf-8", (err, data) =>{
        if(err){
            log(err);
        }
        yourFun(data);
    })
}

//fileRead('../read.txt',(data) => {log(data)});

export default fileRead;



