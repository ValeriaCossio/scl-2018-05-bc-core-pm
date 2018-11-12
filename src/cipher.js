window.cipher = {
  encode: (string, offset) => {
    /* Acá va tu código */
    string = document.getElementById('ccText').value;
    offset = parseInt(document.getElementById('numerito').value);
    let letrasCifradas = '';
    for (let i = 0; i < string.length; i++) {
      const cipher = (string.toUpperCase().charCodeAt(i) - 65 + offset) % 26 + 65;
      const move = String.fromCharCode(cipher);
      letrasCifradas += move;
    }
    document.getElementById('cipherDecipher').innerHTML = letrasCifradas;
  },
  
  decode: (string, offset) => {
    /* Acá va tu código */
    string = document.getElementById('ddText').value;
    offset = parseInt(document.getElementById('numerito').value);
    let letrasDescifradas = '';
    for (let o = 0; o < string.length; o++) {
      const cipher = (string.toUpperCase().charCodeAt(o) + 65 - offset) % 26 + 65;
      const move = String.fromCharCode(cipher);
      letrasDescifradas += move;
    }
    document.getElementById('cipherDecipher').innerHTML = letrasDescifradas;
  } 
};