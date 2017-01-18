// Question 2

// Create a function called adventureSelector that takes 1 argument/parameter.
// adventureSelector should return 1 of 3 different anonymous function, based on the
// number that is passed into it.
//
// Each of the three anonymous functions should console.log the following messages:
//
// If the number is 1:
//
//    You selected the Vines of Doom!
//
// If the number is 2:
//
//    Looks like you want the Lake of Despair!
//
// If the number is 3:
//
//    The Caves of Catastrophe!
//
// Lastly, test your adventureSelector function by immediately invoking the
// function it returns when you pass it the number 2.

function adventureSelector(b) {
  return function() {
    if(b === 1) {
      console.log('You selected the Vines of Doom!');
    }
    else if (b === 2) {
      console.log('Looks like you want the Lake of Despair!');
    }
    else if (b === 3) {
      console.log('The Caves of Catastrophe!');
    }
  }
};

adventureSelector(2)();
