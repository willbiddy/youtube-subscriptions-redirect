chrome.webNavigation.onCompleted.addListener(
  function (details) {
    chrome.tabs.update(details.tabId, {
      url: 'https://www.youtube.com/feed/subscriptions',
    });
  },
  {
    url: [
      {
        hostEquals: 'www.youtube.com',
        pathEquals: '/',
      },
      {
        hostEquals: 'youtube.com',
        pathEquals: '/',
      },
    ],
  }
);
