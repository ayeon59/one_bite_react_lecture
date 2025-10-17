function main(value){
    value();
}

function sub(){
    console.log("hello");
}

main(sub);

main(() => {
    console.log("hello");
}
);


function repeat(){
    for(let idx = 1; idx <= count ; idx++){
        console.log(idx);
    }
}

function repeatDouble(){
    for(let idx = 1; idx <= count ; idx++){
        console.log(idx * 2);
    }
}

function repeatTriple(){
    for(let idx = 1; idx <= count ; idx++){
        console.log(idx * 3);
    }
}

function repeat(count,callback){
    for(let idx = 1; idx <= count ; idx++){
        callback(idx);
    }
}

repeat(5, (idx) => {
    console.log(idx)
})

repeat(5, (idx) => {
    console.log(idx*2)
})


repeat(5, (idx) => {
    console.log(idx*3)
})

