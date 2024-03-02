
console.log(10*9*8*7*6*5*4*3*2*1)

console.log((30*2)/4)


var y=3

console.log(y++)
console.log(++y)

console.log(" 1 and 0 " + (1&&0))
console.log(" 1 and 1 " + (1&&1))
console.log(" 1 or 0 " + (1||0))
console.log("not 0 " + !0)

var x = 3
if(x%2==0){
    console.log("so chan")
}else{
    console.log("so le")
}


var z=5;
switch (z) {
    case 2:
        console.log("so 2")
        break;
    case 3:
        console.log("so 3")
        break;
    case 4:
        console.log("so 4")
        break;
    default:
        console.warn("khong co case")
        break;
}



const y = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"];
let x = 3;

switch (x) {
    case 1:
        console.log(`Ngày ở vị trí ${x} trong tuần là: ${y[x - 1]}`);
        break;
    case 2:
        console.log(`Ngày ở vị trí ${x} trong tuần là: ${y[x - 1]}`);
        break;
    case 3:
        console.log(`Ngày ở vị trí ${x} trong tuần là: ${y[x - 1]}`);
        break;
    case 4:
        console.log(`Ngày ở vị trí ${x} trong tuần là: ${y[x - 1]}`);
        break;
    case 5:
        console.log(`Ngày ở vị trí ${x} trong tuần là: ${y[x - 1]}`);
        break;
    case 6:
        console.log(`Ngày ở vị trí ${x} trong tuần là: ${y[x - 1]}`);
        break;
    case 7:
        console.log(`Ngày ở vị trí ${x} trong tuần là: ${y[x - 1]}`);
        break;
    default:
        console.log("Nhập số từ 1 đến 7.");
}




function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

let numToCheck = 4;

if (isPrime(numToCheck)) {
    console.log("la so nguyen to")
} else {
    console.log("khong la so nguyen to")
}



var H = [["1", "1", "1"], ["1", "0", "0"], ["0", "1", "0"],["0", "0", "1"]];

var matran = "";

for (var i=0; i<4; i++ ) {
    for (var j=0; j < 3; j++){
        matran += H[i][j] + "";

    }
    matran += "\n"; 
}
console.log(matran);










