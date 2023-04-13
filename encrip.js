let input = document.getElementById("input-text");
let showText = document.getElementById("show-text");
let btnEncrypt = document.querySelector("#btnEncrypt");
let btnDecrypt = document.querySelector("#btnDecrypt");
let imgContainer = document.querySelector(".image-container");
let btnCopy = document.querySelector("#btnCopy");


const encrypt = () => {
  input.value == "" ? null : imgContainer.style.display = 'none';
  input.value == "" ? null : btnCopy.style.display = 'block';
  let originalText = input.value.toLowerCase();
  let encryptedText = originalText.replace(/[aeiou]/g, encrypt => {
    switch (encrypt) {
      case "a":
        return "ai";
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "o":
        return "ober";
      case "u":
        return "ufat";
      default:
        return encrypt;
    }
  });

  showText.value = encryptedText;
}

const decrypt = () => {
  input.value == "" ? null : imgContainer.style.display = 'none';
  input.value == "" ? null : btnCopy.style.display = 'block';
  let encryptedText = input.value.toLowerCase();
  let originalText = encryptedText.replace(/(ai|enter|imes|ober|ufat)/g, decrypt => {
    switch (decrypt) {
      case "ai":
        return "a";
      case "enter":
        return "e";
      case "imes":
        return "i";
      case "ober":
        return "o";
      case "ufat":
        return "u";
    }
  });

  showText.value = originalText;
}

btnEncrypt.onclick = encrypt;
btnDecrypt.onclick = decrypt;

const copyText = () => {
  const textToCopy = showText.value;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      console.log('Copiado');
      showPopup('¡Texto copiado!');
    })
    .catch(err => {
      console.error('No se pudo copiar el texto:', err);
    });
};

const showPopup = (message) => {
  const popup = document.createElement('div');
  popup.textContent = message;
  popup.classList.add('popup');
  document.body.appendChild(popup);
  setTimeout(() => {
    popup.classList.remove('popup');
    setTimeout(() => {
      popup.remove();
    }, 300);
  }, 2000);
};

btnCopy.addEventListener('click', copyText);