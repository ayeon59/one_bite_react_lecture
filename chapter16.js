const animal = {
    animal: "고양이",
    name: "나비",
    color: "pink",
};

animal = { a: 1 }
animal.color = brown; // 수정
animal.age = 10; // 추가
delete animal.name; // 삭제

const person={
    name : "이정환",
    sayHi: function() {
        console.log("hi");
    },
    sayHello: () =>{
        console.log("hello");
    },
    sayBye() {
        console.log("Bye");
    },
}

person.sayHi();
person["sayHello"]();
person["sayBye"]();