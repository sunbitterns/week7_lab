
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
    // get existing saved animals 
    var animal = JSON.parse(localStorage.getItem("savedAnimal"));
    
    // generate new animal if no saved animals exist
    var hasSavedAnimal = false;
    if (animal == null) {
        document.getElementById("button-store").textContent = "Save Me";
        animal = generateRandomAnimal();
    } else {
        document.getElementById("button-store").textContent = "Clear Me";
        hasSavedAnimal = true;
    }

    // display animal properties and image
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

    // clear and saved animals on button click 
    document.getElementById("button-store").addEventListener("click", function() {
        if (hasSavedAnimal) {
            localStorage.removeItem("savedAnimal");
            document.getElementById("button-store").style.display = "none";
            document.getElementById("button-feedback").textContent = "Cleared";
            document.getElementById("button-feedback").style.display = "block";
        } else {
            localStorage.setItem("savedAnimal", JSON.stringify(animal));
            document.getElementById("button-store").style.display = "none";
            document.getElementById("button-feedback").textContent = "Saved";
            document.getElementById("button-feedback").style.display = "block";
        }
    });
  }
