

// let s=0
// for(let i=1; i<=10; i++){
//     s=s+i
// }
// console.log(s)

// let n=3
// let fact=1;
// for(let i=1; i<n; i++){
//     fact*=i;
// }
// console.log(fact)

// for(let i=1; i<=85; i++){
//     if(i%2==0){
//         console.log("even" + i)
//     }else{
//         console.log("odd" + i)
//     }
// }

// prime number 
// let n = 17;
// let count = 0;
// for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         count++;
//     }
// }
// if (count == 2) {
//     console.log("Prime");
// } else {
//     console.log("Not Prime");
// }

// finding number of digits 


// let n=12345
// let count=0
//  while(n>0){
//     n=Math.floor(n/10)
//     count++
//  }
//  console.log(count)



// let i=0;

// while(i<=10){
//     console.log(i)
//     i++
// }

//sum 
 
// let sum=0
// let i=0
// let n=10
// while (i<=n) {
//     sum+=i
//     i++
// }
// console.log(sum)

// prime number using while 

let n=17
let count=0;
let i=1;

while(i<=n){
    if(n%i==0){
        count++
    }
    i++
}
if(count==2){
    console.log("Prime")
}else{
    console.log("non-prime")
}
