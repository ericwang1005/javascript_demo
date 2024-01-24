/*var是屬於全域變數盡量不用*/
var w = 'World'
/*let是優於var 並且不會影響到其他變數*/
let x=10;
let ch = 60;
let eng = 60;
let math = 100;
if((ch>=60 || eng>=60) && math>=60){
    console.log('Pass');
}else{
    console.log('Failed');
}


console.log(++x);
console.log(x++);
let y=3;
/*const 是常數命名，不接受後續更改*/
const pi = 3.1415926
/*型態轉換 可以直接帶*/
console.log(10==='10');
console.log(String(10)==='10');

let email = 'mary@gmail.com';
console.log(email);
console.log(email.length);
console.log(email[email.length-1]);
for(let i=0;i<email.length;i++){
    console.log(email[i]);
}
//alert(x+y)
/*計算園面積*/
/*計算BMI*/
/**
    prompt 是提示輸入
    typeof 類型 
**/
// let weight = prompt('請輸入體重:');
// let height = prompt('請輸入身高(m):')
// let result = weight/(height/100)**2
// console.log(result,typeof(result))
// document.write("<h2>"+"您的BMI為"+result+"</h2>")

//函示宣告
function getRandomInt(start,end){
    let r = Math.floor(Math.random()*end)+start;
    return r;
}
function getNumber(num){
    let numbers=[]
    // 外迴圈
    for(let j=0;j<num;j++){
        let number_set =[]
        // 輸出六個數字到網頁上
        while(true){
            let r = getRandomInt(1,49);
            if (!number_set.includes(r)){
                number_set.push(r);
            }
            if(number_set.length==6){
                break;
            }
        }
        // 升降序需要給他一個方法
        number_set.sort(compare)
        numbers.push(number_set);
    };
    return numbers;
};
function bingo(){
    const lottoryEl = document.querySelector('#lottory');
    numbers = getNumber(5)
    lottoryEl.innerText=''
    //陣列(串列)
    for(let i=0;i<numbers.length;i++){
        let result = numbers[i].join(',')
        console.log(result);
        lottoryEl.innerHTML+=`<h3>第${i+1}組號碼: ${result}</h3><hr>`
        //document.write(`<h3>第${i+1}組號碼: ${result}</h3><hr>`);
    }
};

const dateEl = document.querySelector('.date');
dateEl.innerText=Date()
let btnBingo = document.querySelector('.btn')


      
console.log(numbers);

// 方法原理是利用數字倆倆比對
function compare(a,b){
    return a-b
}



x = '3.5';
//document.write(parseInt(x))

/*
Object ==> Json
*/
let user = {
    name :"Eric",
    height:173.6,
    weight:73.1
}
console.log(typeof(user));
console.log(user);
console.log(user.name,user['name']);
// 計算bmi函式

function bmi(h,w){
    let result = w/(h/100)**2
    if(isNaN(result)){
        return '數值錯誤'
    }
        return result.toFixed(2)
    }
document.write(parseFloat(bmi(user.height,user.weight)));
const h1=document.querySelector('h1');
h1.innerHTML='大樂透';


