// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function grandparent() {
  let grandparentMessage = "the grandparent";
  console.log(`I'm the outside function and I can see ${grandparentMessage}.`);

  function parent() {
    let parentMessage = 'the parent';
    console.log(`I'm the middle function and I can see ${grandparentMessage} and ${parentMessage}.`);

    function child() {
      let childMessage = 'the child';
      console.log(`I'm the innermost function and I can see ${grandparentMessage}, ${parentMessage}, and ${childMessage}.`)
    }
    child();
  }
  parent();
}
grandparent();






/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
