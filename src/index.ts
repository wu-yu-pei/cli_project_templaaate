import { Command } from 'commander';
import commands from './command/index';

const program = new Command();

program.name('initp').description('CLI').version('0.0.0');

// commander
commands.forEach((command) => command.call(program));

program.parse();
