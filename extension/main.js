function onClick(info, tab) {
  chrome.runtime.sendNativeMessage(
    'by.styx.pinta', { srcUrl: info.srcUrl }
  );
}

chrome.contextMenus.create({"title": "Open with Pinta", "contexts":["image"], "onclick": onClick});
