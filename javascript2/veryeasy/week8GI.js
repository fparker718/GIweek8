function findmin( num1, num2 ) {
    // Takes num1 and num2 as parameter

    // if num1 is smaller it returns num1
	if ( num1 < num2 )
      return num1;
    
    // if num2 is smaller it returns num2
    return num2;
}

console.log(findmin(10,100))
