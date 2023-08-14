import { exec } from 'child_process';

/**
 * 执行shell命令
 *
 * @param 命令
 * @returns
 */
export function useExec(shell: string) {
  return new Promise((res, rej) => {
    exec(shell, (err, stdout, stderr) => {
      if (err) rej(err);
      res({
        stdout,
        stderr,
      });
    });
  });
}
