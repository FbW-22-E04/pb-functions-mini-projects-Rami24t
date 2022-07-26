// ## 5.Mini Projects
// ## The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
// -   Write a function named  `tellFortune`  that:
//    -   takes 4 arguments: number of children, partner's name, geographic location, job title.
//    -   outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// -   Call that function 3 times with 3 different values for the arguments.

function tellFortune(children, pName, location, job){
    console.log(`You will be a ${job} in ${location}, and married to ${pName} with ${children} kids.`);
    }
    
    tellFortune(3,'Angela', 'Griechland', 'Flowermaker');
    tellFortune(Infinity,'Sophia', 'Greece', 'Philosopher');
    tellFortune(2,'Mary', 'Jerusalem', 'Carpenter');
    
    // ## The Puppy Age Calculator
    // You know how old your dog is in human years, but what about dog years? Calculate it!
    // -   Write a function named  `calculateDogAge`  that:
    //     -   takes 1 argument: your puppy's age.
    //     -   calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
    //     -   outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
    // -   Call the function three times with different sets of values.
    // -   **Bonus**: Add an additional argument to the function that takes the conversion rate of human to dog years.
    
    function calculateDogAge(age = 0,rate = 7){
    console.log(`Your doggie is ${age*rate} years old in dog years!`);
    }
    
    calculateDogAge(3);
    calculateDogAge(13);
    calculateDogAge(5,5);
    
    // ## The Lifetime Supply Calculator
    
    // Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
    
    // -   Write a function named  `calculateSupply`  that:
    //     -   takes 2 arguments: age, amount per day.
    //     -   calculates the amount consumed for rest of the life (based on a constant max age).
    //     -   outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
    // -   Call that function three times, passing in different values each time.
    // -   **Bonus**: Accept floating point values for amount per day, and round the result to a round number.
    
function calculateSupply(age,amountPerDay, maxAge){
    let result = `You will need ${Math.round((maxAge-age||100-age)*amountPerDay*365.25).toLocaleString()} units to last you until you are the ripe old age of ${maxAge||100}. Happy snacking!`;
    console.log(result);
    return result;
    }

    calculateSupply(22, 2);
    calculateSupply(25, 3);
    calculateSupply(30, 4);



    
    // ## The Geometrizer
    
    // Create 2 functions that calculate properties of a circle, using the  [definitions](http://math2.org/math/geometry/circles.htm)  here.    
    // Create a function called  `calcCircumfrence`:
    // -   Pass the radius to the function.
    // -   Calculate the circumference based on the radius, and output "The circumference is NN".
    // Create a function called  `calcArea`:
    // -   Pass the radius to the function.
    // -   Calculate the area based on the radius, and output "The area is NN".

    
    function calcCircumfrence(r){
        let p=2*PI*r;
        console.log('The circumference is',p);
    }

    function calcArea(r){
        let a=PI*r*r;
        console.log('The area is',a);
    }
    
    // ## The Temperature Converter
    // It's hot out! Let's make a converter based on  [the steps](http://www.mathsisfun.com/temperature-conversion.html)  here.    
    // Create a function called  `celsiusToFahrenheit`:    
    // -   Store a celsius temperature into a variable.
    // -   Convert it to fahrenheit and output "NN°C is NN°F".    
    // Create a function called  `fahrenheitToCelsius`:    
    // -   Now store a fahrenheit temperature into a variable.
    // -   Convert it to celsius and output "NN°F is NN°C."

    function celsiusToFahrenheit(celcius){
        let fahrenheit = celcius*9/5 + 32;
        console.log(celcius + '°C is '+fahrenheit+'°F');
        return fahrenheit;
    }
    celsiusToFahrenheit(0);

    function fahrenheitToCelsius(fahrenheit){
        let celcius = (fahrenheit - 32)*5/9;
        console.log(fahrenheit+"°F is "+celcius+"°C.")
        return celcius;
    }
    fahrenheitToCelsius(0);