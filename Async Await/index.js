/*
    Async/Await = allows you to write asynchronous code in a synchronous manner,
                  async doesn't have resolve or reject parameters,
                  Everything after awaits is placed in an event queue

            - Async = makes a function return a promise
            - Await = makes an async function wait for a promise.
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

async function doChores() {
    try {
        const walkDogResult = await walkTheDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanTheKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("All chores are done! 🎉");
    }
    catch(error) {
        console.log(error);
    }
}

doChores();
