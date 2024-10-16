export const sendAppServerRequest = (urlPath: String, successMessage: String, requestBody: Object): Promise<void> => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("POST", `https://app.upsignon.eu/${urlPath}`, true);
    req.onload = function () {
      if (req.status != 200) {
        reject();
        alert(`Error ${req.status}: ${req.statusText}`);
      } else {
        resolve();
        alert(successMessage);
      }
    };
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(JSON.stringify(requestBody));
    req.onerror = function (e) {
      reject();
      alert(`Error ${e.type}`);
    };
  });
};
