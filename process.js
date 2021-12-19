process.stdin.on('data', data => {
  console.log(data.toString().trim());

  process.exit();
});

process.on('exit', () => {
  process.stdout.write('Terminou');
})