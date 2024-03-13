// const promiseOne = new Promise(function(resolve,reject){
//     //asynch calls
//     // db calls  cryptography,network
//     setTimeout(function() {
//         console.log('Async task is complet');
//         resolve()
//     }, 1000)
// })

const { response } = require("express");

// promiseOne.then(function(){
//     console.log("promose consume");
// })


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task ");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('sudhir 2 promise');
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//      resolve({username:"sudhir",email:"chai@example.com"})   
//     },2000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })


const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if (!error) {
            resolve({ username: "sudhir", password: "123" })
        } else {
            reject('error: something went wrong');
        }
    }, 2000);
});

    promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
        return username; 
    })
    .catch(function(error) {
        console.log(error);
    }).finally(()=>console.log('promise is either resolve or reject'))


// usernamePromise.then((username) => {
//     console.log("Accessed username:", username);
// });


const promiseFive = new Promise (function(resolve,reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({uname:"sudhir", lname:"ams"})
        }
        else{
            reject('error: js went wrong')
        }
    }, 1000);
})

async function consumePromsise(){
    try {
        const response = await promiseFive
    console.log(response);
        
    } catch (error) {
        console.log(error); 
    }
}
consumePromsise()


async function getallUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
         response.json()
         console.log(response);
        // const data = response.json()
        // console.log(data);
    } catch (error) {
        console.log("E:",error);
    }
}

getallUsers()