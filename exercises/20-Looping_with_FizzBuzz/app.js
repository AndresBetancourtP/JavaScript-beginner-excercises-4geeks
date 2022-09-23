function fizzBuzz() {  
	// Your code here
	for ( var numero = 1; numero <=100; numero++){
		if (numero % 15 == 0){
			console.log("FizzBuzz")
		} else if (numero % 5 == 0){
			console.log("Buzz")
		} else if (numero % 3 == 0){
			console.log("Fizz")
		
		} else {console.log("numero")}	
	}
}

fizzBuzz();