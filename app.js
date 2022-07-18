const readline = require("readline-sync");
// let player = {alive:true , key:false }
var isGameRunning = true
var key = 0

const welcome = readline.question("_-_-_-_Welcome to the Escape room, you are locked in until you can find a way to escape._-_-_-_");

// let options = readline.keyIn("_-_-_-_What would you like to do? Put hand in the (h)ole in the door, (s)earch the room, or try an (o)pen the Door. _-_-_-_")
while (isGameRunning) {
    game()
}

function game () {
    let options = readline.keyIn("_-_-_-_What would you like to do? Put hand in the (h)ole in the door, (s)earch the room, or try an (o)pen the Door. _-_-_-_")
  
    switch (options) {
        case 'h':
            defeat()
        break
        case 's':
            if ((key === 0)) {
                console.log("you found the KEY!")
                key = 1
            } else  {
                console.log("you already have the KEY.")
            }
        break
        case 'o':
            if ((key === 0)) {
                console.log("the door is locked, find the key")
            } else if ((key === 1)) {
                key = 0
                victory()
            
            }
        break
        default:
            console.log("please select a valid option!")
            
    } 
    
}
 
function victory () {
    let repeat = readline.keyIn("Congrats! you Escaped. would you like to play again? (y)es/(n)o?")
    switch(repeat) {
        case 'y':
            game()
            key = 0
        break
        case 'n':
            console.log("GAME OVER")
            isGameRunning = false
        break
        default: 
        console.log("Please select (y)es or (n)o.")
        victory()
        break
    }   
}
function defeat () {
    let repeat = readline.keyIn("YOU DIED, would you like to try again? (y)es or (n)o?")
    switch(repeat) {
        case 'y':
            game()
            key = 0
        break
        case 'n':
            console.log("GAME OVER")
            isGameRunning = false
        break
        default:
            console.log("please select (y)es or (n)o.")
            defeat()
        break
    }
    
}







// if (options === "h") {
//     player.alive = false
//     console.log("YOU HAVE DIED")

// } else if (options === "s") {
//     console.log("you have found the KEY, try returning to the DOOR")
//     player.key = true
// } else if (options === "o") {
//     console.log("the DOOR is locked, you must find the KEY.")
// if (player.key === true) {
//     console.log("CONGRATS!!! You've escaped, Enjoy your freedom")
//     player.alive = false
//     }
// }
// } else if (options === "o" || player.key === true) {
//     console.log("CONGRATS!!! You have Escaped, enjoy your Freedom")
//     player.alive = false 
// }


