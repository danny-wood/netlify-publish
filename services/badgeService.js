function refreshBadge() {
  const badge = document.getElementById("netlify-publish__badge");

  versionBadge(badge);
  setInterval(() => versionBadge(badge), 120000); // Refresh badge every 2 minutes once triggered
}

function versionBadge(badge) {
  console.log("Refreshing badge...");
  badge.src = badge.src + "?" + new Date().getTime();
}

module.exports._badgeService = {
  refreshBadge,
};
