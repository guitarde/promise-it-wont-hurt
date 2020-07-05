const myPromise = new Promise((resolve, reject) => {
    resolve('PROMISE VALUE')
});

myPromise.then(console.log)
console.log('MAIN PROGRAM')