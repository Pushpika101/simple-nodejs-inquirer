import { log } from 'node:console';
import fileRead from './libs/readfile.js';
import fileWrite from './libs/writefile.js';
import inquirer from 'inquirer';
import { type } from 'node:os';
import { cardGen } from './libs/htmlCardGen.js';

let a = true;
const studentInfo = [];

const myFunction = async () => {

    let allCard = ''
  do {
    const data = await inquirer.prompt([
    
    {
        type: 'input',
        name: 'name',
        message: 'select the name',
        
    },
    {
        type: 'input',
        name: 'city',
        message: 'enter the city',
        
    },
    {
        type: 'list',
        name: 'sclass',
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



studentInfo.forEach(({name, city, sclass, subject}) => {
    allCard += cardGen(name, city, sclass, subject)
})
log(allCard);

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student info</title>
    <link href="./index.css" rel="stylesheet">
</head>
<body>
    <main class="main">
        ${allCard}
    </main>
</body>
</html>`

fileWrite('index.html', htmlContent, (d) => log(d))
}

myFunction();

 