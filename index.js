import fileRead from './libs/readfile.js';
import fileWrite from './libs/writefile.js';
import inquirer from 'inquirer';
import { type } from 'node:os';

let a = true;

do{

}while(a)

inquirer.prompt([
    {
        type: 'input',
        name: 'username is',
        message: 'type your name'
    },



    {
        type: 'list',
        name: 'user name is',
        message: 'select the name',
        choices: ['amila', 'cazz', 'gg']
    },



    {
        type: 'checkbox',
        name: 'user name is',
        message: 'select the name',
        choices: ['amila', 'cazz', 'gg']
    }
])
    .then(data => console.log(data))
    .catch(err => console.log(err))