import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const currentFile = fileURLToPath(import.meta.url);
const projectRoot = path.resolve(path.dirname(currentFile), '..');
const distDir = path.join(projectRoot, 'dist');

async function main() {
  await rm(distDir, { recursive: true, force: true });
  await mkdir(distDir, { recursive: true });

  await cp(path.join(projectRoot, 'index.html'), path.join(distDir, 'index.html'));
  await cp(path.join(projectRoot, 'src'), path.join(distDir, 'src'), { recursive: true });

  console.log('Build complete. Assets copied to dist/.');
}

main().catch((error) => {
  console.error('Build failed:', error);
  process.exitCode = 1;
});
