(function() {
    // Voiceglow configuration
    const VG_CONFIG = {
        ID: "2thrnezcsbhwtjmu", // Make sure this is your correct Agent ID
        region: 'na', // Ensure this is the correct region
        render: 'bottom-right',
        stylesheets: [
            "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
            "https://cdn.jsdelivr.net/gh/DasaniH2O/chatbot-assets@main/custom-chat-bubble.css"
        ],
        autostart: false
    };

    // Function to create and inject the custom chat bubble
    function injectChatBubble() {
        const bubble = document.createElement('div');
        bubble.id = 'custom-chat-bubble';
        bubble.innerHTML = `
            <div class="ai-image"></div>
            <span class="vg-bubble-text">Welcome, feel free to ask me anything. <span class="click-text">Click on me!</span></span>
        `;
        document.body.appendChild(bubble);
        console.log('Custom chat bubble injected');
        return bubble;
    }

    // Function to setup event listeners
    function setupEventListeners(customBubble) {
        if (customBubble) {
            customBubble.addEventListener('click', function() {
                console.log("Custom bubble clicked");
                if (window.VG && typeof window.VG.open === 'function') {
                    console.log("Attempting to open Voiceglow chat");
                    window.VG.open();
                    this.style.display = 'none';
                } else {
                    console.error("Voiceglow chat interface not available");
                }
            });
            console.log('Event listener added to custom bubble');
        } else {
            console.error('Custom chat bubble not found');
        }

        window.addEventListener('message', function(event) {
            if (event.data === 'vg-widget-closed') {
                if (customBubble) {
                    customBubble.style.display = 'flex';
                    console.log('Custom bubble displayed after chat closed');
                }
            }
        });
    }

    // Function to initialize Voiceglow
    function initializeVoiceglow() {
        if (window.VG && typeof window.VG.init === 'function') {
            window.VG.init(VG_CONFIG);
            console.log('Voiceglow initialized');
        } else {
            console.error("Voiceglow not initialized properly");
        }
    }

    // Function to load Voiceglow script and set up everything
    function loadVoiceglow() {
        const vgScript = document.createElement('script');
        vgScript.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
        vgScript.onload = function() {
            console.log('Voiceglow script loaded');
            const customBubble = injectChatBubble();
            setupEventListeners(customBubble);
            initializeVoiceglow();
        };
        vgScript.onerror = function() {
            console.error('Failed to load Voiceglow script');
        };
        document.body.appendChild(vgScript);
    }

    // Start the process
    document.addEventListener('DOMContentLoaded', loadVoiceglow);
})();
