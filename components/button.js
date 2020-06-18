import { _deployService } from "../services/deployService";

function init(build_url) {
  const button = document.createElement("a");
  button.text = "Publish";
  button.href = "/";
  button.style.cssText = buttonStyle();

  bindDeployClickEvent(button, build_url);

  return button;
}

function bindDeployClickEvent(button, build_url) {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    if (!build_url)
      return console.error("netlify-publish: No build url provided.");

    _deployService.deploySite(build_url);
  });
}

module.exports.initButton = init;

function buttonStyle() {
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
