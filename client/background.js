chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.windows.create({
      url: chrome.runtime.getURL("./index.html"),
      type: "normal",
      width: 800,
      height: 600
    });
  });