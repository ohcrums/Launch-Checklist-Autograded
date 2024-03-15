// const { myFetch } = require("./scriptHelper");
// const { myFetch, formSubmission, pickPlanet, addDestinationInfo } = require('./scriptHelper');


window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        // fetch result is a json containing an array of planet objects
        listedPlanets = result;
    }).then(function () {
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

        // initialize a variable that calls for pickPlanet with the result of the fetch as a parameter.
        // chosen planet is therefore an indexed object from the array in the json
        let chosenPlanet = pickPlanet(listedPlanets);

        // calls with chosenPlanet's keys as parameters
        // sets the innerHtml of the missionTarget to include information from the chosen planet object
        addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image)
        
    })

    // add evebt listener for form submission button
    document.getElementById("formSubmit").addEventListener("click", function (event) {
        event.preventDefault();

        // initialize parameters
        let pilot = document.querySelector("input[name='pilotName']").value;
        let copilot = document.querySelector("input[name='copilotName']").value;
        let fuelLevel = document.querySelector("input[name='fuelLevel']").value;
        let cargoLevel = document.querySelector("input[name='cargoMass']").value;

        let list = document.getElementById("faultyItems").value;

        // call the submission function
        formSubmission(document, pilot, list, pilot, copilot, fuelLevel, cargoLevel);

    });

});

