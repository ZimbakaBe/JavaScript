function checkWords(input) {

    var regex = /(\w+)/gi;
    var firsText = input[0].toLowerCase();

    firsText = firsText.match(regex);
    var secondText = input[1];
    var repeatableWords = [];
    var count = 1;

    for (var i = 0; i < firsText.length-1; i++) {
        for (var j = i+1; j < firsText.length; j++) {
            if(firsText[i] === firsText[j]) {
                count++;
            }
        }
        if(count > 2) {
            repeatableWords.push(firsText[i]);
        }
        count = 1;
    }

    function uniqueWords(words) {
        var t = [];
        for (var i = 0; i < words.length; i++) {
            if(t.indexOf(words[i].toLowerCase()) == -1) {
                t.push(words[i]);
            }
        }
        return t;
    }

    var unique = uniqueWords(repeatableWords);

    count = 0;

    if(unique.length === 0) {
        console.log('No words');
    } else {

        var secondTextSplit = secondText.match(/[^\.!\?]+[\.!\?]+/g);

        var numberOfMatchedSentences = 0;

        for (i = 0; i < secondTextSplit.length; i++) {
            var gay = secondTextSplit[i].toLowerCase().match(regex);

            for (j = 0; j < unique.length; j++) {
                for (var k = 0; k < gay.length; k++) {
                    if(unique[j] === gay[k]){
                        count++;
                        break;
                    }
                }
            }
            if(count >= 2) {
                console.log(secondTextSplit[i].trim());
                numberOfMatchedSentences++;

            }
            count = 0;
        }

        if(numberOfMatchedSentences === 0) {
            console.log('No sentences');
        }
    }
}
//
checkWords(["Bogi prasna kat jivotno izpita po JS. Zareji che malko govorq po shlokavica, ti pak trebva da pretyrsi taq text po nekva raota deto beshe v uslovieto i sega se chudish kaf e adjeba taq test i koi idiot e pisal taq shlokavica. Da znaite taq shlokavica po KPK ne se priema.",
"Da si znaesh vhe ot taq shlokavica trebva da zemesh tova izrehenie no ima i tretata duma po! Mai mai tova e nai typiq text. Trqbva da machnete i tva izrechenie zashtoto sydyrja po i shlokavica."]);

//checkWords(["Captain Obvious was walking down the street. As the captain was walking a person came and told him: You are Captain Obvious! He replied: Thank you CAPTAIN OBVIOUS you are the man!",
//    "The captain was walking and he was obvious. He did not know what was going to happen to you in the future. Was he curious? We do not know."]
//);