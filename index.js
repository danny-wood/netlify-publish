function init(config = {}) {
  const container = initContainer();

  const link = initLink();
  bindDeployClickEvent(link, config.build_url);

  const badge = initBadge(config.badge_url);

  const message = initMessage();

  container.appendChild(message);
  badge && container.appendChild(badge);
  container.appendChild(link);
  document.body.appendChild(container);
}

module.exports.netlifyPublish = init;

// Container
function initContainer() {
  const container = document.createElement("div");
  container.id = "netlify-publish-container";
  container.style.cssText = defaultContainerStyle();

  return container;
}
// ---

// Link
function initLink() {
  const link = document.createElement("a");
  link.text = "Publish";
  link.href = "/";
  link.style.cssText = defaultLinkStyle();

  return link;
}

function bindDeployClickEvent(link, build_url) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    if (!build_url)
      return console.error("netlify-publish: No build url provided.");

    deploySite(build_url);
  });
}
// ---

// Badge
function initBadge(badge_url) {
  const badge = document.createElement("img");
  badge.src = badge_url;
  badge.id = "netlify_publish__badge";
  badge.style.cssText = defaultBadgeStyle();

  return badge;
}

function initBadgeRefresh() {
  refreshBadge();
  setInterval(refreshBadge, 120000); // Refresh badge every 2 minutes once triggered
}

function refreshBadge() {
  console.log("Refreshing Badge");
  const badge = document.getElementById("netlify_publish__badge");
  badge.src = badge.src + "?" + new Date().getTime();
}
// ---

// Message
function initMessage() {
  const message = document.createElement("span");
  message.id = "netlify-publish-message";
  message.style.cssText = defaultMessageStyle();

  return message;
}

function showMessage(text) {
  const message = document.getElementById("netlify-publish-message");
  message.innerText = text;

  setTimeout(function () {
    message.innerText = "";
  }, 5000);
}
//--

// Deploy
async function deploySite(build_url) {
  try {
    showMessage("Deploying Site...");

    const response = await fetch(build_url, {
      method: "POST",
    });

    response.ok && initBadgeRefresh();
  } catch (ex) {
    console.error(ex.message);
  }
}
// ---

// Styling
function defaultContainerStyle() {
  return `
          font-family: Arial;
          border-top: 1px solid #dddddd;
          background: #eeeeee;
          position: fixed;
          bottom: 0;
          left:0;
          width: calc(100% - 30px);
          padding: 10px 15px;
          text-align: right;
      `;
}

function defaultLinkStyle() {
  return `
          font-family: Arial;
          background: #009387;
          color: #ffffff;
          padding: 10px;
          display: inline-block;
          text-decoration: none;
          margin-left: 15px;
      `;
}

function defaultBadgeStyle() {
  return `
          margin-bottom: -5px;
      `;
}

function defaultMessageStyle() {
  return `
          font-family: Arial;
          color: #009387;
          font-size: 16px;
          float: left;
          margin-top: 10px;
      `;
}
// ---
