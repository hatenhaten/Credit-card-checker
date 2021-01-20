function validateCred(array) {
  
    // create a loop which outputs an array of every other digit from right to left
    // * each other item in the array by 2 and take 9 from the result
    
  
    for (let i = array.length - 2; i >= 0; i -= 2) {
      array[i] *= 2;
      if (array[i] > 9) {
        array[i] -= 9;
      };
    };
  
    // sum all the numbers in the array
    
    const summedArray = array.reduce((accumulator, currentVal) => {
      return accumulator + currentVal;
    });
  
    return summedArray % 10 === 0;
    
};


function findInvalidCards(arrayOfarrays) {
    const returnArr = [];
    arrayOfarrays.forEach(cardNumber => {
        if (validateCred(cardNumber)) { 
            returnArr.push(cardNumber);
        };
    });
};


module.exports = validateCred;
module.exports = findInvalidCards;