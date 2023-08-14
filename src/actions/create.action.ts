import inquirer from 'inquirer';
import { useExec } from '../utils/exec';
import project_template_list from '../config/project.config';

export default () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'project_name',
        message: '请输入项目名称',
        default: 'projectName',
      },
      {
        type: 'list',
        name: 'project_type',
        message: '请选择类型',
        default: 'vue',
        choices: project_template_list,
      },
    ])
    .then(async (answers) => {
      console.log(answers);

      await processInitProject(answers);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log(error);
      }
    });
};

async function processInitProject({ project_name, project_type }) {
  const currentPath = process.cwd();
  try {
    const { stdout, stderr } = (await useExec(`git clone ${project_type}`)) as any;
    process.stdout.write(stdout);
    process.stderr.write(stderr);
  } catch (error) {
    console.log(error);
  }
}