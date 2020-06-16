# Netlify Publish

Deploy your Netlify site manually using build hooks.

## Install

```
npm i netlify-publish
```

## Use

```javascript
import { netlifyPublish } from "netlify-publish";

netlifyPublish({
  build_url: "YOUR_BUILD_HOOK_URL", // required
  badge_url: "YOUR_BADGE_URL", // optional
});
```
