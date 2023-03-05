const getData = new Promise((resolve, reject) => {
    resolve(100);
});

getData.then(data => console.log(data));