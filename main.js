
function Elephant(name, age) {
    this.name = name;
    this.age = age;
    this.image = "elephant.jpg";
    this.image_alt = "Elephant walking on green grass";
}

function Penguin(name, age) {
    this.name = name;
    this.age = age;
    this.image = "penguin.jpg";
    this.image_alt = "Two African Penguins on grass";
}

function Panda(name, age) {
    this.name = name;
    this.age = age;
    this.image = "panda.jpg";
    this.image_alt = "Red panda eating branches"
}

let animals = [new Elephant(), new Penguin(), new Panda()];
let names = ["Pengy", "Emily", "Sarah", "Lauren", "Mikey",
             "Claire", "Pongus", "Pengus", "Poongus"];

function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
    let randomIndex = generateRandomIndex(names.length);
    return names[randomIndex];
}

function generateRandomAge() {
    return generateRandomIndex(11);
}

function generateRandomAnimal() {
    let randomIndex = generateRandomIndex(animals.length);
    let randomAnimal = animals[randomIndex];

    if (randomAnimal instanceof Elephant) {
        return new Elephant(generateRandomName(), generateRandomAge());
    } else if (randomAnimal instanceof Penguin) {
        return new Penguin(generateRandomName(), generateRandomAge());
    } else if (randomAnimal instanceof Panda) {
        return new Panda(generateRandomName(), generateRandomAge());
    } 
}

function onLoad() {
    var animal = generateRandomAnimal();
    if (animal.age == 1) {
        document.getElementById("animal-properties").textContent = 
        animal.name + " is " + animal.age + " year old";
    } else {
        document.getElementById("animal-properties").textContent = 
        animal.name + " is " + animal.age + " years old";
    }
    
    let imageTag = document.getElementById("animal-img");
    imageTag.setAttribute("src", animal.image);
    imageTag.setAttribute("alt", animal.image_alt);
  }
