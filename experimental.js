const Buf1 =Buffer.alloc(10);
// console.log(" request received ");
// console.log(Buf1);
const buf2 =Buffer.allocUnsafe(11);
// console.log(buf2);
const buf3=Buffer.from('LMAO');
// console.log(buf3);
const buf5=Buffer.alloc(15);
buf5.write(' HEllo woRld ');
console.log(buf5);
console.log(buf5.toString());
console.log(" Lo")