//1)Print odd numbers in an array
//anonymous  :  
let oddnumber=function (array){
                  for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                           console.log(array[i])
                        } 
                   }
                }
//IIFE :       
(function(array){
             for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                           console.log(array[i])
                        } 
                   }
             })([1,2,3,4]);
             

 //  2)Convert all the strings to title caps in a string array
   
 //anonymous :   
 let = tittleCaps= function (str) {
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i < str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                    } 
                    return str.join(' ');
                  }
//IIFE : 
(function (str) {
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i < str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                    } 
                    return str.join(' ');
                  })("MUDRA IS MY NAME");

//3)Sum of all numbers in an array 
//anonymous  :  
let sum= function(array){
                  var sum = 0;
                  for(var i = 0 ; i< array.length ; i++){
                     sum = sum + array[i];
                   }
                   return sum;
                }
//IIFE :       
(function(array){
             var sum = 0;
                  for(var i = 0 ; i< array.length ; i++){
                     sum = sum + array[i];
                   }
                   return sum;
             })([1,2,3,4]);

//4)Return all the prime numbers in an array
//    Anonymous Function:
    let primenumber= function(numArray){
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  }
  // IIFE 
                   (  
                   function(numArray){
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  })([1,2,3,4])

//5)  Return all the palindromes in an array

 // Anonymous Function :  
                        let pallindrome= function (arr, n){
                        // Traversing each element of the array
                        // and check if it is palindrome or not
                        for (let i = 0; i < n; i++)
                        {
                            let ans = isPalindrome(arr[i]);
                            if (ans == false)
                                return false;
                        }
                        return true;
                    }
                    
    IIFE : 

                            (  function (arr, n)
                        {
                            // Traversing each element of the array
                            // and check if it is palindrome or not
                            for (let i = 0; i < n; i++)
                            {
                                let ans = isPalindrome(arr[i]);
                                if (ans == false)
                                    return false;
                            }
                            return true;
                        })([1,2,3] , 3)


//6).Return median of two sorted arrays of same size
//Q.Remove duplicates from an Array
//Anonymous Function : 
                              let sorted_array= function(array){
                                                    let dup = [...new Set(array)];
                                                    console.log(dup);
                                                }
//IIFE :               
                                 (function(array){
                                                    let dup = [...new Set(array)];
                                                    console.log(dup);
                                                })([1,1,2,3,4])
                                                    

//7).Rotate an array by K times


//Anonymous function : 
                                let rotate_array=function(array , k){
                                    let n= array.length;
                                    for (var i=1; i<=k;i++){
                                    array.unshift(array[n-1]);
                                    array.pop();
                                    }
                                    return array;
                                }
                                                        
   //IIFE :   
                                (function(array , k){
                                    let n= array.length;
                                    for (var i=1; i<=k;i++){
                                    array.unshift(array[n-1]);
                                    array.pop();
                                    }
                                    return array;
                                                        })([1,2,3,4] , 2)