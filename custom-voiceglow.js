// custom-voiceglow.js
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
        ID: "2thrnezcsbhwtjmu", // Replace with your actual Agent ID
        region: 'na', // Replace with your account region if different
        render: 'bottom-right',
        stylesheets: [
            "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
            "https://cdn.jsdelivr.net/gh/DasaniH2O/chatbot-assets@main/custom-chat-bubble.css" // Replace with the actual path to your CSS file
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
            if (window.VG && typeof window.VG.open === 'function') {
                window.VG.open();
                this.style.display = 'none';
            }
        });

        window.addEventListener('message', function(event) {
            if (event.data === 'vg-widget-closed') {
                document.getElementById('custom-chat-bubble').style.display = 'flex';
            }
        });
    }
})();
