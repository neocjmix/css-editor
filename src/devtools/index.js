chrome.devtools.panels.create(
  "My Extension",
  null,
  "src/panel/index.html",
  function(panel) {
    console.log("Panel 1created.");
  }
);

// HMR 지원을 위한 코드
if (import.meta.hot) {
  import.meta.hot.accept();
}
