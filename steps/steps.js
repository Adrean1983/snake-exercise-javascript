const step1 = {
  game = {
    //     import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js';

    // let lastRenderTime = 0;
    // const gameBoard = document.getElementById('game-board');

    // function main(currentTime) {
    //   window.requestAnimationFrame(main);
    //   const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    //   if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    //   lastRenderTime = currentTime;

    //   update();
    //   draw();
    // }

    // window.requestAnimationFrame(main);

    // function update() {
    //   updateSnake();
    // }

    // function draw() {
    //   gameBoard.innerHTML = '';
    //   drawSnake(gameBoard);
    // }

  },
  snake = {
    // import { getInputDirection } from './input.js';

    // export const SNAKE_SPEED = 2;
    // const snakeBody = [{ x: 11, y: 11 }];

    // export function update() {
    //   const inputDirection = getInputDirection();
    //   // this first iteration gets the one below the head
    //   for (let i = snakeBody.length - 2; i >= 0; i--) {
    //     // this makes the last piece the second piece.
    //     snakeBody[i + 1] = { ...snakeBody[i] };
    //   }
    //   // // update the head
    //   snakeBody[0].x += inputDirection.x;
    //   snakeBody[0].y += inputDirection.y;
    // }

    // export function draw(gameBoard) {
    //   snakeBody.forEach((segment) => {
    //     const snakeElement = document.createElement('div');
    //     snakeElement.style.gridRowStart = segment.y;
    //     snakeElement.style.gridColumnStart = segment.x;
    //     snakeElement.classList.add('snake');
    //     gameBoard.appendChild(snakeElement);
    //   });
    // }

  },
  input = {
    // const inputDirection = { x: 0, y: 0 };

    // export function getInputDirection() {
    //   return inputDirection;
    // }
  }
}
const step2 = {
  game = {
    // import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js';
    // import { update as updateFood, draw as drawFood } from './food.js';

    // let lastRenderTime = 0;
    // const gameBoard = document.getElementById('game-board');

    // function main(currentTime) {
    //   window.requestAnimationFrame(main);
    //   const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    //   if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    //   lastRenderTime = currentTime;

    //   update();
    //   draw();
    // }

    // window.requestAnimationFrame(main);

    // function update() {
    //   updateSnake();
    //   updateFood();
    // }

    // function draw() {
    //   gameBoard.innerHTML = '';
    //   drawSnake(gameBoard);
    //   drawFood(gameBoard);
    // }
  },
  snake = {
    // import { getInputDirection } from './input.js';

    // export const SNAKE_SPEED = 5;
    // const snakeBody = [{ x: 11, y: 11 }];

    // export function update() {
    //   const inputDirection = getInputDirection();
    //   // this first iteration gets the one below the head
    //   for (let i = snakeBody.length - 2; i >= 0; i--) {
    //     // this makes the last piece the second piece.
    //     snakeBody[i + 1] = { ...snakeBody[i] };
    //   }
    //   // // update the head
    //   snakeBody[0].x += inputDirection.x;
    //   snakeBody[0].y += inputDirection.y;
    // }

    // export function draw(gameBoard) {
    //   snakeBody.forEach((segment) => {
    //     const snakeElement = document.createElement('div');
    //     snakeElement.style.gridRowStart = segment.y;
    //     snakeElement.style.gridColumnStart = segment.x;
    //     snakeElement.classList.add('snake');
    //     gameBoard.appendChild(snakeElement);
    //   });
    // }
  },
  input = {
    // let inputDirection = { x: 0, y: 0 };
    // let lastInputDirection = { x: 0, y: 0 };

    // window.addEventListener('keydown', (e) => {
    //   switch (e.key) {
    //     case 'ArrowUp':
    //       if (lastInputDirection.y !== 0) break;
    //       inputDirection = { x: 0, y: -1 };
    //       break;
    //     case 'ArrowDown':
    //       if (lastInputDirection.y !== 0) break;
    //       inputDirection = { x: 0, y: 1 };
    //       break;
    //     case 'ArrowLeft':
    //       if (lastInputDirection.x !== 0) break;
    //       inputDirection = { x: -1, y: 0 };
    //       break;
    //     case 'ArrowRight':
    //       if (lastInputDirection.x !== 0) break;
    //       inputDirection = { x: 1, y: 0 };
    //       break;
    //   }
    // });

    // export function getInputDirection() {
    //   lastInputDirection = inputDirection;

    //   return inputDirection;
    // }

  },
  food = {
    // let food = { x: 10, y: 1 };

    // export function update() {}

    // export function draw(gameBoard) {
    //   const foodElement = document.createElement('div');
    //   foodElement.style.gridRowStart = food.y;
    //   foodElement.style.gridColumnStart = food.x;
    //   foodElement.classList.add('food');
    //   gameBoard.appendChild(foodElement);
    // }
  }
}
const step3 = {
  game = {
    // import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js';
    // import { update as updateFood, draw as drawFood } from './food.js';

    // let lastRenderTime = 0;
    // const gameBoard = document.getElementById('game-board');

    // function main(currentTime) {
    //   window.requestAnimationFrame(main);
    //   const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    //   if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    //   lastRenderTime = currentTime;

    //   update();
    //   draw();
    // }

    // window.requestAnimationFrame(main);

    // function update() {
    //   updateSnake();
    //   updateFood();
    // }

    // function draw() {
    //   gameBoard.innerHTML = '';
    //   drawSnake(gameBoard);
    //   drawFood(gameBoard);
    // }

  },
  snake = {
    // import { getInputDirection } from './input.js';

    // export const SNAKE_SPEED = 5;
    // const snakeBody = [{ x: 11, y: 11 }];
    // let newSegments = 0;

    // export function update() {
    //   const inputDirection = getInputDirection();
    //   // this first iteration gets the one below the head
    //   for (let i = snakeBody.length - 2; i >= 0; i--) {
    //     // this makes the last piece the second piece.
    //     snakeBody[i + 1] = { ...snakeBody[i] };
    //   }
    //   // // update the head
    //   snakeBody[0].x += inputDirection.x;
    //   snakeBody[0].y += inputDirection.y;
    // }

    // export function draw(gameBoard) {
    //   snakeBody.forEach((segment) => {
    //     const snakeElement = document.createElement('div');
    //     snakeElement.style.gridRowStart = segment.y;
    //     snakeElement.style.gridColumnStart = segment.x;
    //     snakeElement.classList.add('snake');
    //     gameBoard.appendChild(snakeElement);
    //   });
    // }

    // export function expandSnake(amount) {
    //   newSegments += amount;
    // }

    // export function onSnake(position) {
    //   return snakeBody.some((segment) => {
    //     return equalPostions(segment, position);
    //   });
    // }

    // function equalPostions(pos1, pos2) {
    //   return pos1.x === pos2.x && pos1.y === pos2.y;
    // }

  },
  input = {
    // let inputDirection = { x: 0, y: 0 };
    // let lastInputDirection = { x: 0, y: 0 };

    // window.addEventListener('keydown', (e) => {
    //   switch (e.key) {
    //     case 'ArrowUp':
    //       if (lastInputDirection.y !== 0) break;
    //       inputDirection = { x: 0, y: -1 };
    //       break;
    //     case 'ArrowDown':
    //       if (lastInputDirection.y !== 0) break;
    //       inputDirection = { x: 0, y: 1 };
    //       break;
    //     case 'ArrowLeft':
    //       if (lastInputDirection.x !== 0) break;
    //       inputDirection = { x: -1, y: 0 };
    //       break;
    //     case 'ArrowRight':
    //       if (lastInputDirection.x !== 0) break;
    //       inputDirection = { x: 1, y: 0 };
    //       break;
    //   }
    // });

    // export function getInputDirection() {
    //   lastInputDirection = inputDirection;

    //   return inputDirection;
    // }


  },
  food = {
    // import { onSnake, expandSnake } from './snake.js';

    // let food = { x: 10, y: 2 };
    // const EXPANSION_RATE = 1;

    // export function update() {
    //   if (onSnake(food)) {
    //     expandSnake(EXPANSION_RATE);
    //     food = { x: 20, y: 10 };
    //   }
    // }

    // export function draw(gameBoard) {
    //   const foodElement = document.createElement('div');
    //   foodElement.style.gridRowStart = food.y;
    //   foodElement.style.gridColumnStart = food.x;
    //   foodElement.classList.add('food');
    //   gameBoard.appendChild(foodElement);
    // }

      }


}
const step4 = {
  game = {

    // import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js';
    // import { update as updateFood, draw as drawFood } from './food.js';

    // let lastRenderTime = 0;
    // let gameOver = false;
    // const gameBoard = document.getElementById('game-board');

    // function main(currentTime) {
    //   if (gameOver) {
    //     return alert('You Lose!');
    //   }
    //   window.requestAnimationFrame(main);
    //   const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    //   if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    //   lastRenderTime = currentTime;

    //   update();
    //   draw();
    // }

    // window.requestAnimationFrame(main);

    // function update() {
    //   updateSnake();
    //   updateFood();
    //   checkDeath();
    // }

    // function draw() {
    //   gameBoard.innerHTML = '';
    //   drawSnake(gameBoard);
    //   drawFood(gameBoard);
    // }

    // function checkDeath() {
    //   gameover = outsideGrid(getSnakeHead) || snakeIntersection();
    // }

  },
  snake = {
    //    import { getInputDirection } from './input.js';

    // export const SNAKE_SPEED = 5;
    // const snakeBody = [{ x: 11, y: 11 }];
    // let newSegments = 0;

    // export function update() {
    //   addSegments();
    //   const inputDirection = getInputDirection();
    //   // this first iteration gets the one below the head
    //   for (let i = snakeBody.length - 2; i >= 0; i--) {
    //     // this makes the last piece the second piece.
    //     snakeBody[i + 1] = { ...snakeBody[i] };
    //   }
    //   // // update the head
    //   snakeBody[0].x += inputDirection.x;
    //   snakeBody[0].y += inputDirection.y;
    // }

    // export function draw(gameBoard) {
    //   snakeBody.forEach((segment) => {
    //     const snakeElement = document.createElement('div');
    //     snakeElement.style.gridRowStart = segment.y;
    //     snakeElement.style.gridColumnStart = segment.x;
    //     snakeElement.classList.add('snake');
    //     gameBoard.appendChild(snakeElement);
    //   });
    // }

    // export function expandSnake(amount) {
    //   newSegments += amount;
    // }

    // export function onSnake(position) {
    //   return snakeBody.some((segment) => {
    //     return equalPostions(segment, position);
    //   });
    // }

    // function equalPostions(pos1, pos2) {
    //   return pos1.x === pos2.x && pos1.y === pos2.y;
    // }

    // function addSegments() {
    //   for (let i = 0; i < newSegments; i++) {
    //     // This is taking the last element of the snake and duplicating it onto the snake
    //     snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    //   }
    //   newSegments = 0;
    // }

  },
  input = {
    // let inputDirection = { x: 0, y: 0 };
    // let lastInputDirection = { x: 0, y: 0 };

    // window.addEventListener('keydown', (e) => {
    //   switch (e.key) {
    //     case 'ArrowUp':
    //       if (lastInputDirection.y !== 0) break;
    //       inputDirection = { x: 0, y: -1 };
    //       break;
    //     case 'ArrowDown':
    //       if (lastInputDirection.y !== 0) break;
    //       inputDirection = { x: 0, y: 1 };
    //       break;
    //     case 'ArrowLeft':
    //       if (lastInputDirection.x !== 0) break;
    //       inputDirection = { x: -1, y: 0 };
    //       break;
    //     case 'ArrowRight':
    //       if (lastInputDirection.x !== 0) break;
    //       inputDirection = { x: 1, y: 0 };
    //       break;
    //   }
    // });

    // export function getInputDirection() {
    //   lastInputDirection = inputDirection;

    //   return inputDirection;
    // }


  },
  food = {
    // import { onSnake, expandSnake } from './snake.js';
    // import { randomGridPosition } from './grid.js';

    // let food = getRandomFoodPosition();
    // const EXPANSION_RATE = 1;

    // export function update() {
    //   if (onSnake(food)) {
    //     expandSnake(EXPANSION_RATE);
    //     food = getRandomFoodPosition();
    //   }
    // }

    // export function draw(gameBoard) {
    //   const foodElement = document.createElement('div');
    //   foodElement.style.gridRowStart = food.y;
    //   foodElement.style.gridColumnStart = food.x;
    //   foodElement.classList.add('food');
    //   gameBoard.appendChild(foodElement);
    // }

    // function getRandomFoodPosition() {
    //   let newFoodPosition;
    //   while (newFoodPosition == null || onSnake(newFoodPosition)) {
    //     newFoodPosition = randomGridPosition();
    //   }
    //   return newFoodPosition;
    // }

}

