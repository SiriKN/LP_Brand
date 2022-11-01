
// value in the usertext element should be passed as movie name 

let movie = document.getElementById("movie");

let movieName = document.getElementById("usertext").value;
console.log("movieName : "+ movieName);

if(movieName == null)
{
    movieName = "Black Panther";
}
let url = "http://www.omdbapi.com?apikey=ccae0820&type=movie&t=" + movieName + "&r=json";


const result= fetch(url,{method:'POST'})
.then((response)=>response.json())
.then((details)=>{
    movie.innerHTML = details.Title;
    console.log(details);
    return details;
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

/*var details  = getDetails("Black Panther");
if (details !=null){
    console.log("Got movie detail");
    //console.log(details);
    //movie.innerHTML = details;
}

async function getDetails(movie)
{
    let url = "http://www.omdbapi.com?apikey=ccae0820&type=movie&t=" + movie + "&r=json";
    let response = await fetch(url,{method:'POST'});
    let jsonResult = await response.json(); 
    
    console.log(JSON.stringify(jsonResult.Title));
    console.log(jsonResult);
   
    return jsonResult;
}*/


