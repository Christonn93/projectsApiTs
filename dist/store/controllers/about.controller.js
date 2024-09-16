"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAboutInfo = void 0;
// About information example
const aboutInfo = {
    description: 'This is a sample application to demonstrate an Express and TypeScript setup.',
    version: '1.0.0',
    author: 'Your Name',
    contact: 'contact@store.com'
};
// Get about information
const getAboutInfo = (req, res) => {
    console.log(req.query);
    res.json(aboutInfo);
};
exports.getAboutInfo = getAboutInfo;
