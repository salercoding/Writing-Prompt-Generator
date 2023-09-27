# Writing Prompt Generator
## Description
The Writing Prompt Generator is a React App perfect for anyone who is struggling with writer's block or simply wants to practice writing, but is unsure of what to write about. The prompt generates a random genre, setting, and three words to be used in the story. 

The genre, setting, and each of the three words are maintained with the useState hook. Each of the elements are selected from their respective arrays. There is a genre array, setting array, and words array. Both the genre array and setting array elements are selected at random using the Math.random() method. The words array is used to select three different words and so the array is first shuffled and then the first three indices are used. The arrays can be viewed on src/Array.js. The random selection is on src/Generator.js. 

## How to Use
Using this program is easy! Simply click the generator button and the genre, setting, and three words will appear. There are directions provided on the page and a modal which will describe each genre. 