module.exports = function toReadable (number) {
    const dictWords = {
        1:'one', 
        2:'two', 
        3:'three',  
        4:'four', 
        5:'five',
        6:'six', 
        7:'seven', 
        8:'eight', 
        9:'nine',
        10:'ten',
        11:'eleven',
        12:'twelve',
        13:'thirteen',
        14:'fourteen',
        15:'fifteen',
        16:'sixteen',
        17:'seventeen',
        18:'eighteen', 
        19:'nineteen',
        20:'twenty', 
        30:'thirty', 
        40:'forty', 
        50:'fifty',
        60:'sixty',
        70:'seventy',
        80:'eighty',
        90:'ninety'
    };

    const numberStr = number.toString();

    if (number === 0) {
        return 'zero';
    }

    else if (typeof dictWords[number] !== 'undefined') {
        return dictWords[number];
    }

    else if (numberStr.length === 2) {
        return dictWords[number - numberStr[1]] + ' ' + dictWords[numberStr[1]];
    }

    else if (numberStr.length === 3) {
        if (typeof dictWords[number % 100] !== 'undefined') {
            return dictWords[numberStr[0]] + ' hundred ' + dictWords[number % 100];
        }

        else if (number % 100 === 0) {
            return dictWords[numberStr[0]] + ' hundred';
        }

        else {
            const dozens = number % 100 - numberStr[2];
            return dictWords[numberStr[0]] + ' hundred ' + dictWords[dozens] + ' ' + dictWords[numberStr[2]];
        };
    };
}
