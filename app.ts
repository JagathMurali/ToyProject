const readline = require('readline')
    .createInterface({
        input: process.stdin,
        output: process.stdout
    });
let isToyPlaced = false;
let toyX = 0;
let toyY = 0;
let toyFace;

const processToyInstruction = (instruction: string): string => {
    // Returning if instruction is empty
    if (!instruction) {
        return 'Empty instruction';
    }
    const instructionLowercase = instruction.toLocaleLowerCase();
    // Check if instruction is for placing toy
    if (instructionLowercase.startsWith('place')) {
        return toyStartPosition(instructionLowercase);
    } else if (isToyPlaced) {
        if (instructionLowercase === 'report') {
            return annouceToyDetails();
        } else if (instructionLowercase === 'move') {
            return moveToy();
        } else if (instructionLowercase === 'left' || instructionLowercase === 'right') {
            toyFace = turnToy(instructionLowercase);
            return `Toy is turning to ${toyFace}`;
        } else {
            return 'Invalid instruction'
        }
    } else {
        //Toy is not placed
        return `Toy not placed yet`
    }
}

const toyStartPosition = (instruction: string): string => {
    const placeDetails = instruction.replace('place', '').split(',');
    if (+placeDetails[0] >= 0 && +placeDetails[0] <= 5 && +placeDetails[1] >= 0 && +placeDetails[1] <= 5 && placeDetails[2]) {
        toyX = +placeDetails[0];
        toyY = +placeDetails[1];
        toyFace = placeDetails[2].toLocaleLowerCase();
        isToyPlaced = true;
        return 'Toy placed';
    } else {
        return 'Place instruction not correct';
    }
}

const moveToy = (): string => {
    let movingMessage = `Toy is moving forward`;
    if (toyFace === `north` && toyY < 5) {
        ++toyY;
    } else if (toyFace === 'south' && toyY > 0) {
        --toyY;
    } else if (toyFace === 'east' && toyX < 5) {
        ++toyX;
    } else if (toyFace === 'west' && toyX > 0) {
        --toyX;
    } else {
        movingMessage = `Move aborted`;
    }
    return movingMessage;
}

const turnToy = (instruction: string): string => {
    if (instruction === 'right') {
        switch (toyFace) {
            case 'north': return 'east';
            case 'south': return 'west';
            case 'east': return 'south';
            case 'west': return 'north';
        }
    } else if (instruction === 'left') {
        switch (toyFace) {
            case 'north': return 'west';
            case 'south': return 'east';
            case 'east': return 'north';
            case 'west': return 'south';
        }
    }
}

const annouceToyDetails = () => {
    return `My position is ${toyX}, ${toyY} facing ${toyFace}`;
}

const getInstruction = (input) => {
    const response = processToyInstruction(input);
    console.log(response);
    readline.prompt();
}

readline.on('line', getInstruction).on('close', () => {
    process.exit(0);
}).setPrompt('Enter Instruction:- ');

readline.prompt();

export default processToyInstruction;