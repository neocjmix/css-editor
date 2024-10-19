import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Panel() {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0].id;
      chrome.runtime.sendMessage({ type: 'FROM_DEVTOOLS', tabId, data: message });
    });
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message"
      />
      <button onClick={sendMessage}>Send to Page</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Panel />);

// HMR 지원을 위한 코드
if (import.meta.hot) {
  import.meta.hot.accept();
}
