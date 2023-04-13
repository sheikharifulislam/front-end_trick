const isCycle = (obj) => {
    let detected = false;
    let cycleStack = new Set();

    const detect = (obj) => {
        if (obj && typeof obj !== "object") {
            return;
        }

        if (cycleStack.has(obj)) {
            return (detected = true);
        } else {
            cycleStack.add(obj);
            for (let key in obj) {
                detect(obj[key]);
            }

            cycleStack.delete(obj);
        }
    };

    detect(obj);
    return detected;
};

const obj1 = {
    name: "demo",
};

const obj2 = {
    name: "demo 2",
};

obj1.child = obj2;
obj2.child = obj1;

const result = isCycle(obj1);
console.log(result);
