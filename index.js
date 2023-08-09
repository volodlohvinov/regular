const regex = /^-?0*\d{6}$/

const testStrings = ['123456', '-123456', '-12345', '023456', '-000016'];

testStrings.forEach(str => {
  if (regex.test(str)) {
    console.log(`${str} -> так`);
  } else {
    console.log(`${str} -> ні`);
  }
});
