chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'FROM_DEVTOOLS') {
    chrome.tabs.sendMessage(request.tabId, { type: 'FROM_BACKGROUND', data: request.data });
  }
});

// HMR 지원을 위한 코드
if (import.meta.hot) {
  import.meta.hot.accept();
}
