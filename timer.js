class Timer {
    #timerArray = [];

    setTimeout = (callback, delay) => {
        const timerId = setTimeout(callback, delay);
        this.#timerArray.push(timerId);
    };

    clearTimeout = () => {
        while (this.#timerArray.length) {
            clearTimeout(this.#timerArray.pop());
        }
    };
}

const timerOne = new Timer();
timerOne.setTimeout(() => {
    console.log("from timer one 1");
}, 1000);
timerOne.setTimeout(() => {
    console.log("from timer one 2");
}, 1000);

// cleared all timer in timerOne
timerOne.clearTimeout();

const timerTwo = new Timer();
timerTwo.setTimeout(() => {
    console.log("from timer two 1");
}, 1000);
timerTwo.setTimeout(() => {
    console.log("from timer two 2 ");
}, 1000);
