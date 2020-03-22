window.addEventListener('load', function() {
    console.log ('window has loaded');
    let htmlResult= document.getElementById('container');
    let apiToTry="";
    let submitButton = document.getElementById("submitUrlButton");
    let urlToTest = "";
    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        logUrl();
        let responsePromise = fetch(urlToTest);
        responsePromise.then(function(response){
                console.log ('fetch fired: ' +urlToTest);
        })
    })
});


function logUrl (){
    urlToTest = document.getElementById("apiurl");
    urlToTest = String(urlToTest.value);
    console.log (urlToTest);

};