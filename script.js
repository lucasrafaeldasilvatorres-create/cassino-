let saldo = 100;

function jogar() {
  if (saldo <= 0) {
    document.getElementById("resultado").innerText = "Você perdeu tudo!";
    return;
  }

  saldo--;

  let numero = Math.floor(Math.random() * 5);

  if (numero === 0) {
    saldo += 5;
    document.getElementById("resultado").innerText = "🎉 Você ganhou!";
  } else {
    document.getElementById("resultado").innerText = "😢 Você perdeu!";
  }

  document.getElementById("saldo").innerText = "Saldo: " + saldo;
}