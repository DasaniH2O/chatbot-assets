(function() {
    // Create and inject the custom chat bubble
    function injectChatBubble() {
        const bubble = document.createElement('div');
        bubble.id = 'custom-chat-bubble';
        bubble.innerHTML = `
            <div class="ai-image"></div>
            <span class="vg-bubble-text">Welcome, feel free to ask me anything. <span class="click-text">Click on me!</span></span>
        `;
        document.body.appendChild(bubble);
    }

    // Voiceglow configuration
    window.VG_CONFIG = {
        ID: "2thrnezcsbhwtjmu", // Make sure this is your correct Agent ID
        region: 'na', // Ensure this is the correct region
        render: 'bottom-right',
        stylesheets: [
            "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
            "https://cdn.jsdelivr.net/gh/DasaniH2O/chatbot-assets@main/custom-chat-bubble.css"
        ],
        autostart: false
    };

    // Load Voiceglow script
    const vgScript = document.createElement('script');
    vgScript.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
    vgScript.onload = function() {
        injectChatBubble();
        setupEventListeners();
    };
    document.body.appendChild(vgScript);

    // Setup event listeners
    function setupEventListeners() {
        document.getElementById('custom-chat-bubble').addEventListener('click', function() {
            console.log("Custom bubble clicked"); // Debug log
            if (window.VG && typeof window.VG.open === 'function') {
                console.log("Attempting to open Voiceglow chat"); // Debug log
                window.VG.open();
                this.style.display = 'none';
            } else {
                console.error("Voiceglow chat interface not available"); // Debug log
            }
        });

        window.addEventListener('message', function(event) {
            if (event.data === 'vg-widget-closed') {
                document.getElementById('custom-chat-bubble').style.display = 'flex';
            }
        });
    }

    // Ensure Voiceglow is initialized
    function ensureVoiceglowInitialized() {
        if (window.VG && typeof window.VG.init === 'function') {
            window.VG.init(window.VG_CONFIG);
        } else {
            console.error("Voiceglow not initialized properly");
        }
    }

    // Call this function after a short delay to ensure Voiceglow has loaded
    setTimeout(ensureVoiceglowInitialized, 1000);
})();
