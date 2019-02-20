'use strict';

chrome.browserAction.onClicked.addListener(() => {
  var queryInfo = {
    active: true,
    windowId: chrome.windows.WINDOW_ID_CURRENT
  };

  // タブの情報を取得する
  chrome.tabs.query(queryInfo, function (result) {
    // 配列の先頭に現在タブの情報が入っている
    let currentTab = result.shift();

    // メッセージ
    let message = {};

    // 現在表示しているタブにメッセージを送る
    chrome.tabs.sendMessage(currentTab.id, message, function () { });
  });
});

