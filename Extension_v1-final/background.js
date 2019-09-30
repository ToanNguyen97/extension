/* eslint-disable */
let Clicked = false
chrome.browserAction.onClicked.addListener(function (tab) {

  chrome.tabs.executeScript(tab.id,{
  file: 'jquery.min.js'
  })
  chrome.tabs.insertCSS(tab.id,{
    file: 'content.css'
  })
  chrome.tabs.executeScript({
  file: 'content.js'
  })
  let notification = {
    type: 'basic',
    iconUrl: 'images/icons8-increase-font-100.png',
    title: 'Yeah!!',
    message: 'Turn On 9thWonder Tools Test'
  }
  chrome.notifications.clear('Event Active')
  chrome.notifications.create('Event Active', notification)
})
//add event click mouse right
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    "id": "Extension9th",
    "title": "Extension 9th",
    "contexts": ["link", "frame", "all", "page"]
  })
})

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "Extension9th") { // here's where you'll need the ID
  chrome.tabs.executeScript(tab.id,{
    file: 'jquery.min.js'
    })
    chrome.tabs.insertCSS(tab.id,{
      file: 'content.css'
    })
    chrome.tabs.executeScript({
    file: 'content.js'
    })
  }
})
