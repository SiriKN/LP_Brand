lpTag.agentSDK.init()

var updateCallback = function(data) {
    // get convo lines as they happen
    var newLine = data.newValue;
    let usertext = document.getElementById("usertext");
    let movie = document.getElementById("movie");
    let movieName = "Black Panther";

    if (newLine[0].by == "Visitor") {
        usertext.innerHTML = newLine[0].text;
        movieName = newLine[0].text;
        console.log('setting visitor text ' +movieName);
        
        if (movieName != 'hi')
        {
            let url = "https://www.omdbapi.com?apikey=ccae0820&type=movie&t=" + movieName + "&r=json";

            try{
                fetch(url,{method:'POST'})
                .then((response)=>response.json())
                .then((details)=>{
                    movie.innerHTML = "Title: "+ details.Title +"<br> IMDB Rating: "+details.imdbRating+ "<br>Actors: " + details.Actors;

                    console.log(details);
                
                });
            }
            catch(e)
            {
                console.log('error from catch : e'+e);
            }
        }

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


var pathToData = "chatTranscript.lines";
lpTag.agentSDK.bind(pathToData, updateCallback, notifyWhenDone);
//setTimeout(lpTag.taglets.rendererStub.click(4756821350),30000)

