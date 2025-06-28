// scripts/setenv.js
const fs = require('fs');
const path = require('path');

const env = process.argv[2];
const envFile = `.env.${env}`;
const targetFile = `.env`;

if (!env) {
  console.error(
    '❌ Please provide an environment name. Example: node scripts/setenv.js development',
  );
  process.exit(1);
}

const envPath = path.resolve(__dirname, `../${envFile}`);
const targetPath = path.resolve(__dirname, `../${targetFile}`);

if (!fs.existsSync(envPath)) {
  console.error(`❌ Environment file "${envFile}" does not exist.`);
  process.exit(1);
}

fs.copyFileSync(envPath, targetPath);
console.log(`✅ Copied ${envFile} → .env`);
