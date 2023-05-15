/* Recursive Functions: */

/* 
- Rekursive Algorithmen
- Aufrufen einer Funktion aus sich selbst heraus
- Stack overflow: Die Bedeutung der Exit-Bedingung
- Lesen eines Programms VII (rekursiver Aufrufbaum) 
*/

/* 

Was man schon wissen sollte:

- Deklaration von Funktionen.
- Funktion als Wert.
- Schlüsselwort Return (besonders in if else statements).
- Funktionsaufruf innerhalb einer anderen Funktion.
- Reihenfolge der Funktionsaufrufe.
- Javascript Geltungsbereich.
- Parameter in Funktionen und scope.
- Unterschied zwischen Funktionsaufruf und Funktionsdefinition.
- array.pop(), string.slice(), substring(), charAt() 

*/
const func2 = function (x) {
    //func3()
    return "hallo" + x;
}

function func1 ( param ) {
    console.log(param);
    let result = func2("hallo");
    return "hallo" + result;
}

const funk3 = (param) => {

    if(param === 0) {
        return "Hello";
    }

    return funk3(param - 1)

}

const result = funk3(1);

//console.log(result);


// Sum Triangle Numbers

const sumNumbers = function (number) {

    if(number === 0) {
        return 0
    }

    return number + sumNumbers( number - 1 );

}

//console.log( sumNumbers(20) )


/* (9) => 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0

number + (number - 1) + (number - 1 - 1) */

/* function isPalindrome ( word ) {
    let newString = word.split("");
    let newStringReversed = newString.reverse();
    return word === newStringReversed.join("");
} */

function isPalindrome ( word ) {

    if(word.length === 1 || word.length === 0)
        return true;
   
    if(word[0] === word[word.length - 1]) {
        return isPalindrome( word.substring(1, word.length -1  ) )
    }

    return false

}

console.log( isPalindrome("SIMIN") );


