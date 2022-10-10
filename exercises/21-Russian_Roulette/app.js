let firePosition = 1;

const spinChamber = () => {
	let chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

const fireGun = (chamberPosition) => 

{

if(chamberPosition == firePosition)
    
{return "You're dead!"}   

else 

{return "Keep playing!"}
    
};

console.log(fireGun(spinChamber()));

//hasta el ejercicio 21


