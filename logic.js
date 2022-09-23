console.log('test');

//set the options available to log
const getComputerChoice = ["rock", "paper", "scissors"];
//choose one at random
const random = Math.floor(Math.random() * getComputerChoice.length);
//log the selection in console
console.log(random, getComputerChoice[random]);