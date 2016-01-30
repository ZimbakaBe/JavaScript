function decypher(array) {
    var text = array[0];
    var number = Number(array[1]);
    var field = [];
    var key = 0;

    for (var i = 2; i < array.length; i++) {
        var line = array[i].split(' ');
        field.push(line);
    }

    for (var col = 0; col < field.length; col++) {
        for (var row = 0; row < field.length; row++) {
            var numberToCheck = Number(field[col][row]);
            for (var i = 0; i < field.length; i++) {
                for (var j = 0; j < field.length; j++) {
                    var currentNumber = Number(field[i][j]);
                    if(numberToCheck + currentNumber === number) {
                        key = col + row + i + j;
                        break;
                    }
                }
            }
        }
    }


    var decryptedMessage = ' ';

    for (var i = 0; i < text.length; i++) {
        var asciiValue = 0;
       if(i % 2 === 0) {
           asciiValue = text.charCodeAt(i) + key;
       } else {
           asciiValue = text.charCodeAt(i) - key;
       }
        decryptedMessage += String.fromCharCode(asciiValue);
    }
    decryptedMessage = decryptedMessage.trim();
    console.log(decryptedMessage);
}

//decypher([ 'QqdvSpg', '400', '100 200 120', '120 300 310', '150 290 370' ]);
decypher([ 'Vi`ujr!sihtudts', '0', '0 0 120 300', '100 9 300 100', '1 290 370 100', '10 11 100 550' ]);