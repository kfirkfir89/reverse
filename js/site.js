//Get the string fromt he page
//Controller function
function getValues(){

    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);

}

//Reverse the string
//Logic function
function reverseString(userString){

    let revString = [];
    //reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }
    return revString;

}

//Display the reverse string to the user
//View Function
function displayString(revString){

    //wrtie to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`
    //show the alert box
    document.getElementById("alert").classList.remove("invisible");

}