// const user ={
//     username:"sudhir",
//     Logincount:8,
//     SignedIn:true,

//      getUserDetails: function(){
//         console.log("got user deatils from database");
//         // console.log(`username ${this.username}`);
//     }

// }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,Logincount,isloggedIn){
    this.username = username;
    this.Logincount = Logincount;
    this.isloggedIn = isloggedIn

    return this
}
const userOne = new User("hitesh", 12, true)
const userTwo = new User("sudihr", 12, true)
console.log(userOne,userTwo);