const validateCred = array => {
  const cardCopy = [...array];
  
  for (let i = cardCopy.length - 2; i >= 0; i -= 2) {
    cardCopy[i] *= 2;
    if (cardCopy[i] > 9) {
      cardCopy[i] -= 9;
    }
  };

  const summedArray = cardCopy.reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
  });

  return summedArray % 10 === 0; 
};


function findInvalidCards(cardNumbers) {
  const invalidCards = [];

  cardNumbers.forEach(cardNumber => {
    if (!validateCred(cardNumber)) { 
      invalidCards.push(cardNumber);
    };
  });

  return invalidCards;
};


function idInvalidCardCompanies(invalidCards) {
  const invalidCardCompanies = [];

  invalidCards.forEach(cardNumber => {
    if (cardNumber[0] === 3) {
      invalidCardCompanies.push("Amex");
    }
    if (cardNumber[0] === 4) {
      invalidCardCompanies.push("Visa");
    }
    if (cardNumber[0] === 5) {
      invalidCardCompanies.push("Mastercard");
    }
    if (cardNumber[0] === 6) {
      invalidCardCompanies.push("Discover");
    }
  });

  const uniqueSet = new Set(invalidCardCompanies);
  const uniqueInvalidCardCompanies = [...uniqueSet];

  return uniqueInvalidCardCompanies;
};


module.exports = { validateCred, findInvalidCards, idInvalidCardCompanies };