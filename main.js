function sendMsg(info, tab) {
  chrome.runtime.sendNativeMessage(
    'by.styx.run', { srcUrl: info.srcUrl, bin: "pinta" }
  );
}

chrome.contextMenus.create({"title": "Open with Pinta", "contexts":["image"], "onclick": sendMsg});
