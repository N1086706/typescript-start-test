import * as readlineSync from 'readline-sync';
import * as QRCode from 'qrcode';
let yourName = readlineSync.question('May I have your name? ');
/*console.log('Hi ' + yourName + '!');*/ 
QRCode.toFile('./qr.png',yourName)