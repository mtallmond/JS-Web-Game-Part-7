function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)
    //Make it asynchronous using the async keyword.
    //Make it accept time as a parameter.
    
    async function walkEast(time) {
        direction = 'east'
        element.src = `./assets/red-character/east.gif`
            //At the end of the function, invoke sleep and pass it time as an argument.
            //Use await to pause walkEast until sleep (time) has resolved.
        await sleep(time)
            //After sleep has resolved, invoke stop to stop the character.
        stop()
    }

    async function walkNorth(time) {
        direction = 'north'
        element.src = `./assets/red-character/north.gif`
        await sleep(time)
        stop()
    }

    async function walkWest(time) {
        direction = 'west'
        element.src = `./assets/red-character/west.gif`
        await sleep(time)
        stop()
    }

    async function walkSouth(time) {
        direction = 'south'
        element.src = `./assets/red-character/south.gif`
        await sleep(time)
        stop()
    }

    function stop() {
        direction = null
        element.src = `./assets/red-character/static.gif`
    }
    function sleep(time){
        return new Promise(resolve => {
            setTimeout(resolve, time)
        })  
    }
    

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}