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
    myFavoriteFood = newValue
     return myFavoriteFood
     // لو ما حطيت ريتيرن عادي لانو
     // السؤال قللي وظيفة الفنكشن بس يعدل القيمة 
//فعادي لو ما رجعها 
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

// Q4 
const createCounter1 = function (start) {
  
  let counter = start ;

  return function() {

     return ++counter ;
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
age; //->  30

// BECOUSE THE IF STATEMENT VALUE IS TUE  SO IT WILL  CHANGE 
//THE VALUE OF AGE TO 30  
// Practice

//Q1
const myName = "John";
if (true) {
  const myName = "Jane";
}
myName; // john

//Q2

let number = 10;
const func1 = function () {
  let number = 15;

  if (true) {
    let  number = 24;
  }

  return number;
};
// هسا هو شايف ال ليت اللي جوا ال فنكشن وبتعامل معها 
// كانها شي جديد  وبرجعها 15 
// 
func1(); // 15 

const func2 = function (age) {
  age = 10;
  if (true) {
    let age = 24;
    age = 20;
  }

  return age;
};

func2(26); // 10


//Q3 
let strart1 = 7;
const countDown = function () {
 
if (strart1 > 0 ) { 
  return start1-- ;
}
else {return 'count down is over'}

  
};


//Q4 
// ما في داعي ارجع
// اعطيه قيمة يبلش منها زز رح ياخد اللي بالسؤال اللي قبلو 
const countUp = function () {
  return function () {
  return ++start1 ;
}
};


//Q5

const resetCount = function (start) {
    start1=start ;

  return 'the count has been reset' ;

};
//Q6 
//how can i keep the old parameter ??? 

const addToList = function (toDo) {

  
 return   old +  toDo ; 

} 

let old = addToList ;

//Q7 



