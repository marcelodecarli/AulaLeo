import { Animal } from "./Animal";
import { Mammal } from "./Mammal";
import { Bird } from "./Birds";


// function isAnimal(animal:Animal) {
//     console.log(`this is a ${}`)
// }

function isBird(bird: Bird): void {
    console.log(`
            This is a bird, its name is ${bird.getName()}, its age is ${bird.getAge()}. 
            Its Wingspan is ${bird.getWingspan()}. The bird is Singing. (${bird.emitSound()})
            `);

}

const bird = new Bird('Eagle', 25, 1.60)
bird.setWingspan(1.85)

isBird(bird)

function isMammal(mammal: Mammal): void {
    console.log(`This is a mammal, its name is ${mammal.getName()}, its age is ${mammal.getAge()}. Its coat is ${mammal.getCoatCollor()}.`);

}
// const monkey = new Mammal('Gorila', 35, 'black')
// monkey.setCoatCollor('Brown')

// isMammal(monkey)

// monkey.setAge(25)
// console.log(monkey.getAge())
// console.log(monkey)