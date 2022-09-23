function getColor(selection){

	var colorEnMinusculas = colortoLowerCase()
	colsole.log(color.colorEnMinusculas)
	switch(colorEnMinusculas){
		// Add more options here

			case "verde":
			return true:
			break;

			case "rojo":
			return true:
			break;

			case "azul":
			return true:
			break;

	    default:
	    	return false;  //returns false because the user picked an unavailable color
	    break;               
	}
}

var colorname = prompt('What color do you want?').trim();
var isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
