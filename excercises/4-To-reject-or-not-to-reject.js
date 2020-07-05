const promise = new Promise(function(fulfill, reject) {
    // Your solution here
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});


onRejected = (error) => {
    error.message;
}

promise.then(console.log, onRejected)