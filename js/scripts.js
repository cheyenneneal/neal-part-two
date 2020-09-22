// prompt first for rain fall`1 
var user = prompt("How many inches of rain fell?"); 
var number = Number(user); 
var input = "*".repeat(number); 
var usingFertilizer = prompt("Did you use fertilizer?"); 
var fertilizerQuality; 

if (usingFertilizer === "yes") { 
    fertilizerQuality = prompt("Did you use premium or regular fertilizer?"); } 

//default value for grain 
var grain = 50; 

//function to calculate the amount of rain 
function rainFall() { 
    var rainInches = number; 
    if (rainInches > 20) { 
        return ((grain / 100) * 90); } 
        else { return ((grain / 100) * 80); } } 
        
//fertilizer function 
function promptFertilizer() { 
    if (usingFertilizer === "yes") { 
        return typeFertilizer() } 
        else { return ("The yield should be "+ rainFall()+ " bushels per acres.") } } 
        
//fertilizer type Function 
function typeFertilizer() {
     if (fertilizerQuality === "regular") { 
         return ((rainFall() / 100) * 10); 
        } else { return ((rainFall() / 100) * 15); } } 
        var result; if (usingFertilizer == "yes") { 
            result = rainFall() + typeFertilizer(); 
        } else { result = rainFall(); } console.log(input); 
        
// console.log(promptFertilizer()); 
console.log("The yield should be "+ result + " bushels per acres."); 

// console.log(countAll());