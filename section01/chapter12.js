function funA(){
    console.log("hello");
}

let varA = funA;
varA();


let varB = function (){
    console.log("funB");
};

varB();


let varC = () => {
    console.log("funC");
}

varC();