import { initLayout } from "./components/layout";
import { initButton } from "./components/button";
import { initBadge } from "./components/badge";
import { initNotification } from "./components/notification";

function app(config = {}) {
  const layout = initLayout();

  const button = initButton(config.build_url);
  const badge = initBadge(config.badge_url);
  const notification = initNotification();

  layout.appendChild(notification);
  badge && layout.appendChild(badge);
  layout.appendChild(button);
  document.body.appendChild(layout);
}

module.exports.netlifyPublish = app;
