// public/app.js

document.getElementById('fetchMessage').addEventListener('click', function () {
  fetch('/message')
    .then(response => response.json())
    .then(data => {
      document.getElementById('message').textContent = data.message;
    });
});
