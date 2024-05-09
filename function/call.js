function setUsername(username){
    this.username=username
}

function createUser(username,password,email){
    setUsername.call(this,username)
    this.password=password
    this.email=email
}

const sudir = new createUser('sudhhir',1354,'suhdira@fb.com');
console.log(sudir);