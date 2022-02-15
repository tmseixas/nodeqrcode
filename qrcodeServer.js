const QRCode = require('qrcode');
const express = require('express');
const app = express()
const port = 3000

app.use(express.json());

app.get('/', async (req, res) => {
    const qr = await generateQR("https://www.google.com");
    res.send(`<html><body><img src='${qr}'</body><html>`);
})

app.post('/gen', async (req, res) => {
    const { invQR, retType } = req.body;
    const qr = await generateQR(invQR);
    if (retType === 'HTML') {
        res.send(`<html><body><img src='${qr}'</body><html>`);
    }
    else {
        res.send(qr);
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


async function generateQR(text) {
    try {
        const result = await QRCode.toDataURL(text);
        return result;
    } catch (err) {
        console.log(err);
    }
}

