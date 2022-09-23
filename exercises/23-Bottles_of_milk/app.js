// Your code here:
const lechita = () => {
    for ( var bottle = 99; bottle >= 0; bottle--){
        if (bottle > 1){

       
        console.log(´${bottle} bottles of milk on the wall, ${bottle} bottles of milk. 
        Take one down and pass it around, ${bottle - 1} bottles of milk on the wall.´)
 
 
           } else {
            console.log()
           }
        }
    }
    

console.log(lechita())