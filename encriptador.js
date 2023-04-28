const btnEncrypted = document.getElementById('encriptar');
const btnDecrypted = document.getElementById('desencriptar');
const inptTxtArea = document.getElementById('text');
const outtTextArea = document.getElementById('outtTextArea');
const copyR = document.getElementById('copyR');

const keysEncoded = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
};

btnEncrypted.addEventListener('click', encryptText);
btnDecrypted.addEventListener('click', decryptText);

function encryptText() {
  const text = inptTxtArea.value;
  let encryptedText = text;
  for (const key in keysEncoded) {
    const regex = new RegExp(key, 'g');
    encryptedText = encryptedText.replace(regex, keysEncoded[key]);
  }
  outtTextArea.value = encryptedText;
}

function decryptText() {
  const text = inptTxtArea.value;
  let decryptedText = text;
  for (const key in keysEncoded) {
    const regex = new RegExp(keysEncoded[key], 'g');
    decryptedText = decryptedText.replace(regex, key);
  }
  outtTextArea.value = decryptedText;
}