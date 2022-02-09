# Toy Robot project

The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units. There are no

other obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented

from falling to destruction. Any movement that would result in the robot falling from the table must be prevented,

however further valid movement commands must still be allowed.

## Instruction is run the project

1.  Open the solution in Visual studio code

2.  Move to project directory in terminal

3.  Do npm i

4.  do npm run start

Screen will prompt you to do enter instruction. Depending on the instruction, you will get response from the toy

## How to play with toy robot

    Following are the different valid instructions for the toy

        `PLACE X,Y,F`
        `MOVE`
        `LEFT`
        `RIGHT`
        `REPORT`

    `PLACE` command along the X and Y unit and the direction of the toy facing should be first valid command. `MOVE` command will make the toy move forward in the direction the toy is facing. `LEFT` or `RIGHT` will turn the toy to that direction. `REPORT` will give the current position of the toy with X,Y and current facing direction.

### Sample instructions

    `PLACE 1,2,EAST`
    `MOVE`
    `MOVE`
    `LEFT`
    `MOVE`
    `REPORT`
