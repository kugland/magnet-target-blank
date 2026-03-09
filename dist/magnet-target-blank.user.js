// ==UserScript==
// @name         magnet-target-blank
// @namespace    github.com/kugland/magnet-target-blank
// @version      0.0.1
// @author       André Kugland <kugland@gmail.com>
// @description  Open magnet links in a new tab.
// @license      MIT
// @homepage     https://github.com/kugland/magnet-target-blank
// @homepageURL  https://github.com/kugland/magnet-target-blank
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const listener = (event) => {
    const target = event.target;
    if (target.tagName === "A") {
      const href = target.href;
      if (typeof href === "string" && href.startsWith("magnet:")) {
        event.preventDefault();
        event.stopPropagation();
        window.open(href, "_blank");
      }
    }
  };
  document.addEventListener("click", listener, { capture: true });
  document.addEventListener("tap", listener, { capture: true });

})();