import { log } from 'node:console';
import fileRead from './libs/readfile.js';
import fileWrite from './libs/writefile.js';
import inquirer from 'inquirer';
import { type } from 'node:os';

let a = true;
const studentInfo = [];

const myFunction = async () => {
  do {
    const data = await inquirer.prompt([
    
    {
        type: 'input',
        name: 'user name is',
        message: 'select the name',
        
    },
    {
        type: 'input',
        name: 'city',
        message: 'enter the city',
        
    },
    {
        type: 'list',
        name: 'class',
        message: 'select the class',
        choices: ['A', 'B', 'C', 'D']
        
    },
    {
        type: 'checkbox',
        name: 'subject',
        message: 'select the subjects',
        choices: ['java', 'python', 'C', 'react']
        
    },

    {
        type: 'confirm',
        name: 'check',
        message: 'have any others?',
    }
    ]);
    
    const {check, ...infor} = data;
    studentInfo.push(infor);
    if(!check) {
        a = false;
    }
    
} while(a);
log(studentInfo);
}

myFunction();

 