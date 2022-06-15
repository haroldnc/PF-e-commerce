require('dotenv').config();
const commands = require('./commands');
const mongoose = require ('mongoose');

const done = (str, end='\n') => {
   process.stdout.write(str + end);
   process.stdout.write('\x1b[34mprompt > \x1b[89m\x1b[37m\x1b[89m');
}

mongoose.connect(process.env.DB_DEPLOY)
   .then((conn) => {
      done('','');
      process.stdin.on('data', data => {
         let args = data.toString().trim().split(' ');
      
         if (!args[0]) done('','');
         else if (commands.hasOwnProperty(args[0])){
            commands[args[0]](args.splice(1), done);
         } else {
            done(`No se reconoce el comando ${args[0]}`);
         }
      });
   });
