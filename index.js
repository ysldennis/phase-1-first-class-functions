function receivesAFunction(callBack) {
    callBack();
}

function returnsANamedFunction() {
    
    function namedFunction() {
      console.log("I am a named function!");
    }
    return namedFunction;
  }

function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
      console.log("I am an anonymous function!");
    };
  }
  
  