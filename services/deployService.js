import { _notificationService } from "./notificationService";
import { _badgeService } from "./badgeService";

async function deploySite(build_url) {
  try {
    _notificationService.sendNotification("Deploying Site...");

    const response = await fetch(build_url, {
      method: "POST",
    });

    response.ok && _badgeService.refreshBadge();
  } catch (ex) {
    console.error(ex.message);
    _notificationService.sendNotification(
      "Something went wrong, could not deploy.",
      true
    );
  }
}

module.exports._deployService = {
  deploySite,
};
