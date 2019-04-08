window.cipher = {
  encode: (string, offset) => {
    string = document.getElementById('cipher-decipher').value;
    offset = parseInt(document.getElementById('offset').value);
    let letrasCifradas = '';
    for (let i = 0; i < string.length; i++) {
      const cipher = (string.toUpperCase().charCodeAt(i) - 65 + offset) % 26 + 65;
      const move = String.fromCharCode(cipher);
      letrasCifradas += move;
    }
    document.getElementById('result').innerHTML = letrasCifradas;
  },
  
  decode: (string, offset) => {
    string = document.getElementById('cipher-decipher').value;
    offset = parseInt(document.getElementById('offset').value);
    let letrasDescifradas = '';
    for (let o = 0; o < string.length; o++) {
      const cipher = (string.toUpperCase().charCodeAt(o) + 65 - offset) % 26 + 65;
      const move = String.fromCharCode(cipher);
      letrasDescifradas += move;
    }
    document.getElementById('result').innerHTML = letrasDescifradas;
  }
};

