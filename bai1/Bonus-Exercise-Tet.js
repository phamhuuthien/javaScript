//  toán tử ba ngôi

const x= 10;
// let result ;
// if(x<1000){
//     result = "nho hon 1000";
// }else{
//     result = "lon hon 1000";
// }

const result = x < 1000 ? "nho hon 1000" : "lon hon 1000";

//  shorthand evaluated

let variable2 ;
if(variable1!=null || variable1 !== undefined || variable1 !==""){
    variable2 = variable1;
}else{
    variable2 = "";
}


const variable = variable1 || ""


// variable declaration and if comparision

let x1, y1, z1 = 3; //x1=3 y1=3 z1=3

if(isTurnOn===true){} // if(isTurnOn)


//  for loop 
for(let i=0; i<mang.length; i++){

}

for(let i in mang){

}


// object property => enhanced oject literal
//  khi key trùng với tên biến

const x3 = 1, y3 = 2;
const obj = {x3,y3} // {x3=x3,y3=y3}

//  arrow function

// function sayHello(name){
//     console.log("hello")
// }

sayhello = name => console.log("hello");

setTimeout(() => {
    console.log("hello")
}, 2000);

list.forEach((i)=>{
    console.log(i);
})

// implicit return (ẩn return bằng arrow function)

function getValue(){
    return ratio * 9;
}

getValue = ratio * 9

// set default value for parameter in function

// function getValue(a,b,c){
//     if(a === undefined){
//         a=3;
//     }

//     if(b === undefined){
//         b=4;
//     }
//     return a*b+c;
// }

getValue = (a,b=3,c=4)=>(a*b+c)

//  template literal

const welcome = `you have logged in as ${fisrt} ${last}`

// destructuring assignment
// const action = require('lib/action')
// const service = require('lib/service')


// const form = this.props.form
// const error = this.props.error
// const entity = this.props.entity
// const controller = this.props.controller
// const component = this.props.component

import {action,service} from 'lib'

// import {form,error,entity,controller, component} = this.props

// spead operator

//  join array
const odd = [1,2,3]
const nums = [2,4,6,...odd]

// cloning arrays
const arr = [1,2,3,4]
const arr2 = [...arr]

const nums1 = [2,...odd,4,6]

// constraint param

// function sample(param1){
//     if(param1===undefined){
//         throw new Error("thieu tham so")
//     }
//     return param1
// }


madatory = ()=>{
    throw new Error("thieu tham so")
}

//  giá trị mặc định là 1 hàm. Nếu có lỗi thì hàm đó trả về throw kết thúc chương trinh không thi nó return 
sample = (param1= madatory)=>{
    param1
}

//  find in array

const employees = [
    {name : "a", age : 15},
    {name : "b", age : 25},
    {name : "c", age : 35},
]

const name = 'a' + employees
emp = employees.find(x => x.name === name)


// object key 

function validate (fullname){
    if(!fullName.firstname){
        return false;
    }
    if(!fullName.lastname){
        return false;
    }
    return true;
}

console.log(validate({firstName:'duy',lastName:'buffet'})) //true

const rule = {
    firstName : {
        required : true
    },
    lastName : {
        required : true
    }
}

const validate = (rule,values)=>{
    for(prop in rule ){
        if(rule[prop].required){
            if(!values[prop].required){
                return false;
            }
        }
    }
    return true;
}

console.log(validate(rule,{firstName :'duy'}))
console.log(validate(rule,{firstName :'duy',lastName:'buffet'}))


// Bitwise Not Double

Math.floor(6.9) === 6 //true
~~6.9 === 6 // true






