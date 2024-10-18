(function () {
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
})();

let active = false;

document
  .getElementById("custom-chat-bubble")
  .addEventListener("click", function () {
    console.log("Hello");
    if (!active) {
      document.getElementById("VG_OVERLAY_CONTAINER").classList.add("active");
      active = true;
    } else {
      document
        .getElementById("VG_OVERLAY_CONTAINER")
        .classList.remove("active");
      active = false;
    }
  });
