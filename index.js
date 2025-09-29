import fileRead from './libs/readfile.js';
import fileWrite from './libs/writefile.js';
import inquirer from 'inquirer';
import { type } from 'node:os';

let a = true;

do{
    inquirer.prompt([
    
    {
        type: 'password',
        name: 'user name is',
        message: 'select the name',
        mask: '*',
    },



    {
        type: 'confirm',
        name: 'check',
        message: 'have any others?',
    }
])
    .then(data => {
        console.log(data);
        if(!data.check)
        {
            a = false;
        }
    })
    .catch(err => console.log(err));
}while(a);

