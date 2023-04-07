function fiboEvenSum(n) {
   let arr = fibonacci(n)
   let taille = arr.length
   console.log(arr)
   let sum = 0

   for (let i = 0; i < n; i++) {
        if (arr[i] % 2==0) {
            sum += arr[i]
        }
   }
   console.log(sum)
    return sum;
}

fibonacci = function(n) {
    let arr = []
    let fiboMinus2 = 0
    let fiboMinus1 =  1
    arr.push(fiboMinus2)
    arr.push(fiboMinus1)
    let fibn
    for (let i = 2; i < n; i++) {
        fibn = fiboMinus1 + fiboMinus2
        arr.push(fibn)
        fiboMinus2 = fiboMinus1
        fiboMinus1 = fibn 
    }
    console.log(arr)
    return arr
}

fiboEvenSum(34)

function multiplesOf3and5(number) {
    let sum = 0
    for (let i = 0; i < number; i++) {
        if (i%3==0 || i%5==0) {
            sum += i
        }    
    }
    return sum;
  }
  
multiplesOf3and5(1000);