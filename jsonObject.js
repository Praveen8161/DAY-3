//1st question answer
let obj1 ={name:"person 1", age:5};
let obj2 ={age:5,name:"person 1"};
if (Object.keys(obj1).length === Object.keys(obj2).length){
    let a = 0;
    for (var key in obj1){
        if (obj1[key] !== obj2[key]){
            a++;
        }
    }
    if(a === 0){
        console.log("The 2 object have same properties");
    }else{
        console.log("The 2 object doesn't have same properties");
    }
}else{
console.log("The 2 object doesn't have same properties");
}