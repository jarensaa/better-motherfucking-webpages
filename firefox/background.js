browser.contextMenus.create({
  id: "beautify",
  title: "Motherfucking beautify"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "beautify") {
    browser.tabs.executeScript({
      file: "add-motherfucking-css.js"
    });
  }
});
