//document.getElementById("demo").innerHTML = myFunction("Siri");
// value in the usertext element should be passed as movie name 
//let demo = document.getElementById("demo");
let movie = document.getElementById("movie");
  
let movieName = "Black Panther";
let url = "http://www.omdbapi.com?apikey=ccae0820&type=movie&t=" + movieName + "&r=json";


const result= fetch(url,{method:'POST'})
.then((response)=>response.json())
.then((details)=>{
    movie.innerHTML = details.Title;
    console.log(details);
    return details;
});


/*const printAddress = async () => {
    const a = await result;
    console.log(a);
  };
  
  printAddress();*/









///////////////////////////////////////////////////////////////////////////////////////////

/* var details  = getDetails("Black Panther");
async function getDetails(movie)
{
    console.log("inside getDetails " + movie)
    let url = "http://www.omdbapi.com?apikey=ccae0820&type=movie&t=" + movie + "&r=json";
    let response = await fetch(url,{method:'POST'});
    let jsonResult = await response.json(); 
    d=jsonResult;
    console.log(JSON.stringify(jsonResult.Title));
    console.log("About to return :");
    console.log(d);
   
    return jsonResult;
}

if (details !=null){
    console.log("Got movie detail");
    console.log(d);
    //movie.innerHTML = details;
}*/


////////////////////////////////////////////////////////////////////////////////
/*var returnValue  = myFunction("Siri");

if (returnValue !=null){
    console.log("returnValue : " +returnValue);
demo.innerHTML = returnValue;}


function myFunction(name) {
    console.log("inside myfunction " + name)
  return ("Hello " + name);
}*/