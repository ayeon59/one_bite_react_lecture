// 1. 묵시적 형 변환 : 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20"

const result = num + str

// 2. 명시적 형 변환 : 프로그래머가 직접 변환 하는 것
let str1 = "10";
let strTonum1 = Number(str1);

let str2 = "10개";
let strTonum2 = parseInt(str2); 
// 알아서 정수만 변환해줌 -> 10 출력