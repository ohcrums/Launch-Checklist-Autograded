// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */

   // working
   let missionTarget = document.getElementById("missionTarget");
   let formattedPlanet = `
   <h2>Mission Destination</h2>
   <ol>
       <li>Name:${name}</li>
       <li>Diameter:${diameter}</li>
       <li>Star: ${star}</li>
       <li>Distance from Earth:${distance}</li>
       <li>Number of Moons:${moons}</li>
   </ol>
   <img src="${imageUrl}">
   `;
   
   missionTarget.innerHTML = formattedPlanet;
}

function validateInput(testInput) {
    // take in a string as a parameter
    // as appropriate, return "Empty", "Not a Number", or "Is a Number".
    // .trim() to handle whitespace input
    let testOutput;
    
    if ( !testInput ) {
        testOutput = "Empty";
    } else if ( isNaN(testInput) ) {
        testOutput = "Not a Number"
    } else if ( !isNaN(testInput) ) {
        testOutput = "Is a Number"
    }
    return testOutput;
}
 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // use validateInput
    // takes in a document paramater and strings representing pilot, copilot, fuelLevel, cargoLevel
    // using the values in those strings and the document parameter for the HTML doc, update the shuttle requirements
        
    // this is covered by list parameter
    // const faultyItems = document.getElementById("faultyItems")

    const launchStatus = document.getElementById("launchStatus")

    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");

    const pilotInput = validateInput(pilot);
    const copilotInput = validateInput(copilot);
    const fuelInput = validateInput(fuelLevel);
    const cargoInput = validateInput(cargoLevel);
    let inputList = [pilotInput, copilotInput, fuelInput, cargoInput]

    // alert blueprint
    // goal is to alert and not submit if a field is submitted incorrectly, so that I don't have to muddy the other tasks with the validateInput checks
    // let allValid = false;
    // for (let index in inputList) {
    //     let item = inputList[index];
    //     let invalidList = [];
    //     if (item === 'Empty') {
    //         // PREVENT SUBMISSION
    //         alert(item, "it's empty");
    //         invalidList.push(false);
    //     }else if (item === "Is a Number") {
    //         // PREVENT SUBMISSION
    //         alert(item, "it's not a string")
    //         invalidList.push(false);
    //     } else if (item === "Not a Number") {
    //         // GO AHEAD
    //         console.log(item, "valid")
    //     }

    //     if (invalidList.length(0)) {
    //         allValid = true;
    //     } else {
    //         alert(item, "invalid")
    //         allValid = false;
    //     }
    // }

    // if (allValid) {
    //     pilotStatus.textContent = `Pilot ${pilot} is ready for launch`;
    //     copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`;

    //     if (parseInt(fuelLevel) < 10000) {
    //         // turn faultyItems to visible
    //         list.style.visibility = 'visible';
    //         // update fuelStatus
    //         fuelStatus.textContent = 'Fuel level too low for launch';
    //         if (parseInt(cargoLevel) > 10000) {
    //             cargoStatus.textContent = 'Cargo mass too heavy for launch';
    //         } else if (parseInt(cargoLevel) <= 10000) {
    //             cargoStatus.textContent = 'Cargo mass low enough for launch';
    //         }
    //         // update h2 header text and color
    //         launchStatus.textContent = 'Shuttle Not Ready for Launch';
    //         launchStatus.style.color = 'red' ;

    //     } else if (parseInt(fuelLevel) >= 10000) {
    //         list.style.visibility = 'visible';
    //         fuelStatus.textContent = 'Fuel level high enough for launch';
    //         if (parseInt(cargoLevel) > 10000) {
    //             cargoStatus.textContent = 'Cargo mass too heavy for launch';
    //             launchStatus.textContent = 'Shuttle Not Ready for Launch';
    //             launchStatus.style.color = 'red' ;
    //         } else if (parseInt(cargoLevel) <= 10000) {
    //             cargoStatus.textContent = 'Cargo mass low enough for launch';
    //             launchStatus.textContent = 'Shuttle is Ready for Launch';
    //             launchStatus.style.color = 'green' ;
    //         }
    //     }
    // }

    // take these out of if loops, let inputs be checked purely in the above for loop
    if (pilotInput === "Empty") {
    } else if (pilotInput === "Not a Number") {
        pilotStatus.textContent = `Pilot ${pilot} is ready for launch`;
    } else if (pilotInput === "Is a Number") {
    }

    if (copilotInput === "Empty") {
    } else if (copilotInput === "Not a Number") {
        copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`;
    } else if (copilotInput === "Is a Number") {
    }

    if (parseInt(fuelLevel) < 10000) {
        // turn faultyItems to visible
        list.style.visibility = 'visible';
        // update fuelStatus
        fuelStatus.textContent = 'Fuel level too low for launch';
        if (parseInt(cargoLevel) > 10000) {
            cargoStatus.textContent = 'Cargo mass too heavy for launch';
        } else if (parseInt(cargoLevel) <= 10000) {
            cargoStatus.textContent = 'Cargo mass low enough for launch';
        }
        // update h2 header text and color
        launchStatus.textContent = 'Shuttle Not Ready for Launch';
        launchStatus.style.color = 'red' ;

    } else if (parseInt(fuelLevel) >= 10000) {
        list.style.visibility = 'visible';
        fuelStatus.textContent = 'Fuel level high enough for launch';
        if (parseInt(cargoLevel) > 10000) {
            cargoStatus.textContent = 'Cargo mass too heavy for launch';
            launchStatus.textContent = 'Shuttle Not Ready for Launch';
            launchStatus.style.color = 'red' ;
        } else if (parseInt(cargoLevel) <= 10000) {
            cargoStatus.textContent = 'Cargo mass low enough for launch';
            launchStatus.textContent = 'Shuttle is Ready for Launch';
            launchStatus.style.color = 'green' ;
        }
    }
   
}
 
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function (response)
    {
        return response.json();
    }).then( function(json) {
        return json;
    });

    
    return planetsReturned;
}
 
function pickPlanet(planets) {
    // planets parameter is list of planets
    let pickedPlanet = Math.floor(Math.random() * planets.length) ;

    // get random number and get planet with that index
    // math.random() etc
    return planets[pickedPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;