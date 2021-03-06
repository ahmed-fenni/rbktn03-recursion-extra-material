// Exercises
//------------------------- Basic Requirments -------------------------
// 1.Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, e.g

  function sum (n) {
	if (n === 0) {
		return 0;
	}
	return n + sum(n-1);
}
//  sum(3); // => 3 + 2 + 1 + 0 => 6
//  sum(4); // => 4 + 3 + 2 + 1 + 0 => 10
//  sum(5); // => 5 + 4 + 3 + 2 + 1 + 0 => 15
// HINT: We can rephrase 'the sum of n' as 'n plus the sum of n - 1'.

// 2.Factorial of n: The factorial of n is the product of all the integers preceding n, starting with 1, e.g.
 function factorial(n){
 	if (n===0){
 		return 1;
 	}
   return n * factorial(n-1)
 }

//  factorial(3); // => 3 * 2 * 1 => 6
//  factorial(4); // => 4 * 3 * 2 * 1 => 24
//  factorial(5); // => 5 * 4 * 3 * 2 * 1 => 120
// Implement the factorial function by observing that the 'factorial of n' can be rephrased as 'n times the factorial of n - 1'.

// 3.Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string str should be repeated, e.g.

 function repeatString (str, count){
	if (count === 0){
		return '';
	}
	return str + repeatString(str, count - 1)
}

//  repeatString('dog', 0); // => ''
//  repeatString('dog', 1); // => 'dog'
//  repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog'
//  repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'
// Your task is to implement the repeatString function using the observation that to repeat a string some count,
//  we can concatenate that string onto the result of repeating the string count - 1.
//  HINT: Observe that repeatString('dog', 0) should yield the empty string, ''.
//  What happens if you evaluate this: ' ' + 'dog'?

// 4.Compute the nth Fibonacci Number: The fibonacci numbers are represented by the following sequence:
function fib (n){
	if(n === 1 || n === 0){
		return 1;
	}
	return fib(n - 1) + fib(n - 2)
}
//  // fib(n): 1 1 2 3 5 8 13 21
//  //         | | | | | |  |  |
//  //      n: 0 1 2 3 4 5  6  7
// That is, fib(0) is 1, fib(1) is 1, fib(2) is 2, fib(3) is 3, fib(4) is 5, etc.
//  Notice that each fibonacci number can be computed by adding the previous two fibonacci numbers,
//  with the exception of the first two: fib(0) and fib(1). More succinctly,
//  fib(0) is 1
//  fib(1) is 1
//  fib(n) is fib(n - 1) + fib(n - 2)
//  Write a function called fib that accepts a number n as a parameter and computes the nth fibonacci number using the above rules.

// 5.Write function that multiply the number by 10 n time
    function multiplyBy10(x, y){
    if (y <= 0){
        return x;
    }
        return multiplyBy10(x * 10, y - 1);
}
//  multiplyBy10(number, n)
//  multiplyBy10(4,3) => 4000
//  multiplyBy10(5,2) => 500
// ------------------------- More Practice -------------------------

// 1.Modify your sum function from the Basic Requirements section to accept two parameters, start and end: sum should now compute the sum of the numbers from start to end, e.g.

     function sum(start,end){
	if (end+1===start){
		return 0;
	}
	return start + sum(start+1,end)
}

//  sum(2, 7); // => 2 + 3 + 4 + 5 + 6 + 7 => 27
//  sum(3, 5); // => 3 + 4 + 5 => 12
// What happens if start is larger than end? Modify sum to check for this case and, when found, swap the start and end arguments.

// 2.Write a function product that works like sum, except it should compute the product of the numbers from start to end.
    
// Refactor your sum function from earlier to be implemented in terms of product.
     function product(start,end){
	if (end+1===start){
		return 1;
	}
	return start * product(start+1,end)
}
// 3.Let's pretend that JavaScript does not have the addition operator + -- instead, it comes with two functions called inc and dec that perform increment and decrement respectively:

  function inc(x) {
  return x + 1;
}

 function dec(x) {
  return x - 1;
}

function add(x,y){	
if (y===0){
 		return x;
 	}
    return add(inc(x),dec(y))
 }
 
// Your task is to write a function called add that takes two numbers as parameters, x and y, and adds them together.
//  The catch is that you can only use inc and dec to accomplish this.

// 4.Write a function called isEven that, given a number n as a parameter, returns true if that number is even, and false otherwise; however, you need to do this without using the % operator
  function isEven(n){
  	  if(n===0){
  		return true
  	}
      else if (n===1){
      	return false
      }
      return isEven(n-2) 
      
  }
// 5.Write a function called multiply that accepts two numbers as parameters, and multiplies them together -- but without using the * operator; instead, you'll need to use repeated addition.
  
function multiply(x,y){
debugger
 	
  if(y===0){
  		return 0;
  	} 
      return (x + multiply(x, y - 1));
      
  }
// 6.Write a JavaScript program to get the integers in range (x, y)
  function IntergerInrange(x,y) {
    if (y-1===x) {
        return ''
   
    }
    return (x + 1 + ',' + IntergerInrange(x+1,y))
}
//  range(1,9)   => '2, 3, 4, 5, 6, 7, 8'
//  range(21,33) => '22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32'
// Read about Increment and Decrement operators in JS

 

// ------------------------- Advanced -------------------------

// 1.By now you should have worked with the length property of strings, e.g. 'hello'.length. Your task is to write a function called stringLength that accepts a string as a parameter and computes the length of that string; however, as you may have guessed, you are not allowed to use the length property of the string! Instead, you'll need to make use of the string method called slice. To get an idea of how slice works, try the following at a console:
    function length(str){
        if (str===''){
            return 0
        }
          return 1 +length(str.slice(1))
    }

//  'hello'.slice(0);
//  'hello'.slice(1);
//  ''.slice(1);
// For our purposes, we can consider slice as taking one argument -- the index to begin slicing from,
//   and returns a new string starting from that index onwards.
//  Indices are positions of characters within strings, and they always begin counting from 0, e.g:
//  // 'h e l l o' (spaces added for clarity)
//  //  | | | | |
//  //  0 1 2 3 4
//  The 'h' character has index (position) 0 in the string 'hello', 'e' has index 1, 'l' has index 2, etc.

// 2.The 'modulo' operator (%) computes the remainder after dividing its left operand by its right one, e.g. 

function modulo(x, y){
    if (x === 1){
        return 0;
    }else if (x < y){
        return x;
    }else if (x >= y){
      return modulo((x -y), y);
    }
}
//  5 % 2; // => 1
//  8 % 10; // => 8
//  7 % 5; // => 2
// Write a function called modulo that works like the % operator, but without using it.

// 3.Write a function called countChars that accepts two parameters: a string and a character. This function should return a number representing the number of times that the character appears in string. To access the first element of a string, you can use the following syntax:

function countChars (str,y) { 
        if (str==="") {
            return 0
        } 
        else if (str[0]===y) {
            return 1 + countChars(str.slice(1),y)
        } else  {
            return countChars(str.slice(1),y)
        }
    }
// 4. Implement a function called indexOf that accepts two parameters: a string and a character, and returns the first index of character in the string. You'll need to make use of the techniques for accessing the first element of a string and the rest of the string (slice) as before.

function indexOf(str,y){
        if (str[0]===y || str==="") {
            return 0
        }
         return 1 + indexOf(str.slice(1),y)
    }


// 5.The power function in the lecture works, but can be made considerably faster through a method known as successive squaring. To get an idea of how this works, observe that:
function power(base,exponent){
    if ( exponent===0){
  return 1;
    }
    else if (exponent ===1){
  return base ;
    }
    else if (exponent%2===0){
         return power(base*base,(exponent/2))
    }
   else {
         return base*power(base*base,((exponent-1)/2))
   }
}
// Modify the power function to take advantage of this technique.

// 6.Write function called reverse that take a string and return the revers string
function reverseString(str){
	if (str===''){
		return ''
	}
       return  reverseString(str.slice(1)) + str[0]
  }
//  reverse( 'Fatima' ) => 'amitaF'
//  reverse( 'this could be an easy question ' ) =>
//  'noitseuq ysae na eb dluoc siht'.

// 7.Find the greatest common divisor of two numbers.
function gcd(x,y){
	if (x>y){
	    return (x%y)
	}
   
      return  gcd(x,y-y)
	}
// 8.Find the lowest common multiple of two numbers. Assume that the two numbers are greater than or equal to 2.
function lcd
// 9.There are N number of persons in a party, find the total number of handshake such that a person can handshake only once.
