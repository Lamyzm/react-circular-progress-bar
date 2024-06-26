import { defineConfig } from 'tsup';
export default defineConfig({
   entry: ['./lib/index.ts'],
   format: ['cjs', 'esm'],
   dts: true,
   minify: true,
   clean: true,
   outExtension({ format }) {
      return format === 'esm' ? { js: `.${format}.js` } : { js: '.js' };
   },
});
