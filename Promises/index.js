/*
    Promises = An object that manages asynchronous operations.
               Wrap a Promise Object around {asynchronous code}
               "I promise to return a value" promise always returns a value.
               PENDING - > RESOLVED or REJECTED
               new Promise((resolve, reject) => {
                    // asynchronous code
               });
*/

/*
    DO THESE CHORES IN ORDER

    1- WALK THE DOG
    2- CLEAN THE KITCHEN
    3- TAKE OUT THE TRASH
*/


function walkTheDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;

            if (dogWalked) {
                resolve("You walked the dog 🐩");
            }
            else {
                reject("You DIDN'T walk the dog ❌");
            }
        }, 1500);
    });
}

function cleanTheKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanKitchen = true;

            if (cleanKitchen) {
                resolve("You Cleaned the kitchen 🧹");
            }
            else {
                reject("You DIDN'T clean the kitchen ❌");
            }
        }, 2500);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tookOutTrash = false;

            if (tookOutTrash) {
                resolve("You took out the trash 🗑️");
            }
            else {
                reject("You DIDN'T take out the trash ❌");
            }
        }, 500);
    });
}

// walkTheDog().then((message) => {
//     console.log(message);
//     return cleanTheKitchen();
// }).then((message) => {
//     console.log(message);
//     return takeOutTrash();
// }).then((message) => {
//     console.log(message);
//     console.log("All chores are done! 🎉");
// })

// ---------------------------------------------------------------------------------------------------------
// more readable ⬇️

walkTheDog().then((message) => { console.log(message); return cleanTheKitchen(); })
    .then((message) => { console.log(message); return takeOutTrash(); })
    .then((message) => {
        console.log(message); console.log("All chores are done! 🎉");
    })
    .catch(error => console.error(error));

// below is the callback hell, which is a situation where we have multiple nested callbacks, which can make the code difficult to read and maintain.

// walkTheDog(() => {
//     cleanTheKitchen(() => {
//         takeOutTrash(() => {
//             console.log("All chores are done! 🎉");
//         });
//     });
// });


