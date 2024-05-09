// map() is used to perform an array by applying function to each elemnt of an array and return new array with same lenth

// filter() is returns an new an after passing the given test use 
// filter() when you need a slect subset of an arrya based on some condition


//reduce() is used to aggregate the values of an array into single value 
// use reduce() when you perform action on every single element and comine result into single value


const nums  =[1,2,3,4,5]
const square =nums.map(n=> n*n)

// console.log(square);


const even= nums.filter(n=> n%2===0)
const morethanTwo=nums.filter((num)=>{
    return num >=2
})

// console.log(morethanTwo);

// console.log(even);


const addred=nums.reduce((a,b)=>a+b);
// console.log(addred);


const sum =morethanTwo.reduce((accu,curr,i,arr)=>{
    return accu + curr;
},0);

// console.log(sum);



let students =[
    {name:"suhdir",rno:2,marks:98},
    {name:"viks",rno:3,marks:80},
    {name:"sshub",rno:12,marks:55},
    {name:"vijs",rno:21,marks:4}
]

let passedstud= students.filter((stu)=> stu.marks>35).filter((stu)=>stu.rno<3)

console.log(passedstud);

let sumofmarks=students.reduce((accu,curr)=>accu+curr.marks,0);

console.log(sumofmarks);