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

let allList = "" ;
const addToList = function (toDo) {
  // this condition is for the first invocation, since "" is falsy then by using the NOT operator `!` then the condition is true
return list = list + ' ' + toDo ;
};
/*  
addToList("Eat"); // => 'Eat'
addToList("Play"); // => 'Eat Play'


//Q7 
/* ================================ Q7 ================================ */
/* 
Write a function `createToDoList` that works similarly to `addToList` function but instead of a global variable use a closure variable
*/
const createToDoList = function () {
  let allList = " ";
  return function (toDo) {
  
      allList = allList + '  ' + toDo;
      return allList;
    };
  
  };
const toDoListOne = createToDoList();

/* ================================ Q8 ================================ */
/* 
Write a function `deposit` that accepts a number argument `amount` and returns the current account balance after depositing the amount.
*/
let currentBalance = 0;
const deposit = function (amount) {
  currentBalance = currentBalance + amount;
  return currentBalance;

  
  // it is possible to return the expression directly since it has the updated value
  // return (currentBalance = currentBalance + amount);
};
/* 
deposit(100); // => 100
deposit(50); // => 150
*/
/* ================================ Q9 ================================ */

//Write a function `withdraw` that accepts a number argument `amount` and returns the current account balance after withdrawing the amount.
 
const withdraw = function ( amount ) 
{
if (currentBalance> amount){
  return currentBalance = currentBalance - amount ;
}
else return " insufficient funds, current balance: " + currentBalance

};


/* 
deposit(100); // => 100
deposit(50); // => 150
withdraw(70); // => 80
deposit(50); // => 130
withdraw(100); // => 30
withdraw(100); // => "insufficient funds, current balance: 30"
*/

//Write a function `withdraw` that accepts a number argument `amount` and returns the current account balance after withdrawing the amount.
//Write a closure function createAccount that accepts a number argument initialValue that 
//represents the starting value of the account balance and return a closure function with two parameters, 
//transactionType and amount that deposit or withdraw from the account balance depending on the transactionTypeand returns 
//the total balance amount. Make sure to prevent transactions that withdraw more than the total balance.
/*
const createAccount =  function (initialValue)  {
  let balance = initialValue;
  return function (transactionType, amount) {
    if (transactionType === "deposit") {
      return (balance = balance + amount);
    }
    if (transactionType === "withdraw") {
      if (amount < balance) {
        return (balance = balance - amount);
      } else {
        return "insufficient funds, current balance: " + balance;
      }
    }
  };
};
/*
/* 
const accountOne = createAccount(0);
accountOne("withdraw", 10); // => "insufficient funds, current balance: 0"
accountOne("deposit", 50); // => 50
accountOne("deposit", 70); // => 120
accountOne("withdraw", 10); // => 110
const accountTwo = createAccount(500);
accountTwo("withdraw", 100); // => 400
accountTwo("withdraw", 100); // => 300
accountTwo("deposit", 50); // => 350
accountTwo("withdraw", 500); // => "insufficient funds, current balance: 350"
*/


const createAccount  = function (initialValue) 
{
  let currentAccValue = initialValue ;
 return function (transactionType,amount)
  {
  if (transactionType === 'withdraw' )
  
  { if (currentAccValue > amount)   
   {

   return currentAccValue = currentAccValue - amount ;

   }
    else  {return "insufficient funds, current balance :  " +  currentAccValue}

  }

else 
    return currentAccValue = currentAccValue + amount;

  }
};

const accountOne = createAccount(0);

const accountTwo = createAccount(500);


//extra practice 
// every time the function is called it must check if the passed argument is the maximum number, minimum number, or
// both, and preserve the result for later invocations

const minMax = function (number) {
let min = Number.NEGATIVE_INFINITY;
let min =  Number.POSITIVE_INFINITY; 

  return" the maximum number is: " +  ???  + "  and the minimum number is " + ???? 
};

/* ==================================================================== */
/* ====================== Extra Practice Section ====================== */
/* ==================================================================== */

/* ================================ Q1 ================================ */
/* 
Write a function minMax that accepts a number argument number and returns a string representing the maximum number and the minimum number, read the comments for more information.
HINT search for NEGATIVE_INFINITY and POSITIVE_INFINITY on MDN
*/

// every time the function it is called it must check if the passed argument is the maximum number or minimum or
// both and preserve the result for later invocations

let min = Number.POSITIVE_INFINITY;
let max = Number.NEGATIVE_INFINITY;
const minMax = function (number) {
  if (number > max) {
    max = number;
  }
  if (number < min) {
    min = number;
  }
  return "the maximum number is: " + max + " and the minimum number is: " + min;
};

/*  
minMax(5); // => the maximum number is: 5 and the minimum number is 5
minMax(2); // => the maximum number is: 5 and the minimum number is 2
minMax(3); // => the maximum number is: 5 and the minimum number is 2
minMax(7); // => the maximum number is: 7 and the minimum number is 2
minMax(0); // => the maximum number is: 7 and the minimum number is 0
*/

/* ================================ Q2 ================================ */
/* 
Modify the `rockPaperScissors` function from the previous lesson to save the score of how many times the user has won and how many the user has lost. Return the score with every invocation.*/

// a function that randomly outputs `rock` or `paper` or `scissors`
const randomMove = function () {
  // gets a random number from 1-3
  const result = Math.ceil(Math.random() * 3);

  if (result === 1) {
    return "rock";
  } else if (result === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

let totalWins = 0;
let totalLoses = 0;

const rockPaperScissors = function (move) {
  const random = randomMove();

  if (move === random) {
    return "Won:" + totalWins + ", Lost:" + totalLoses;
  } else if (move === "rock") {
    if (random === "scissors") {
      totalWins += 1;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    } else {
      totalLoses += 1;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    }
  } else if (move === "paper") {
    if (random === "rock") {
      totalWins += 1;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    } else {
      totalLoses += 1;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    }
  } else if (move === "scissors") {
    if (random === "paper") {
      totalWins += 1;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    } else {
      totalLoses += 1;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    }
  } else {
    return "invalid move";
  }
};

/* 
rockPaperScissors("rock"); // => "Won: 1, Lost:0"
*/

/* ================================ Q3 ================================ */
/* 
Modify the rockPaperScissors function to have a score limit such as winning five times then reset the score back to zero.
*/
// a function that randomly outputs `rock` or `paper` or `scissors`
const randomMove = function () {
  // gets a random number from 1-3
  const result = Math.ceil(Math.random() * 3);

  if (result === 1) {
    return "rock";
  } else if (result === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

let totalWins = 0;
let totalLoses = 0;
let scoreLimit = 5;

const rockPaperScissors = function (move) {
  if (totalWins === scoreLimit || totalLoses === scoreLimit) {
    totalWins = 0;
    totalLoses = 0;
  }

  const random = randomMove();

  if (move === random) {
    return "Won:" + totalWins + ", Lost:" + totalLoses;
  } else if (move === "rock") {
    if (random === "scissors") {
      totalWins += 1;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    } else {
      totalLoses += 1;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    }
  } else if (move === "paper") {
    if (random === "rock") {
      totalWins += 1;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    } else {
      totalLoses += 1;
      return "Won:" + totalWinPercent + ", Lost:" + totalLoses;
    }
  } else if (move === "scissors") {
    if (random === "paper") {
      totalWins += 1;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    } else {
      totalLoses += 1;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    }
  } else {
    return "invalid move";
  }
};

/*
// lets assume the score limit is set to three
rockPaperScissors("rock"); // => "Won: 2, Lost:2"
rockPaperScissors("rock"); // => "Won: 2, Lost:3"
rockPaperScissors("rock"); // => "Won: 1, Lost:0"
*/

/* ================================ Q4 ================================ */
/* 
Modify the rockPaperScissors function to have an optional second boolean parameter reset that when true will reset the game score back to zero.
*/
// a function that randomly outputs `rock` or `paper` or `scissors`
const randomMove = function () {
  // gets a random number from 1-3
  const result = Math.ceil(Math.random() * 3);

  if (result === 1) {
    return "rock";
  } else if (result === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

let totalWins = 0;
let totalLoses = 0;
let scoreLimit = 5;

const rockPaperScissors = function (move, reset) {
  if (reset) {
    totalWins = 0;
    totalLoses = 0;
    return "the game has been reset";
  }

  if (totalWins === scoreLimit || totalLoses === scoreLimit) {
    totalWins = 0;
    totalLoses = 0;
  }

  const random = randomMove();

  if (move === random) {
    return "Won:" + totalWins + ", Lost:" + totalLoses;
  } else if (move === "rock") {
    if (random === "scissors") {
      totalWins += 1;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    } else {
      totalLoses += 1;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    }
  } else if (move === "paper") {
    if (random === "rock") {
      totalWins += 1;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    } else {
      totalLoses += 1;
      return "Won:" + totalWinPercent + ", Lost:" + totalLoses;
    }
  } else if (move === "scissors") {
    if (random === "paper") {
      totalWins += 1;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    } else {
      totalLoses += 1;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    }
  } else {
    return "invalid move";
  }
};

/*
rockPaperScissors("rock"); // => "Won: 1, Lost:0"
rockPaperScissors("", true); // => "the game has been reset"
rockPaperScissors("scissors"); // => "Won: 0, Lost:1"
*/

/* ================================ Q5 ================================ */
/* 
Modify the `rockPaperScissors` function to keep track of the last winner and modify the `randomMove` function to have a 25% chance of picking the same move if the user have lost the previous round, otherwise it picks a random move.
*/

// a function that randomly outputs `rock` or `paper` or `scissors`
const randomMove = function (winningMove) {
  let result;
  // if the user have lost the previous round there is a 25% chance for the random move to be repeated
  // since Math.ceil(Math.random() * 4) gets a value 1 to 4 then if it is equal to 4 it will be considered 25% chance
  if (isUserLoseLast === true && Math.ceil(Math.random() * 4) === 4) {
    return winningMove;
  } else {
    result = Math.ceil(Math.random() * 3);
  }

  if (result === 1) {
    return "rock";
  } else if (result === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

let totalWins = 0;
let totalLoses = 0;
scoreLimit = 5;
let isUserLoseLast = false;
let lastWinningMove;

const rockPaperScissors = function (move, rest) {
  if (reset) {
    totalWins = 0;
    totalLoses = 0;
    return "the game has been reset";
  }
  if (totalWins === scoreLimit || totalLoses === scoreLimit) {
    totalWins = 0;
    totalLoses = 0;
  }

  const random = randomMove(lastWinningMove);

  if (move === random) {
    return "Won:" + totalWins + ", Lost:" + totalLoses;
  } else if (move === "rock") {
    if (random === "scissors") {
      totalWins += 1;
      isUserLoseLast = false;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    } else {
      totalLoses += 1;
      isUserLoseLast = true;
      lastWinningMove = random;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    }
  } else if (move === "paper") {
    if (random === "rock") {
      totalWins += 1;
      isUserLoseLast = false;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    } else {
      totalLoses += 1;
      isUserLoseLast = true;
      lastWinningMove = random;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    }
  } else if (move === "scissors") {
    if (random === "paper") {
      totalWins += 1;
      isUserLoseLast = false;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    } else {
      totalLoses += 1;
      isUserLoseLast = true;
      lastWinningMove = random;
      return "Won:" + totalWins + ", Lost:" + totalLoses;
    }
  } else {
    return "invalid move";
  }
};

/* 
rockPaperScissors("rock"); // => "Won: 0, Lost:1"
// lets assume that the same random move was picked because of the 25% chance
rockPaperScissors("rock"); // => "Won: 0, Lost:2"
rockPaperScissors("rock"); // => "Won: 1, Lost:0"
*/

