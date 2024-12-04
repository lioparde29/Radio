class Volume {
    constructor() {
        this.audio_file = document.getElementById("audio-file");
        this.audio_file.volume = 0.5;

        this.volume_range = document.getElementById("volume_range");
        this.volume_range.addEventListener("input", () => {
            this.audio_file.volume = this.volume_range.value / 100;
        });

        this.speed_range = document.getElementById("speed_range");
        this.speed_range.addEventListener("input", () => {
            this.audio_file.playbackRate = this.speed_range.value / 100;
        });
    }
}

document.addEventListener("DOMContentLoaded", () => new Volume());
