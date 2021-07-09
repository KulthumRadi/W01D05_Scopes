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


  const createCounter = function () {
    let counter = 0;
  
    // this anonymous function is a closure function that has access to its own closure variable
    return function () {

      return ++counter;
    };
  };

  const counter1 = createCounter() ; 
const counter2 = createCounter() ;