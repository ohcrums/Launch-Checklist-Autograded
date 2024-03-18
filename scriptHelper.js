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

    // insert template literal into missionTarget div innerHtml
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = formattedPlanet;
}

function validateInput(testInput) {
    // take in a string as a parameter
    // as appropriate, return "Empty", "Not a Number", or "Is a Number".
    let testOutput;
    
    // handles whitespace, and solves issues when input is "0", causing an output of "Empty"
    // isNaN still reads strings of numbers as numbers
    let inputString = String(testInput).trim();
    
    if ( !inputString ) {
        testOutput = "Empty";
    } else if ( isNaN(inputString) ) {
        testOutput = "Not a Number"
    } else if ( !isNaN(inputString) ) {
        testOutput = "Is a Number"
    }
    return testOutput;
}
 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // use validateInput
    // takes in a document paramater and strings representing pilot, copilot, fuelLevel, cargoLevel
    // using the values in those strings and the document parameter for the HTML doc, update the shuttle requirements

    const launchStatus = document.getElementById("launchStatus")

    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");

    let inputList = [pilot, copilot, fuelLevel, cargoLevel];
    let validList = [];
    if (validateInput(pilot) == "Not a Number") {
        validList.push(true);
    } else {
        alert(`Invalid Pilot\nInput: ${pilot}\nIssue: ${validateInput(pilot)}`);
    }
    if (validateInput(copilot) == "Not a Number") {
        validList.push(true);
    }  else {
        alert(`Invalid Copilot.\nInput: ${copilot}\nIssue: ${validateInput(copilot)}`);
    }
    if (validateInput(fuelLevel) == "Is a Number") {
        validList.push(true);
    } else {
        alert(`Invalid Fuel Level\nInput: ${fuelLevel}\nIssue: ${validateInput(fuelLevel)}`);
    }
    if (validateInput(cargoLevel) == "Is a Number") {
        validList.push(true);
    }  else {
        alert(`Invalid Cargo Level\nInput: ${cargoLevel}\nIssue: ${validateInput(cargoLevel)}`);
    }


    if (validList.length == inputList.length) {

        pilotStatus.textContent = `Pilot ${pilot} is ready for launch`;
        copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`;

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
}
 
async function myFetch() {
    // this might work without using this variable
    let planetsReturned;

    // await fetch to api url
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function (response)
    {
        // read the response as a json
        return response.json();
    }).then( function(json) {
        // return the json
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