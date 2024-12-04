class Player {
    constructor() {
        this.initializeLayout();
    }

    initializeLayout() {
        const heightMain = document.getElementById("player");
        heightMain.style.height = `${window.innerHeight}px`;

        if (window.innerWidth < 620) {
            heightMain.style.width = `${window.innerWidth}px`;
        }

        const heightDiv = document.getElementById("content");
        heightDiv.style.height = `${window.innerHeight - 300}px`;
    }
}

class Audio_Player {
    constructor() {
        this.audio_file = document.getElementById("audio-file");
        this.title_audio = document.getElementById("title_radio");
        this.play_pause_button = document.getElementById("play_pause");
        this.isPlayed = false;

        this.names_radio = ["Q Music", "Q Music Foute Uur", "100% NL"];
        this.source_audio = [
            "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_thema.mp3",
            "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_fouteuur.mp3",
            "https://stream.100p.nl/100pctnl.mp3"
        ];

        this.server = 0;

        // Event Listeners
        this.play_pause_button.addEventListener("click", () => {
            this.play_pause();
        });

        document.getElementById("next").addEventListener("click", () => {
            if (this.server < this.source_audio.length - 1) {
                this.server++;
            } else {
                this.server = 0;
            }
            this.setResource(true);
        });

        document.getElementById("back").addEventListener("click", () => {
            if (this.server > 0) {
                this.server--;
            } else {
                this.server = this.source_audio.length - 1;
            }
            this.setResource(true);
        });

        // Initial Resource
        this.setResource(true);
    }

    setResource(autoPlay = false) {
        this.audio_file.src = this.source_audio[this.server];
        this.title_audio.innerHTML = this.names_radio[this.server];
        this.audio_file.load();

        if (autoPlay) {
            this.audio_file.play().catch(error => {
                console.log("Autoplay prevented: " + error.message);
                // Automatically switch to play state if autoplay is prevented
                this.play_pause_button.src = "./images/play.png";
                this.isPlayed = false;
            });
            this.play_pause_button.src = "./images/pause.png";
            this.isPlayed = true;
        } else {
            this.play_pause_button.src = "./images/play.png";
            this.isPlayed = false;
        }
    }

    play_pause() {
        if (!this.isPlayed) {
            this.play_pause_button.src = "./images/pause.png";
            this.audio_file.play();
            this.isPlayed = true;
        } else {
            this.play_pause_button.src = "./images/play.png";
            this.audio_file.pause();
            this.isPlayed = false;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new Player();
    new Audio_Player();
});
