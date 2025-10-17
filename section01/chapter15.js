// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 

// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name: "아연",
    age: 26,
    hobby: "없다",
    extra: {},
    10: 20,
    "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
let age = person["age"];

let property = "hobby";
let hobby = person[property];

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "nothing";
person["favoriteFood"] = "마라탕";

// 3.3 새로운 프로퍼티를 수정하는 방법
person.hobby = "있다";
person["age"] = 27;

// 3.4 프로퍼티를 삭제하는 방법
delete person.name;
delete person["hobby"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법
let result1 = "age" in person