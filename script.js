// const { myFetch } = require("./scriptHelper");
const { myFetch, formSubmission, pickPlanet, addDestinationInfo } = require('./scriptHelper');

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        // console.log(listedPlanets);
    }).then(function () {
        // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let chosenPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.imageUrl)
        
    })

    // add evebt listener for form submission button
    document.getElementById("formSubmit").addEventListener("click", function (event) {
        event.preventDefault();
        console.log('click');

        // initialize parameters
        let pilot = document.querySelector("input[name='pilotName']").value;
        let copilot = document.querySelector("input[name='copilotName']").value;
        let fuelLevel = document.querySelector("input[name='fuelLevel']").value;
        let cargoLevel = document.querySelector("input[name='cargoMass']").value;

        let list = document.getElementById("faultyItems").value;

        formSubmission(document, pilot, list, pilot, copilot, fuelLevel, cargoLevel);

    });

});

