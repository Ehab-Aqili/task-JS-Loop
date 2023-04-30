for (let i = 0; i < 2; i++) {
    for (let j = 1; j < 50; j+=2) {
        console.log(j)
        
    }
    console.log([i]);
}



var i = 0;
while (i < 2) {
console.log(i);
i++
var j = 0;
while (j < 50 ){
    if(j%2 == 0)
    console.log(j)
    j++
}
}


for (let i = 0; i <= 50; i+=2) {
    console.log(i)
    console.log(i)
}

for (let i = 0; i <= 100; i++) {
    if (i%5 == 0 && i%3 == 0) {
        console.log('FizzBuzz')
    }else if (i%5 == 0){
        console.log('Buzz')
    } else if (i%3 == 0){
        console.log('Fizz')
    } else {
        console.log(i)
    }
    
}

function FizzBuzz (n) {
    if (n%5 == 0 && n%3 == 0) {
        return('FizzBuzz')
    }else if (n%5 == 0){
        return('Buzz')
    } else if (n%3 == 0){
        return('Fizz')
    } else {
        return(n)
    }
    
}
   console.log(FizzBuzz(1))
   console.log(FizzBuzz(15))


function fizzBuzzRecursive(n) {
    if (n > 0) {
      fizzBuzzRecursive(n - 1); 
      if (n % 3 === 0 && n % 5 === 0) {
        console.log("FizzBuzz");
      } else if (n % 3 === 0) {
        console.log("Fizz");
      } else if (n % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(n);
      }
    }
  }
  fizzBuzzRecursive(100);


function convert(num, banknotes) {
    let result = []; 
    let i = 0; 
    
    while (num > 0 && i < banknotes.length) {
      let note = banknotes[i];
      if (note <= num) {
        result.push(note); 
        num -= note; 
      } else {
        i++; 
      }
    }
    
    return result.join(" ,"); 
  }


let inputNum = 57;
let inputBanknotes = [25, 10, 5, 1];
let output = convert(inputNum, inputBanknotes);
console.log(output); 

  
var orange = "Coding Academy by Orange"


function orange(str, char) {
    let count = 0;
    const lowerStr = str.toLowerCase();
    const lowerChar = char.toLowerCase();
    
    for (let i = 0; i < lowerStr.length; i++) {
      if (lowerStr[i] === lowerChar) {
        count++;
      }
    }
    return count;
  }
  console.log(orange("Coding Academy by Orange", "o")); 
  

for (let i = 1; i <= 20; i++) {
    console.log(i)
    
}


for (let i = 3; i <= 29; i++) {
    if (i%2 !== 0) 
    console.log(i)
}

for (let i = 14; i >= 12; i--) {
    console.log(i)
}

for (let i = 50; i >= 20; i--) {
    if(i % 3 == 0)
    console.log(i)
}


var orange = "CodingAcademy"
var arr = [7, 500, 'KH404', 'black', 36]

for (let i = 0; i < arr.length; i++) {
     console.log(arr[i])
}

for (let i = orange.length-1; i >= 0  ; i--) {
   console.log(orange[i])
    
}

var even =[]
var odd =[]
var arr = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124]
for (let i = 0; i < arr.length; i++) {
    const number = arr[i]

    if (number%2 ==0){
        even.push(number)
    } else{
        odd.push(number)
    }
}
console.log(even);
console.log(odd);




const protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
const grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
const vegetable = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
const beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
const dessert = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];
 
function createMeals(numOfMeals) {
  for (let i = 0; i < numOfMeals; i++) {
    var meal = [];
    meal.push(protein[Math.floor(Math.random() * protein.length)]);
    meal.push(grain[Math.floor(Math.random() * grain.length)]);
    meal.push(vegetable[Math.floor(Math.random() * vegetable.length)]);
    meal.push(beverage[Math.floor(Math.random() * beverage.length)]);
    meal.push(dessert[Math.floor(Math.random() * dessert.length)]);
    console.log(meal)
  }
}
createMeals(3)