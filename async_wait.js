function login(username,password)
{
    return new Promise((resolve,reject)=>
    {
        console.log("login is working");

        if(username == 'sudhir' && password == "123456")
        {
            resolve(username);

        }
        else
        {
            reject('username or password is mismatched');
        }
        
    })
}


function displayData(username)

{
    return new Promise((resolve,reject)=>
    {
        console.log('diplaying data');
        resolve("hello" + " " +  username);


    })
}


async function doThis()
{
    try
    {
    const data = await login('sudhir', '1234567');
    const res =await displayData(data);
    console.log(res);
    }
    catch(err)
    {
        console.log('err');
    }
}
doThis();