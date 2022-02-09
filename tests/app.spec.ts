import processInstruction from '../app';
import processToyInstruction from '../app';

const readline = require('readline')
    .createInterface({
        input: process.stdin,
        output: process.stdout
    });

let input;

describe('ProcessToyInstruction', () => {
    test('should return Empty instruction when input is empty', () => {
        input = "";
        const response = processToyInstruction(input);
        expect(response).toBe("Empty instruction");
    })
    test('should return Toy not placed when given instruction and toy is not placed', () => {
        input = "invalid";
        const response = processToyInstruction(input);
        expect(response).toBe("Toy not placed yet");
    })
    test('should return Toy placed when input as place is given', () => {
        input = "place 0,0,north";
        const response = processToyInstruction(input);
        expect(response).toBe("Toy placed");
    })
    test('should return Place instruction not correct when invalid place instruction is given', () => {
        input = "Place 0,0";
        const response = processToyInstruction(input);
        expect(response).toBe("Place instruction not correct");
    })
    test('should return Toy is moving when input is move', () => {
        input = "move";
        const response = processToyInstruction(input);
        expect(response).toBe("Toy is moving forward");
    })

    test('should return Toy is turning to east when input is right and toy is facing north', () => {
        input = "right";
        const response = processToyInstruction(input);
        expect(response).toBe("Toy is turning to east");
    })
    test('should return My Position is 0,1 facing north when input is left and then report', () => {
        input = "left";
        processToyInstruction(input);
        input = "report";
        const response = processToyInstruction(input);
        expect(response).toBe("My position is 0, 1 facing north");
    })
    afterAll(() => {
        readline.close(); // Closing the promt after the test cases
    })
})