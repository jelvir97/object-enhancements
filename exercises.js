// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

function createInstructor(firstName, lastName){
    return {firstName, lastName};
}


// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

const favoriteNumber = 42;

const instructor = {
    firstName: 'Colt',
    favoriteNumber
}



// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

const newInstructor = {
    firstName: 'Colt',
    sayHi(){
        return 'HI!'
    },
    sayBye(){
        return this.firstName + " says bye!"
    }
}


//createAnimal Function

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}