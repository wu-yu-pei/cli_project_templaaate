import create from './create';

const commands = [create];

function initCommands(programInstance) {
  commands.forEach((command) => command.call(programInstance));
}

export default initCommands;
