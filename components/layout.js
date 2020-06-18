const layoutId = "netlify-publish--layout";

function init() {
  const layout = document.createElement("div");
  layout.id = layoutId;
  layout.style.cssText = layoutStyle();

  return layout;
}

module.exports.initLayout = init;

function layoutStyle() {
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
