import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static(__dirname)); // Tüm dosyaları dışarı açar

app.listen(3000, () => {
    console.log('Uygulama http://localhost:3000 adresinde çalışıyor');
});
