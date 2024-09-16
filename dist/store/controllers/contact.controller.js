"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContactInfo = void 0;
// Contact information example
const contactInfo = {
    email: 'contact@store.com',
    phone: '123-456-7890'
};
// Get contact information
const getContactInfo = (req, res) => {
    console.log(req.query);
    res.json(contactInfo);
};
exports.getContactInfo = getContactInfo;
