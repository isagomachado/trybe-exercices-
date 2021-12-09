const a = 54
const b = 4744
const c = 725

let result

if (a > b && a > c){
    result = a
}else if (b > a && b > c){
    result = b
}else{
    result = c
}

console.log(result)