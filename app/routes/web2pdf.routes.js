module.exports = (app) => {
    const web2pdfs = require('../controllers/web2pdf.controller.js');
    app.get('/web2pdfs/convert', web2pdfs.convert);
};