function attachTitle(param) {
    return 'DR. ' + param;
}

Promise.resolve('MANHATTAN')
    .then(attachTitle)
    .then(console.log)