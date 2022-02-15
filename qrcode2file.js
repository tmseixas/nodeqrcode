const QRCode = require('qrcode');

async function generateQR(text) {
    try {
        await QRCode.toFile('./qrcode.png', text);
        
    } catch (err) {
        console.log(err);
    }
}

generateQR("https://www.google.com");