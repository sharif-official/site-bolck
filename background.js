const blockedSites = [
  "pornhub.com",
  "xvideos.com",
  "xnxx.com",
  "redtube.com",
  "youporn.com"
];

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  const url = details.url.toLowerCase();

  for (const site of blockedSites) {
    if (url.includes(site)) {
      chrome.tabs.update(details.tabId, {
        url: "data:text/html,<h1>এই ওয়েবসাইট ব্লক করা হয়েছে</h1>"
      });
      return;
    }
  }
});