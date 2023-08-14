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
    .then(processInitProject)
    .catch(onError);
};

function onError(error) {
  console.log(error);
}

async function processInitProject({ project_name, project_type }) {
  const currentPath = process.cwd();
  try {
    await useExec('git', 'clone', project_type);
  } catch (error) {
    console.log(error);
  }
}
