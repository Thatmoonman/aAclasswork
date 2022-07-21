function multiply(num1, num2) {
    if (num1 === 1) return num2;

    return num2 + (multiply(num1 - 1, num2))
}

// console.log(multiply(6,5))

function countDown(n) { //n = 0
    if (n === 0) { //Base Case //0 === 0
      console.log('Lift Off'); //Lift Off
      return;
    }
  
    console.log(n); //5 4 3 2 1
    countDown(n - 1); //Recursive Case //countDown(0)
  }
  //What is countDown doing?
  
//   countDown(5);

// 3! = 3 * 2 * 1                       // => 6
// 5! = 5 * 4 * 3 * 2 * 1               // => 120
function factorial(n) { //3
    if (n === 0 || n === 1) { //Base Case //1 === 0 || 1
      return 1;
    }
    // console.log('Before factorial call')
    let prev = factorial(n - 1); //Recursive Case factorial(4) = 24
    // console.log('After factorial call ', prev);
    let prod = n * prev; //5 * 24
    return prod; //120
  } 
  
//   console.log(factorial(5));
//   console.log(factorial(0));
//   console.log(factorial(3));

function power(base, exp) { //power()
    if(exp === 0) {
      return 1;
    }
    
    if (exp > 0) {
    let prev = 1 / base * power(base, exp - 1) ;
    return prev                                   
    } else if (exp < 0) {
    let prev = 1 / base * power(base, exp + 1)
    return 1/prev
    }
  }
  // console.log(power(2, -2));
  // console.log(power(2, 3)); 
  // console.log(power(2, 0));
  // console.log(power(100, 0));