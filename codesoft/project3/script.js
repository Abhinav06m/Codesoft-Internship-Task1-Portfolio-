const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

// Loop for all buttons
for (let i = 0; i < buttons.length; i++) {
    // Event Listener
    buttons[i].addEventListener("click", function () {
        let value = this.innerText;

        // Clear Button
        if (value === "C") {
            display.value = "";
        }

        // Delete Button
        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }

        // Equal Button
        else if (value === "=") {
            try {
                display.value = eval(display.value);
            }
            catch {
                display.value = "Error";
            }
        }

        // Operators and Numbers
        else {
            display.value += value;
        }
    });
}