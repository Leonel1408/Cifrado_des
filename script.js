document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("fileInput");
    const keyInput = document.getElementById("keyInput");
    const encryptButton = document.getElementById("encryptButton");
    const decryptButton = document.getElementById("decryptButton");
    const output = document.getElementById("output");

    encryptButton.addEventListener("click", function() {
        const file = fileInput.files[0];
        const key = keyInput.value;

        if (!file) {
            output.textContent = "No se ha seleccionado ningún archivo.";
            return;
        }

        if (key.length !== 8) {
            output.textContent = "La clave debe tener exactamente 8 caracteres.";
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const plaintext = e.target.result;
            // Realizar el cifrado DES aquí
            const ciphertext = "Cifrado DES: " + plaintext;
            output.textContent = ciphertext;
        };
        reader.readAsText(file);
    });

    decryptButton.addEventListener("click", function() {
        const file = fileInput.files[0];
        const key = keyInput.value;

        if (!file) {
            output.textContent = "No se ha seleccionado ningún archivo cifrado.";
            return;
        }

        if (key.length !== 8) {
            output.textContent = "La clave debe tener exactamente 8 caracteres.";
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const ciphertext = e.target.result;
            // Realizar el descifrado DES aquí
            const plaintext = "Descifrado DES: " + ciphertext;
            output.textContent = plaintext;
        };
        reader.readAsText(file);
    });
});
