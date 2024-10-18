(function () {
  var overlayContainer = document.createElement("div");
  overlayContainer.id = "VG_OVERLAY_CONTAINER";
  overlayContainer.innerHTML = "<!-- Chat widget will be rendered here -->";

  var chatBubble = document.createElement("div");
  chatBubble.id = "custom-chat-bubble";
  chatBubble.innerHTML = `
    <div class="ai-image"></div>
    <span class="vg-bubble-text">
      Need help? Want to send us feedback?
      <span class="click-text"> Click here.</span>
    </span>`;

  document.body.appendChild(overlayContainer);
  document.body.appendChild(chatBubble);

  window.VG_CONFIG = {
    ID: "2thrnezcsbhwtjmu",
    region: "na",
    render: "full-width",
    stylesheets: ["https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css"],
  };
  var VG_SCRIPT = document.createElement("script");
  VG_SCRIPT.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
  VG_SCRIPT.defer = true;
  document.body.appendChild(VG_SCRIPT);

  let active = false;
  chatBubble.addEventListener("click", function () {
    console.log("Hello");
    if (!active) {
      overlayContainer.classList.add("active");
      active = true;
    } else {
      overlayContainer.classList.remove("active");
      active = false;
    }
  });
})();
