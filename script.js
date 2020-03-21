window.addEventListener('load', function() {
    console.log ('window has loaded');
    const urlEntry = document.getElementById
    let fetchPromise =fetch('http://api.openweathermap.org/data/2.5/weather?zip=63385&appid=e770ede1e51fbbb66b830c2986e6bb7a');
    fetchPromise.then(function(response){
        const jsonPromise = response.json();
        jsonPromise.then(function(json){
            console.log(json);
            let htmlResult = document.getElementById('container');
            for (key in json){
                htmlResult.innerHTML+= `<div>${key}</div>`;
            }
        });
    });  
});

