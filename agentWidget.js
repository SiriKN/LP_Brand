lpTag.agentSDK.init()

var updateCallback = function(data) {
    // get convo lines as they happen
    var newLine = data.newValue;
    let usertext = document.getElementById("usertext");
    let agenttext = document.getElementById("agenttext");
    if (newLine[0].by == "Visitor") {
        usertext.innerHTML = newLine[0].text;
        console.log('setting visitor text');
    } else {
        agenttext.innerHTML = newLine[0].text;
        console.log('setting agent text');
    }
    var ccs = document.getElementById("ccs");
    var ccsData = ccs.innerHTML;
    console.log("ccs data element: " + ccsData)
    if (ccsData == "") {
        // API call to grab data
        let sessionId = ""
        let onSuccessSession = (data) => {
            sessionId = data; 
            console.log("sessionId:  " + sessionId);
            
        }
        let onFailure = (err) => {
            console.log(err);
        }
        var sessionPath = "chatInfo.rtSessionId";
        lpTag.agentSDK.get(sessionPath, onSuccessSession, onFailure);
    }
};

var notifyWhenDone = function(err) {
    if (err) {
        console.log(err);
    }
    console.log("set the value");
};





////////////////////////////////
//setTimeout(lpTag.taglets.rendererStub.click(4756821350),30000)

////


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

var cmdName = lpTag.agentSDK.cmdNames.writeSC; // = "Write ChatLine"lpTag.agentSDK.cmdNames.writeSC

   //var data = {text: "Some text"};

   lpTag.agentSDK.command(cmdName, result, notifyWhenDone);
var pathToData = "chatTranscript.lines";

lpTag.agentSDK.bind(pathToData, updateCallback, notifyWhenDone);

