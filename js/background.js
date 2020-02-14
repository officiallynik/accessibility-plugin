var contextMenus = {};

contextMenus.accessibilityTest = 
    chrome.contextMenus.create(
        {
            "title":"Accessibility Test",
        },
        function (){
            if(chrome.runtime.lastError){
                console.error(chrome.runtime.lastError.message);
            }
        }
    );

chrome.contextMenus.onClicked.addListener(contextMenuHandler);


function contextMenuHandler(info, tab){

    if(info.menuItemId===contextMenus.accessibilityTest){
        chrome.tabs.executeScript({
            file: 'js/accessibility-build.js'
          });
    }
}