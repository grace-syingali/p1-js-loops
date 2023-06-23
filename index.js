let books = ['Eloquent JavaScript', 'JavaScript: The Good Parts', 'Learn JavaScript VISUALLY', 'You don\'t know js', 'JavaScript: The Definitive Guide'];

let oneBook = {
  title: 'Eloquent JavaScript',
  author: 'Marijin Haverbeke',
  publisher: 'No Starch Press'
}

// 1. Simple FOR loop
// TODO: Complete the function. Create a For loop that loops through and prints numbers 1 to 10
function loopThroughNumbers(){
  // create a for loop with an initialization, stopping condition & an iteration statement
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
loopThroughNumbers();
// loopThroughNumbers();

// TODO: Complete the function. Loop and print through numbers 1 to 10 in reverse order
function loopThroughNumbersReverse(){
    for (let i = 10; i >= 1; i--) {
      console.log(i);
    }
  }
  
  loopThroughNumbersReverse();

// loopThroughNumbersReverse();

// 2. Loop through arrays
// TODO: Complete the function. Loop through the books array and print every element
function loopThroughBooks(arr){
  // create a for loop that loops through any array of books and logs each element to the console
  function loopThroughBooks(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
}

loopThroughBooks(books);
//loopThroughBooks(books);
// TODO: Complete the function. Loop through the books array and print every element using for...of

function loopThroughBooks2(arr){

}

// loopThroughBooks2(books);

// 3. Loop through objects
// TODO: Complete the function. Loop through the properties of the oneBook object and log the values to the console
function loopThroughObj(obj){
  // Use for...in
}

// loopThroughObj(oneBook);


// BONUS: Loop through the array of books using a while loop