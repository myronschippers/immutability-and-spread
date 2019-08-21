console.log('Hello Isurus!!!');

const numberList = [2, 5, 3];
const newNumber = 7;

// MUTATION
// numberList.push(newNumber);
// [2, 5, 3, 7];

let newNumberList = [numberList[0], numberList[1], numberList[2], newNumber];
// [2, 5, 3, 7];
console.log(newNumberList);

// Spread syntax "..."
newNumberList = [...numberList, newNumber];
// [...[2, 5, 3], 7]
// [2, 5, 3, 7]
console.log(newNumberList);

const bowler = {
    name: 'Luke',
    lastBowlingScore: 97,
};
console.log('bowler original: ', bowler);

// MUTATION
// bowler.lastBowlingScore = 100;
// console.log('bowler original: ', bowler);

// const updatedBowler = {
//     name: bowler.name,
//     lastBowlingScore: 100,
// }
const updatedBowler = {
    ...bowler,
    lastBowlingScore: 100,
    age: 58,
};
// {
//     ...{
//         name: 'Luke',
//         lastBowlingScore: 97,
//     },
//     lastBowlingScore: 100,
// }
// resolve spread
// {
//     
//     name: 'Luke',
//     lastBowlingScore: 97,
//     
//     lastBowlingScore: 100,
// }
// {
//     
//     name: 'Luke',     
//     lastBowlingScore: 100,
// }
console.log('updatedBowler: ', updatedBowler);

function setState(newState) {
    const state = {
        something: 'WOOT',
    };

    return {...state, ...newState };
}




