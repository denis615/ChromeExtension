document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getData').addEventListener(`click`,onclick,false)

    function onclick(){
        chrome.tabs.query({currentWindow:true, active:true},
            function(tabs){
                chrome.tabs.sendMessage(tabs[0].id,'getData')
            })
    }
}


,false)





document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('giveData').addEventListener(`click`,onclick1,false)

    function onclick1(){
        chrome.tabs.query({currentWindow:true, active:true},
            function(tabs){
                chrome.tabs.sendMessage(tabs[0].id,'giveData')
            })
    }
}


,false)







 

       
 
 