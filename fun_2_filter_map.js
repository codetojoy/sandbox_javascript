
var numbers = [1,2,3,4,5,6]

numbers.filter( n => (n % 2 ==0) )
       .map( n => n * 100 )
       .forEach( n => console.log(n) )
