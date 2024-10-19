import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/content.js.js");chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'FROM_BACKGROUND') {
    console.log('Message from DevTools:', request.data);
    // 여기에서 브라우저 창에 데이터를 표시하는 로직을 구현합니다.
    const div = document.createElement('div');
    div.textContent = `DevTools Message: ${request.data}`;
    div.style.position = 'fixed';
    div.style.top = '10px';
    div.style.right = '10px';
    div.style.backgroundColor = 'yellow';
    div.style.padding = '10px';
    div.style.zIndex = '9999';
    document.body.appendChild(div);
  }
});

// HMR 지원을 위한 코드
if (import.meta.hot) {
  import.meta.hot.accept();
}

