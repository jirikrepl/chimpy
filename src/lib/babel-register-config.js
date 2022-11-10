/**
 * before we import chimp config file, use babel to the config file.
 * set cwd to project under test
 * set preset path to this repository's node_modules
 * https://github.com/babel/babel/issues/10349#issuecomment-522061558
 */
require('@babel/register')({
  cwd: process.env.PWD,
  presets: [`${__dirname}/../../node_modules/@babel/preset-env`],
  babelrc: false,
});
require('@babel/polyfill');
