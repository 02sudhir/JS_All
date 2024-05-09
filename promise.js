let myPomise = new Promise((resolve,reject) =>
{
    let x =1 ;
    if(x==2)
    {
        resolve("done");
    }
    else
    {
        reject("reject");
    }
})


myPomise.then((res)=>
{
    console.log("done succesfulle",res);
}).catch((err)=>
{
    console.log("failed",err);
})