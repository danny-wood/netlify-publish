function sendNotification(text, persist) {
  const message = document.getElementById("netlify-publish__notification");
  message.innerText = text;

  if (!persist) {
    setTimeout(function () {
      message.innerText = "";
    }, 5000);
  }
}

module.exports._notificationService = {
  sendNotification,
};
