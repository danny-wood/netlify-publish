function init(badge_url) {
  const badge = document.createElement("img");
  badge.src = badge_url;
  badge.id = "netlify-publish__badge";
  badge.style.cssText = badgeStyle();

  return badge;
}

module.exports.initBadge = init;

function badgeStyle() {
  return `margin-bottom: -5px;`;
}
