const QRCode = require('qrcode');

async function generateQR(text) {
    try {
        console.log(await QRCode.toDataURL(text));
    } catch (err) {
        console.log(err);
    }
}

generateQR("https://www.google.com");