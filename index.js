function init(config = {}) {
  const container = initContainer();

  const link = initLink();
  bindDeployClickEvent(link, config.build_url);

  const badge = initBadge(config.badge_url);

  container.appendChild(link);
  badge && container.appendChild(badge);
  document.body.appendChild(container);
}

module.exports.netlifyPublish = init;

function initContainer() {
  const container = document.createElement("div");
  container.style.cssText = defaultContainerStyle();
  container.innerText = "Deploy Site: ";

  return container;
}

function initLink() {
  const link = document.createElement("a");
  link.text = "Publish";
  link.href = "/";

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

async function deploySite(build_url) {
  try {
    console.log("Publishing Site:", build_url);

    const request = await fetch(build_url, {
      method: "POST",
    });

    refreshBadge();
  } catch (ex) {
    console.error(ex.message);
  }
}

function initBadge(badge_url) {
  const badge = document.createElement("img");
  badge.src = badge_url;
  badge.id = "netlify_publish__badge";

  return badge;
}

function refreshBadge() {
  const badge = document.getElementById("netlify_publish__badge");
  badge.src = badge.src + "?" + new Date().getTime();
}

function defaultContainerStyle() {
  return `
          font-family: Arial;
          border-top: 1px solid #dddddd;
          background: #eeeeee;
          position: fixed;
          bottom: 0;
          left:0;
          width: 100%;
          padding: 10px;
      `;
}
