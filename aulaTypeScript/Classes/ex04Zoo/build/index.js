"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Birds_1 = require("./Birds");
function isBird(bird) {
    console.log(`
            This is a bird, its name is ${bird.getName()}, its age is ${bird.getAge()}. 
            Its Wingspan is ${bird.getWingspan()}. The bird is Singing. (${bird.emitSound()})
            `);
}
const bird = new Birds_1.Bird('Eagle', 25);
bird.setWingspan(1.85);
isBird(bird);
function isMammal(mammal) {
    console.log(`This is a mammal, its name is ${mammal.getName()}, its age is ${mammal.getAge()}. Its coat is ${mammal.getCoatCollor()}.`);
}
//# sourceMappingURL=index.js.map