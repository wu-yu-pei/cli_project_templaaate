import { Command } from 'commander';
import initCommanderHelper from './helper/index';
import initCommands from './command/index';

// Command instance
const program = new Command();

// init command helper
initCommanderHelper(program);

// init commands
initCommands(program);

// parse arguments
program.parse();
