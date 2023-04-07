/*alert("Hello !!!")
console.log("Hi")
console.error("I'm Happy")
console.warn("Be Carreful")
console.info("Cool !") */

//var result, firstName = "Bakar", lastName = "Seck"

var person = new Object();
/*person.firstName = "Bakar"
person.lastName = "SECK" */

var person = {
            firstName: "Bakar",
            lastName:"SECK"
}

document.getElementById('heading-1').innerHTML = "My Name is " + person.firstName + " " + person.lastName

console.log(person)

var a, b ;

/*function addNumber(a, b) {
    result = a + b
    document.getElementById("heading-2").innerHTML = result
} */

/*var addNumber = function(a, b) {
    result = a + b
    document.getElementById("heading-2").innerHTML = result
} */

/*var addNumber = function(a=3, b=2) {
    result = a + b
    document.getElementById("heading-2").innerHTML = result
}

var addeNumber = addNumber(7, 8)

addeNumber*/

/*(function(a, b){
    result = a + b
    document.getElementById("heading-2").innerHTML = result
})(45, 56) */

((a, b) => {
    var result = a + b ;
    document.getElementById("heading-2").innerHTML = result ;
})(45, 56);

