
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

    // Get stored animals if they exist
    var animals = JSON.parse(localStorage.getItem("animals"));
    var hasSavedAnimal = false;
    var animal = generateRandomAnimal();

    // Let user save new animal if there are less than 5 saved
    if (animals.length < 5) {
        document.getElementById("button-store").textContent = "Save Me";
    } else { // Let user clear the last animal saved 
        document.getElementById("button-store").textContent = "Clear Me";
        hasSavedAnimal = true;
    }

    // TO-DO...change this to be more like the grocery list code 

    // Display animal to save
    var displayAnimal;
    if (animals.length == 5) {
        displayAnimal = animals[animals.length - 1];
    } else {
        displayAnimal = animal;
    }

    document.getElementById("animal-properties").innerHTML = displayAnimal.name;
        let imageTag = document.getElementById("animal-img");
        imageTag.setAttribute("src", displayAnimal.image);
        imageTag.setAttribute("alt", displayAnimal.image_alt);

    // Display all animals in storage
    var animalNames = animals.reduce(function (result, name, index) {
        var number = index + 1;
        return result + " " + number + ". " + name.name + "<br>";
    }, "");
    document.getElementById("saved-animals").innerHTML = animalNames;

    // Clear and save animals on click 
    document.getElementById("button-store").addEventListener("click", function() {
        if (hasSavedAnimal) { // Clear last animal
            animals.pop();
            localStorage.setItem("animals", JSON.stringify(animals));
            document.getElementById("button-store").style.display = "none";
            document.getElementById("button-feedback").textContent = "Cleared";
            document.getElementById("button-feedback").style.display = "block";
        } else { // Save animal
            animals.push(animal);
            localStorage.setItem("animals", JSON.stringify(animals));
            document.getElementById("button-store").style.display = "none";
            document.getElementById("button-feedback").textContent = "Saved";
            document.getElementById("button-feedback").style.display = "block";
        }
    });
}