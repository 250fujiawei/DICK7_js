import './style.scss'
import _, { first } from 'lodash'
import  mk from './src/components/btn.js'
// import {btnDomFunction,btnDomFunction2} from './src/components/btn.js'
import {btnDomFunction,btnDomFunction2 as btn2} from './src/components/btn.js'
import { info } from 'sass';

// 1
// 作用域
{    
  console.clear();
  console.log('==========- 1 Start ==================');

let a =1
console.log(a,typeof a);
a = "joshua";   
// let 只用声明一次
console.log(a,typeof a);


var b =1
console.log(b);
b=2
console.log(b);


const c=1
console.log(c);
// c=2


let d= true
console.log(d,typeof d);

// 有意义且有目的的空值 null
let e =null   
console.log(e);

// 未定义的值 undefined
let f =undefined 
console.log(f);


console.log('==========- 1 End ==================');
}

console.log(b);
// var 可以冲出作用域{} 变量提升




// 2
{
  console.clear();
  console.log('==========- 2 Start ==================');
// array
const a =[]
console.log(a,Array.isArray(a));
// 塞入
a.push (1)
a.push("joshua")
console.log(a);

// 从后往前
a.pop()
console.log(a);
  
// 从前往后
a.shift()
console.log(a);

a.push(1,"ok",[1,2,3],{name:"mike"})
console.log(a);

console.clear();
// object
const user ={
name:'joshua',
income:1000
}
console.log(user);

user.income =0
console.log(user);


// map
const c =new Map()
c.set('name','joshua')
c.set('income',2000)
console.log(c);
console.log(c.get('name'));


// Set  不重复
const d =new Set()
d.add('joshua')
d.add('income')
d.add('income')
console.log(d);


  console.log('==========- 2 End ==================');
}


// 3
{
  console.clear();
  console.log('==========- 3 Start ==================');


console.log( add(1,2)); 



// 箭头函数
const add2 =(a,b)=>{
  return a+b
}
console.log(add2(1,2));






  console.log('==========- 3 End ==================');

}

// 压栈  函数
function add (a,b){
  // console.log(a+b);
  return a+b
  }






// 4
{
  console.clear();
  console.log('==========- 4 Start ==================');
const btnDom = document.querySelector('span')
console.log(btnDom);
// const btnDomFunction2=()=>{
//   console.log('hate');
// }
// btnDom.addEventListener('click',(只有一个参数 不用括号 默认event)=>{
//   console.log('hate');
// })

btnDom.addEventListener('click',btnDomFunction)
console.log(mk(1,5));
// 同样 可以把function 直接放进btndomfunction里 不用改变
// function btnDomFunction(){
//   console.log('love');
// }

  console.log('==========- 4 End ==================');




}





// 5
{
  console.clear();
  console.log('==========- 5 Start ==================');
function aManWalk (name,age,income){

console.log(`My name is ${name} ,I am ${age} years old , my income is ${income}`);

}
aManWalk('joshua',17,0)


function score (a=0,b=0,c=50){
  console.log(a,b,c);
}
score(0,0,0)
score(0,0)
score(undefined,0,)

function score2 ({a=0,b=0,c=0}){
  console.log(a,b,c);
}
score2({b:9})


// function score3(info) {
//   const info2 = { a: 0, b: 0, c: 2, ...info }
//   console.log(info2);
//   console.log(info2.a, info2.b, info2.c);

// }
// const info = {
//   b: 30
// }
// score3(info)


function score4(a, b, ...c) {
  console.log(a, b, ...c);


}
score4(1, 2, 3, 4, 5, 5, 4)


  console.log('==========- 5 End ==================');
}

// 6
{
  console.clear();
  console.log('==========- 6 Start ==================');
  const testDom = document.querySelector('#test')
function lightOn (){
  console.log('light on');
  testDom.className = "light"
}
function lightOff() {

  console.log('light off');
  testDom.className = "dark"
}
let status = true
function lightSwitch() {

  if (status) {
    lightOn()
  } else {
    lightOff()
  }

  status = !status

}



document.querySelector('span').addEventListener('click', lightSwitch)




// for(let i=0;i<10;){
// console.log(i);
// i=i+1
// }
for (let i = 0; i < 100; i = i + 5) {
  console.log(i);}

const arr = ['name', 'age', 'income']
const inf = ['joshua', 17, 200000]
const user = {}
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i],inf[i]);
  user[arr[i]] = inf[i]
  console.log(user);
}


  console.log('==========- 6 End ==================');
}





// 7
{
  console.clear();
  console.log('==========- 7 Start ==================');
  if(0){
    console.log('true');
  }else{
    console.log('false');
  }
  // 0 '' null undefined NaN
  console.log(1===true);


  // 函数和条件语句的组合
  function LightOnOff(status) {
    if (status === 'on') {
      return true;
    } else {
      return false;
    }
  }
   let ak ='on'
  if (LightOnOff(ak)) {
    console.log('light on');
  } else {
    console.log('light off');
  }
  
  console.log(1==true);
  // 严格等
  console.log(1===true);
  }



  // if (statement){

  // }else if (statement2){

  // }else{

  // }

  // switch

//   switch(key)
// {
//   case 'joshua':
//     console.log(object);

//   break 
// }



  console.log('==========- 7 End ==================');




// 8
{
  console.clear();
  console.log('==========- 8 Start ==================');
  // for 循环
for (let i =1; i<10; i++){

for(let j =1;j<10;j++){
 
  console.log(i,j);
}
}

// while 循环
let i =1
while(i<2){
  i++
  console.log(i);
}

// 把array里面东西拉出 
const array=['a','b','c','d','e','f']

for (let i=0;i<array.length;i++){
  console.log(array[i]);
  if(array[i]==='b'){
   break
  }
}


// for 的进化
// item
for (let item of array){
  console.log(item);
  if(item==='b'){
    break
   }

}

// i
for (let i in array){
  console.log(array[i]);
  if(array[i]==='b'){
    break
   }
}



// // forEach
// array.forEach((item)=>{
//   console.log(item);

// })
// // some
// array.some((item)=>{
//   console.log(item);
//   if(item==='e'){
//     return true
//   }
// })

// // every 
// array.every((item)=>{
//   console.log(item);
//   if(item==='a'){
//   return false

//   }else{
//   return true
//   }
// })

  console.log('==========- 8 End ==================');}




  // 9
{
  console.clear();
  console.log('==========- 9 Start ==================');

let i =0
let j =i
console.log(i,j);
 j=10
console.log(i,j);

//区别 要是在{}里面 改变的是同一个{}里面内容
const user1 ={
  name :'joshua',
  income : 2000
}
let user2=user1
console.log(user1,user2);

user2.income=0
console.log(user1,user2);

// 如何单独改变呢 浅拷贝
const user3 ={...user1}
console.log(user3,user1);
user3.income=30
console.log(user3,user1);

// 深拷贝 yarn add lodash
const user4={
  name :'joshua',
  income : 2000,
  wife:{
    first:'kk'
  }
}
const user5=_.cloneDeep(user4)
console.log(user5,user4);
user5.wife.first='jj'
console.log(user5,user4);




  console.log('==========- 9 End ==================');}


  // 10
{
  console.clear();
  console.log('==========- 10 Start ==================');

// 把object里面东西拉出 
const user ={
  name :'joshua',
  income : 2000,

}
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));


Object.keys(user).forEach((key)=>{
  console.log(key,user[key]);
})

// array里面又有array 用flat降维

const userKeyList=['name','income',['height']]
console.log(userKeyList.flat(Infinity));

// 再用foreach拉出来

userKeyList.flat(Infinity).forEach((item)=>{
  console.log(item);
})
// 排大小顺序

const numberList=[34,21,66,99,-100]
numberList.sort((a,b)=>a-b)
console.log(numberList);




  
  console.log('==========- 10 End ==================');}
//   // 7
// {
//   console.clear();
//   console.log('==========- 7 Start ==================');





  
//   console.log('==========- 7 End ==================');}

//   // 7
// {
//   console.clear();
//   console.log('==========- 7 Start ==================');





  
//   console.log('==========- 7 End ==================');}

