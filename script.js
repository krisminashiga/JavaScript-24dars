//   4dars 1vazifa
// var n = 15
// var juft=0
// var toq=1

// for(var i=1; i<=n; i++){
//     if(i%2===0){
//         juft = juft + i
//     }else{
//         toq = toq*i
//     }
// }
// console.log(juft);
// console.log(toq);

//   4dars 2vazifa

// var arr = [3,4,5,62,7,9,1]
// var juft=0
// var toq=0
// for(var i of arr){
//     if(i%2===0){
//         juft++
//     }else{
//         toq++
//     }
// }
// console.log(arr);
// console.log(juft +" ta juft son mavjud");
// console.log(toq +" ta toq son mavjud");

// //   4dars 4-vazifa

// var soz = 'Gulchehra Sadullayeva'

// soz = soz.toLowerCase()
// var harf = 0

// for (var i of soz) {
//     if(i==='u') harf++
//     else if(i==='e') harf++
//     else if(i==='a') harf++
// }
// console.log(soz);
// console.log(harf +" ta unli harflar bor.");

// // 4dars 3vazifa
// var arr = [2,3,4,5,6,7,8,9,1,44,43]

// var ikkiga = 0


// for(var i of arr){
//     if(i%2===0){
//        ikkiga++;
//     }
// }
// console.log(arr);
// console.log("2 ga bolinadigan sonlar = "+ikkiga)

//  4dars  5vazifa

var arr = [4,4,5,4,4]
console.log(arr);

for(var i = 0; i < arr.length; i++){
    if(arr[i] === 4){
      arr.splice(i,1)
      i--
    }
}
console.log(arr);