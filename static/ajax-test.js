var success = function(message){
    console.log(message);
}
var fail = function(message){
    console.log(message);
}


var request = new XMLHttpRequest();
request.onreadystatechange = function(){
    if(request.readyState == 4){
        if(request.status == 200){
            console.log("xhrrequest success");
            success("hello, success");
        }
        else{
            console.log("xhrrequest failed!");
            fail(request.status);
        }
    }
    else{
        //http request is running...
    }
}
request.open("GET", "./");
request.send();

moneyApi = function(){
    function success2(message){
        console.log(message);
    }
    function fail2(message){
        console.log(message);
    }
    var request2 = new XMLHttpRequest();
    request2.onreadystatechange = function(){
        if(request2.readyState == 4){
            if(request2.status == 200){
                console.log("api success");
                success2(request2.responseText);

            }
            else{
                console.log("api fail");
                fail2(request2.status);
                
            }
        }
        else{

        }

    }
    request2.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=London&lang=en&APPID=675a6f1f0e4160179b80a9177f7c345d")
    request2.send();
}