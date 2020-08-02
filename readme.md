[Link](https://www.youtube.com/watch?v=QTcIXok9wNY) to the project video by web-dev simplified

## Instructions

Write function that gets the render speed of the game. use window.requestAnimationFrame(main) to call a function that calls itself immediately. It is passed in 'currentTime. need to get secondsSinceLastRender. Declare two variable before the function const SNAKE_SPEED = 2; and let lastRenderTime = 0

make a snake.js. and export two functions from there update and draw. Move the snake speed const there. Make an update and draw function in game js and call the snake functions within.

This is the make the blue box appear: make a const called snakeBody that is an object with an x and y value of the grid coordinate on the board. Loop over this variable in the draw function and make a div. Need to change the gridRowStart and the gridColumnStart to match the coordinate. Add the class for snake to this element. Append this to the gameboard.

Need to move the heaad to the right square and the move the piece to where the head used to be. Do this inside the update function in snake.js. Make a for loop that loops through each segment of the snake except for the last one. Because that is going to disappear.

Hardcode the head movements. grab the snakebody and either + 1 on the x or y value. To clear the sqaures that shouldn't be there can just target the gameboard and set the innerHTML to nothing before caling the drawsnake function

Make a file called input.js. This gets the keystrokes. make a variable called inputDirection. set the x and y values in an object to 0. export a function getInputDirection with this value. Use this function at the top of the update function in snake.js and store in a variable called input direction. update the head with this value

### See Step 1

add event listener for keydown in input.js. use switch statem for 'ArrowUp', "ArrowDown". This updates the y axis when press up or down or the x left or right axis by 1. If you click on snake it should move from left to right. Problem is you can go from left to right up to down. So need to make a variable called last input direction set it to x: 0, y: 0. It should set to the inputDirection before that is returned. Make a check in each of the switch statements if the lastInputDirection is the same as the current move.

Food: Make a file called food.js. Copy over the update and the draw function from snake.js. Clear the update function but the draw function is similar, it doesn't have a forEach. Within the food.js need to make this variable that is used within the draw function let food = { x: 10 y: 1 }; . Bring the update and draw functions into game.js. draw the food and update the food in game.js

### See Step 2

Make a const in food.js called EXPANSION_RATE. This is how much the snake grows when it eats the food. Set it to 1. In the update function check if the snake is over the food. Make an if check that where the conditional contains a function called onSnake which is passed in the food variable. Within the if block call a function called expandSnake which is passed in the EXPANSION_RATE. Then temporarily hard code the location of the food. exmaple: food = { x: 20, y: 10 };

expandSnake and onSnake are in snake.js. Make a variable in snake.js called newSegments and set it to 0. in expand snake get this value and add it to the expandsion amount passed into the expandSnake function.

onSnake is taking a postion. run a some function on snakebody inside onsnake. this returns a function called equalPostions that is passed in the segment and the position. in equalPositions check if the food x and the snake x are equal and the food y and the snake y are equal. Import onSnake and expandSnake into food.js

### See Step 3

handling expansion: make a function called addSegments in snake.js. Call this function in the update function. In the function definition loops through the new segment length. Push the index of the last snakeBody piece onto the snakeBody. Then set newSegments back to 0.

Randomize food position. in food.js make a function called getRandomFoodPosition. make a let variable newFoodPosition within the function. no value initially. Do a while loop that checks if this new variable is null and if the onSnake function matches this variable. If it does set newFoodPostion to the result of a new function randomGridPosition and return newFoodPosition. Change the food variable to the result of the getRandomFoodPosition as well as the food value inside the update function.

To make randomGridPosition make a file called grid.js. return an x and a y that are random between 1 and 21. Import this back to food.js.

Make a failure state. inside game.js inside the update function make a function called checkDeath(); there is a variable within called gameOver that is the result of outsideGrid(getSnakeHead) || snakeIntersection() being true. Make game over a global variable set to false and check within the main function if this is true, if true do an alert that says you lose.

### See Step 4

Write outsideGrid in grid.js. It should check if any of the x or y values are greater than the grid size or less than one and return true. Write getSnakeHead in snake.js. This is just the first element in the snakebody

Write snakeIntersection in snake.js. to determine is to see if the head is touching any of the other body parts on the snake. This is tricky. return the onSnake with value with the head value passed in as well as { ignoreHead: true }. Add this to parameters in onSnake { ignoreHead = false } = {}. Add an index to the some function and run this check before running the rest of the function if (ignoreHead && index === 0) return false;

To restart the game remove the alert and instead do an if check on a confirm with message 'Press ok to restart'. If ok is pressed set the window.location to '\' to refresh the page and then return the function

### See final code
