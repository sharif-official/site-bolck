# Safe Web Filter

A simple Chrome/Edge extension that helps block adult (18+) content by detecting suspicious URLs and adult-related keywords on web pages. 

### Blocks any type of site in your browsers . 

## Features

- Blocks pages containing adult-related keywords.
- Detects suspicious keywords in URLs.
- Displays a warning page when content is blocked.
- Monitors dynamically loaded content.
- Works on Chromium-based browsers:
  - Google Chrome
  - Microsoft Edge
  - Brave
  - Opera
  - any browsers

---

## Project Structure

```text
18+ block-web-extension/
│
├── manifest.json
├── background.js
├── content.js
└── README.md
```

---

## How It Works

### URL Filtering

The extension scans the current URL for blocked keywords such as:

- porn
- xxx
- adult
- nsfw
- sex
- erotic
- nude

If a blocked keyword is detected, the page is immediately blocked.

### Content Filtering

The extension scans page text for adult-related keywords such as:

- porn
- pornography
- adult video
- sex video
- nude
- nudity
- escort
- fetish
- explicit content

It also includes several Bengali adult-content keywords.

If multiple adult-related keywords are detected on a page, the extension blocks access.

### Dynamic Content Detection

Many modern websites load content without refreshing the page.

The extension uses a MutationObserver to continuously monitor changes and automatically block newly loaded adult content.

---

## Installation

### Method 1: Load as Unpacked Extension

1. Download or clone this repository.

2. Open Chrome or Edge.

3. Navigate to:

```text
chrome://extensions
```
or 

```text
brave://extensions
```

or

```text
edge://extensions
```

4. Enable **Developer Mode**.

5. Click **Load unpacked**.

6. Select the `safe-web-extension` folder.

7. The extension is now active.

---

## Files Explained

### manifest.json

Defines:

- Extension name
- Version
- Permissions
- Content scripts
- Background service worker

### background.js

Handles domain-level blocking.

You can add known adult domains here:

```javascript
const blockedSites = [
  "pornhub.com",
  "xvideos.com",
  "xnxx.com"
];
```

### content.js

Responsible for:

- URL scanning
- Keyword detection
- Dynamic content monitoring
- Displaying block pages

---

## Customizing Keywords

Adult keywords can be edited inside:

```javascript
const blockedKeywords = [
  "porn",
  "xxx",
  "adult",
  "nsfw"
];
```

URL keywords can be edited inside:

```javascript
const blockedUrlKeywords = [
  "porn",
  "sex",
  "xxx"
];
```

---

## Adding More Blocked Domains

Open `background.js` and add domains:

```javascript
const blockedSites = [
  "pornhub.com",
  "xvideos.com",
  "xnxx.com",
  "redtube.com",
  "xhamster.com"
];
```

---

## Reloading After Changes

Whenever you modify the extension:

1. Open:

```text
chrome://extensions
```

2. Find **Safe Web Filter**.

3. Click **Reload**.

4. Refresh the website you are testing.

---

## Limitations

This project uses keyword-based filtering.

It may:

- Miss some adult websites.
- Produce false positives.
- Not detect adult images without keywords.
- Not classify content using AI.

---

## Future Improvements

Possible upgrades:

- AI-based NSFW image detection
- Password-protected settings
- Parent control dashboard
- SafeSearch enforcement
- YouTube Restricted Mode
- Domain blacklist updates from a server
- Custom whitelist and blacklist
- Usage reports and logs

---

## Privacy

This extension:

- Does not collect personal information.
- Does not send browsing data to any server.
- Processes content locally inside the browser.

---
# 👨‍💻 Developer

**Sharif**

GitHub:
https://github.com/sharif-official

---

# 📜 License

This project is open-source and created for educational purposes.

---
## License

MIT License

You are free to:

- Use
- Modify
- Distribute
- Improve

under the terms of the MIT License.