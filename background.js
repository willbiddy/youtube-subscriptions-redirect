chrome.webNavigation.onCompleted.addListener(
  function (details) {
    if (details.url.match(/^https?:\/\/(www\.)?youtube\.com\/?$/)) {
      chrome.tabs.update(details.tabId, {
        url: 'https://www.youtube.com/feed/subscriptions',
      });
    }
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
