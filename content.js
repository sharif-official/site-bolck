// content.js

const blockedKeywords = [
  "adult",
  "18+",
  "18+ vedio",
  "porn vedio",
  "Porn vedio",
  "nsfw",
  "xxx",
  "porn",
  "pornography",
  "adult video",
  "adult content",
  "mature content",
  "explicit content",
  "sex video",
  "sex clips",
  "erotic",
  "nude",
  "nudity",
  "naked",
  "uncensored",
  "cam girls",
  "live cams",
  "adult cams",
  "escort",
  "hookup",
  "fetish",
  "watch adult",
  "free adult",
  "premium adult",
  "adult streaming",
  "adult gallery",
  "অশ্লীল",
  "প্রাপ্তবয়স্ক",
  "নগ্ন",
  "অ্যাডাল্ট ভিডিও",
  "অশালীন",
  "অশোভন"
];

const blockedUrlKeywords = [
  "porn",
  "xxx",
  "adult",
  "nsfw",
  "sex",
  "erotic",
  "nude"
];

function blockPage(reason) {
  document.documentElement.innerHTML = `
    <head>
      <title>Blocked</title>
    </head>
    <body style="
      margin:0;
      font-family:Arial,sans-serif;
      background:#111;
      color:white;
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      text-align:center;
    ">
      <div>
        <h1>🚫 Website Blocked 🚫</h1>
        <p>This page was blocked in your location.</p>
        
      </div>
    </body>
  `;
}

function checkUrl() {
  const url = window.location.href.toLowerCase();

  for (const keyword of blockedUrlKeywords) {
    if (url.includes(keyword)) {
      blockPage("Blocked URL keyword detected");
      return true;
    }
  }

  return false;
}

function checkPageText() {
  const text = document.body?.innerText?.toLowerCase() || "";

  let matches = 0;

  for (const keyword of blockedKeywords) {
    if (text.includes(keyword.toLowerCase())) {
      matches++;
    }
  }

  // 2 বা তার বেশি ম্যাচ হলে ব্লক
  if (matches >= 2) {
    blockPage("Adult-content keywords detected");
    return true;
  }

  return false;
}

function runFilter() {
  if (checkUrl()) return;
  checkPageText();
}

// Initial scan
runFilter();

// Dynamic content scan
const observer = new MutationObserver(() => {
  checkPageText();
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});