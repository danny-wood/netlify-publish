const init = () => {
  const message = document.createElement("span");
  message.id = "netlify-publish__notification";
  message.style.cssText = notificationStyle();

  return message;
};

module.exports.initNotification = init;

function notificationStyle() {
  return `
        font-family: Arial;
        color: #009387;
        font-size: 16px;
        float: left;
        margin-top: 10px;
    `;
}
