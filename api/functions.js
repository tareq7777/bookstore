'use strict';
const language = require('./lang/ar');

const results = {
    '1': {msg: language.success, httpCode: 200},
    '-10': {msg: language.notFound, httpCode: 200},
    '-11': {msg: language.missingFields, httpCode: 200},
    '-99': {msg: language.generalError, httpCode: 200},
    '-13': { msg: "unauthorized", httpCode: 401},
};

module.exports.response = function response(res, code = null, data = null) {
    let returnedData = {code: code, data: data, msg: results[code].msg};
    res.status(results[code].httpCode).send(returnedData);
};

module.exports.makeSafe = function makeSafe(data) {
    return data;
};
