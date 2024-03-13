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
    for (let item in inputList) {
        if (item === 'Empty') {
            alert(item, "empty, bozo");
        }else if (item === "Not a Number") {
            alert(item, "it's a string")
        } else if (item === "Is a Number") {
            alert(item, "it's a number")
        }
    }


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


    // if (fuelInput === "Empty") {

    // } else if (fuelInput === "Not a Number") {

    // } else if (fuelInput === "Is a Number") {

    // }


    // if (fuelInput == "Not a Number") {
    //     if (fuelLevel < 10000) {
    //         // turn faultyItems to visible
    //         faultyItems.style.visibility = 'visible';
    //         // update fuelStatus
    //         fuelStatus.textContent = 'Fuel level too low for launch';
    //         // update h2 header text and color
    //         launchStatus.textContent = 'Shuttle Not Ready for Launch';
    //         launchStatus.style.color = 'red' ;
    //     }

    // } 


    // if (parseInt(fuelLevel) < 10000) {
    //     // turn faultyItems to visible
    //     list.style.visibility = 'visible';
    //     // update fuelStatus
    //     fuelStatus.textContent = 'Fuel level too low for launch';
    //     // update h2 header text and color
    //     launchStatus.textContent = 'Shuttle Not Ready for Launch';
    //     launchStatus.style.color = 'red' ;
    // } else if (parseInt(fuelLevel) >= 10000) {
    //     list.style.visibility = 'visible';
    //     fuelStatus.textContent = 'Fuel level high enough for launch';
    //     launchStatus.textContent = 'Shuttle is Ready for Launch';
    //     launchStatus.style.color = 'green' ;
    // }
    
    // if (parseInt(cargoLevel) > 10000) {
    //     list.style.visibility = 'visible';
    //     cargoStatus.textContent = 'Cargo mass too heavy for launch';
    //     launchStatus.textContent = 'Shuttle Not Ready for Launch';
    //     launchStatus.style.color = 'red' ;
    // } else if (parseInt(cargoLevel <= 10000)) {
    //     list.style.visibility = 'visible';
    //     cargoStatus.textContent = 'Cargo mass low enough for launch';
    //     launchStatus.textContent = 'Shuttle is Ready for Launch';
    //     launchStatus.style.color = 'green' ;
    // }

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
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let planet = {};
    // get random number and get planet with that index
    // math.random etc
    return planets;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;