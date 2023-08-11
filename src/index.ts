import { Command } from 'commander';
import slice from './command/slice';
import split from './command/split';

const program = new Command();

program.name('initp').description('CLI').version('0.0.0');
slice.call(program);
split.call(program);

// program
//   .command('split')
  // .description('Split a string into substrings and display as an array')
  // .argument('<string>', 'string to split')
  // .option('--first', 'display just the first substring')
  // .option('-s, --separator <char>', 'separator character', ',')
  // .action((str, options) => {
  //   const limit = options.first ? 1 : undefined;
  //   console.log(str.split(options.separator, limit));
  // });

// const commandFile = globSync('src/command/**/*.ts');

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// console.log(__dirname);

// async function initCommand() {
//   for (let i = 0; i < commandFile.length; i++) {
//     const _path = path.resolve(path.join(__dirname, '../'), commandFile[i]);
//     console.log(_path, '--');

//     import(_path).then((res) => {
//       console.log(res);
//     });
//   }
// }
// initCommand();
program.parse();
