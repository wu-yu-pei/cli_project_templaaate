import { RollupOptions } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import addShebang from 'rollup-plugin-add-shebang';

const options: RollupOptions = {
  input: './src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'es',
    },
  ],
  plugins: [json(), typescript(), nodeResolve(), commonjs(), terser(), addShebang({ include: './dist/index.js' })],
};

export default options;
