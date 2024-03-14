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


    const launchStatus = document.getElementById("launchStatus")

    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");

    const pilotInput = validateInput(pilot);
    const copilotInput = validateInput(copilot);
    const fuelInput = validateInput(fuelLevel);
    const cargoInput = validateInput(cargoLevel);

    // alert blueprint
    // this is all working in node, but doesn't seem to work here    
    let inputList = [pilotInput, copilotInput, fuelInput, cargoInput];
    let allValid = false;
    let validList = [];
    for (let index in inputList) {
        let item = inputList[index];
        if (item === 'Empty') {
            // PREVENT SUBMISSION
            // can't use alert because it doesnt work in jest
            console.log(item, "-- it's empty");
        }else if (item === "Is a Number") {
            // PREVENT SUBMISSION
            console.log(item, "-- it's not a string")
        } else if (item === "Not a Number") {
            // GO AHEAD
            validList.push(true);
            console.log(item, index, "valid")
        }
    }

    if (validList.length == inputList.length) {
        allValid = true;
    } else {
        allValid = false;
    }

    if (allValid) {
        console.log("all inputs valid")
    } else {
        console.log("invalid inputs")
    }


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