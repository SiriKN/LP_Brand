//document.getElementById("demo").innerHTML = myFunction("Siri");

let demo = document.getElementById("demo");
let movie = document.getElementById("movie");
    
var returnValue  = myFunction("Siri");

if (returnValue !=null){
    console.log("returnValue : " +returnValue);
demo.innerHTML = returnValue;}

var details  = getDetails("Black Panther");


if (details !=null){
    console.log("Got movie detail");
    //console.log(details);
    //movie.innerHTML = details;
}


function myFunction(name) {
    console.log("inside myfunction " + name)
  return ("Hello " + name);
}

async function getDetails(movie)
{
    let url = "http://www.omdbapi.com?apikey=ccae0820&type=movie&t=" + movie + "&r=json";
    let response = await fetch(url,{method:'POST'});
    let jsonResult = await response.json(); 
    
    console.log(JSON.stringify(jsonResult.Title));
    console.log(jsonResult);
   
    return jsonResult;
}



