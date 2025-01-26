function palindrome() {
    myString = "sir";
    // increase if any spacial characteror spaces are given in input has to be removed.
    var input = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    //to checkmpalindrom or not the string needs to be revarsed so we are reversing it by splitting and joininh it.
    var reversedInput = input.split('').reverse().join('');
    // checking for palindromeif (input ===reversed input) {
    if (input == reversedInput){
    document.write("<div>" + myString + " is a Palindrome </div>");
}
    else  {
    document.write("<div>" + myString + "is not a palindrome</div>")
}
}
//invoking function
