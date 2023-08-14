import { spawn } from 'child_process';

/**
 * 执行shell命令
 *
 * @param 命令
 * @returns
 */
export function useExec(command, ...options) {
  return new Promise((resolve, reject) => {
    // 返回一个子进程
    const childProcess = spawn(command, options);
    // 由于当前创建了一个子进程 会有打印信息 为了让用户看到信息 需要把子进程的输出信息流到主进程里面
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
    childProcess.on('close', () => {
      resolve('over');
    });
  });
}
