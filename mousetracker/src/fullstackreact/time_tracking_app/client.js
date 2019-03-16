var url = "http://localhost:3001/api/timers"

function getTimers(success) {
  return fetch(url, {
    headers: {
      Accept: "application/json"
    }
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(success);
}

function createTimer(data) {
  return fetch(url, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(checkStatus);
}

function updateTimer(data) {
  return fetch(url, {
    method: "put",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(checkStatus);
}

function deleteTimer(data) {
  return fetch(url, {
    method: "delete",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(checkStatus);
}

function startTimer(data) {
  return fetch(url + "/start", {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(checkStatus);
}

function stopTimer(data) {
  return fetch(url + "/stop", {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(checkStatus);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

module.exports = {
    getTimers:getTimers,
    createTimer:createTimer,
    updateTimer: updateTimer,
    deleteTimer: deleteTimer,
    startTimer: startTimer,
    stopTimer:stopTimer,
    checkStatus: checkStatus,
    parseJSON: parseJSON
}