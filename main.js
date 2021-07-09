console.log(arrowTitle)
/* START CODE UNDER THIS LINE */
// make sure that the variable is in the global scope

// pulse check 
//Q1
let myFavoriteFood = "mansaf"

const favoriteFood = function () {

    return myFavoriteFood
    
  };
//Q2 

  const updateFavoriteFood = function (newValue) {
    let myFavoriteFood = newValue
     return myFavoriteFood
  };


  // Q3
  const createCounter = function () {
    let counter = 0;
  
    // this anonymous function is a closure function that has access to its own closure variable
    return function () {

      return ++counter;
    };
  };

  const counter1 = createCounter() ; 
const counter2 = createCounter() ;


const createCounter1 = function (start) {
  
  let counter = start ;

  return function() {

     return counter++ ;
  }

};

const counter3 = createCounter1(4) ; 
const counter4 = createCounter1(10) ;

// practice 

//Q1 
let age = 25;
if (true) {
  age = 30;
}
age; //->  

// BECOUSE THE IF STATEMENT VALUE IS TUE  SO IT WILL  CHANGE 
//THE VALUE OF AGE TO 30  
// Practice

//Q1
const myName = "John";
if (true) {
  const myName = "Jane";
}
myName; // ERROR becouse myName is a const we cant change its value  

//Q2

let number = 10;
const func1 = function () {
  let number = 15;

  if (true) {
    let  number = 24;
  }

  return number;
};

func1(); // 15 

const func2 = function (age) {
  age = 10;
  if (true) {
    let age = 24;
    age = 20;
  }

  return age;
};

func2(26); // 20


//Q3 

const countDown = function () {
  let strart1 = 7;
  return function () {
if (strart1 !== 0) { 
  return start1-- ;
}
else {return 'count down is over'}

  
}
};

//Q4 

const countUp = function () {

  
  return function () {
  strart1 = 0;
  return start1-- ;
}
};


//Q5

const resetCount = function (start) {
    start1=start ;

  return 'the count has been reset' ;

};
//Q6 
//how can i keep the old parameter 
const addToList = function (toDo) {
  const oldSave = function ()
  {
  addToList() + toDo 
  }
 return  oldSave; 

};


//Q7 



