function selectColor(userColor) {
  const colors = ["Red", "Green", "Blue"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const result = document.getElementById("result");

  if (userColor === randomColor) {
    result.innerHTML = `✅ You Win! <br> Result: ${randomColor}`;
    result.style.color = "lightgreen";
  } else {
    result.innerHTML = `❌ You Lose! <br> Result: ${randomColor}`;
    result.style.color = "red";
  }
}
