import createAction from '../actions/create.action';

const commandName = 'create';

const description = 'create a template';

const _arguments = [
  // ['<string>', 'string to split'],
  // ['<string>', 'string to split'],
];

const options = [
  // ['--first', 'display just the first substring'],
  // ['-s, --separator <char>', 'separator character', ','],
];

export default function () {
  this.command(commandName)
    .description(description)
    // .argument(..._arguments[0])
    // .argument(..._arguments[1])
    // .option(...options[0])
    // .option(...options[1])
    .action(createAction);
}
