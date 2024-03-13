// const { myFetch } = require("./scriptHelper");
const { myFetch, formSubmission, validateInput } = require('./scriptHelper');

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })

    // add evebt listener
    document.getElementById("formSubmit").addEventListener("click", function (event) {
        event.preventDefault();
        console.log('click');
        // Get the pilot name input value

        let pilot = document.querySelector("input[name='pilotName']").value;
        let copilot = document.querySelector("input[name='copilotName']").value;
        let fuelLevel = document.querySelector("input[name='fuelLevel']").value;
        let cargoLevel = document.querySelector("input[name='cargoMass']").value;

        let list = document.getElementById("faultyItems").value;

        formSubmission(document, pilot, list, pilot, copilot, fuelLevel, cargoLevel);

    });

});

