class Color {
    constructor() {
        this.color_1 = document.getElementById("color_1");
        this.color_2 = document.getElementById("color_2");
        this.color_3 = document.getElementById("color_3");

        this.color_1.addEventListener("click", () => {
            this.select_color("color1");
        });

        this.color_2.addEventListener("click", () => {
            this.select_color("color2");
        });

        this.color_3.addEventListener("click", () => {
            this.select_color("color3");
        });

        if (localStorage.getItem("COLOR") === null) {
            document.body.style.backgroundColor = `rgb(18, 235, 18)`;
        } else {
            this.select_color(localStorage.getItem("COLOR"));
        }
    }

    select_color(color) {
        if (color === "color1") {
            document.body.style.backgroundColor = `rgb(231, 45, 45)`;
        } else if (color === "color2") {
            document.body.style.backgroundColor = `rgb(18, 235, 18)`;
        } else if (color === "color3") {
            document.body.style.backgroundColor = `rgb(32, 32, 228)`;
        }

        localStorage.setItem("COLOR", color);
    }
}

document.addEventListener("DOMContentLoaded", () => new Color());
