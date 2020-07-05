'use strict';

function parsePromised(param) {
    return new Promise((resolve, reject) => {
        try {
            resolve(JSON.parse(param))
        } catch (e) {
            reject(e);
        }
    });
}

function onReject(error) {
    console.log(error.message);
}

parsePromised(process.argv[2])
    .then(null, onReject);