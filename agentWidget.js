lpTag.agentSDK.init()
setTimeout(lpTag.taglets.rendererStub.click(4756821350),30000)
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

var cmdName = lpTag.agentSDK.cmdNames.write; // = "Write ChatLine"

   var data = {text: "Some text"};

   lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
var pathToData = "chatTranscript.lines";
lpTag.agentSDK.bind(pathToData, updateCallback, notifyWhenDone);
