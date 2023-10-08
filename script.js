function getCurrentURL()
{
    return browser.tabs.query({currentWindow: true, active: true})
        .then((tabs) => {
        console.log(tabs[0].url);
    });
}

function parseCommaSep(rawInput)
{
    sanitizedInput = [];

    rawInput.split(",").forEach(element => {
        sanitizedInput.push(element.trim());
    });

    return sanitizedInput;
}

window.addEventListener("DOMContentLoaded", function(){

    const searchButton = document.getElementById("searchButton");
    
    searchButton.onclick = function(){
        let rootURL = document.getElementById("rootUrlField").value;
        let keywords = parseCommaSep(document.getElementById("keywordsField").value);
        let searchLevel = document.getElementById("searchLevelField").value;
        let blacklistedLocations = parseCommaSep(document.getElementById("blacklistedLocationsField").value);
        let noParent = document.getElementById("noParentCheckbox").value;
    }
});
