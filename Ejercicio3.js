var lengthOfLastWord = function (s) {
    let word = s.split(' ')
    let letra = word[1].split('')
    console.log(letra.length)
};

lengthOfLastWord("Hola mundo")
