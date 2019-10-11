/* eslint-disable */
//add event click mouse right
chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
  chrome.runtime.reload();
})
chrome.runtime.onInstalled.addListener(function () {

  chrome.contextMenus.create({
    "id": "Extension9th",
    "title": "Extension 9th",
    "contexts": ["link", "frame", "all", "page"]
  })

})
chrome.storage.local.set({
  Clicked: true
}, function () {})
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.storage.local.get('Clicked', function (result) {
    if (result.Clicked) {
      chrome.tabs.executeScript(tab.id, {
        file: 'jquery.min.js'
      })
      chrome.tabs.insertCSS(tab.id, {
        file: 'highjs.min.css'
      })
      chrome.tabs.insertCSS(tab.id, {
        file: 'content.css'
      })
      chrome.tabs.executeScript(tab.id, {
        file: 'highlightjs.min.js'
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
        chrome.storage.local.set({Clicked: false}, function() {})
  }}
  )
  //let port = chrome.tabs.connect(tab.id, {name: 'connect'})
  //console.log('port', port)
  // chrome.tabs.sendMessage(tab.id, {'status': true}, function (res) {
  //   console.log('alo', res)
  // })
})

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  chrome.tabs.sendRequest(tab.id, {
    action: "OpenOrReload"
  }, function (loaded) {
    let notification = {
      type: 'basic',
      iconUrl: 'images/icons8-increase-font-100.png',
      title: 'Yeah!!',
      message: 'Turn On 9thWonder Tools Test'
    }
    chrome.notifications.clear('Event Active')
    chrome.notifications.create('Event Active', notification)
    chrome.storage.local.set({
      Clicked: false
    }, function () {})
  })
  // chrome.storage.local.get('Clicked', function (result) {
  //   if (result.Clicked) {
  //     if (info.menuItemId === "Extension9th") { // here's where you'll need the ID
  //       chrome.tabs.executeScript(tab.id, {
  //         file: 'jquery.min.js'
  //       })
  //       chrome.tabs.insertCSS(tab.id, {
  //         file: 'content.css'
  //       })
  //       chrome.tabs.executeScript({
  //         file: 'content.js'
  //       })
  //       let notification = {
  //         type: 'basic',
  //         iconUrl: 'images/icons8-increase-font-100.png',
  //         title: 'Yeah!!',
  //         message: 'Turn On 9thWonder Tools Test'
  //       }
  //       chrome.notifications.clear('Event Active')
  //       chrome.notifications.create('Event Active', notification)
  //       chrome.storage.local.set({
  //         Clicked: false
  //       }, function () {})
  //     }
  //   }
  // })
})