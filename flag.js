exports.getFlag = (flag) => { 
  const indexFlag = process.argv.indexOf(flag);
  if(indexFlag && indexFlag < process.argv.length) {
    return process.argv[indexFlag + 1];
  }
  return undefined;
}
