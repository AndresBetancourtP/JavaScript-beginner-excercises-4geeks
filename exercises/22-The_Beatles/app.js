function sing() {
    // `let it be, let it be, let it be, let it be, whisper words of wisdom, let it be, let it be, let it be, let it be, let it be, there will be an answer, let it be`
    let result = "";
    function repeat(x) {
        for (let i = 0; i < x; i++) {
            result += "let it be, ";
        }
    }
    repeat(4);
    result += "whisper words of wisdom, ";
    repeat(5);
    result += "there will be an answer, ";
    result += "let it be"

    return result;

}

//Your code above ^^^

console.log(sing());