const input = document.getElementById("userInput");
const button = document.getElementById("submitButton");
const status = document.getElementById("statusMessage");

// 入力内容があるときだけボタンを有効化
input.addEventListener("input", () => {
  button.disabled = input.value.trim() === "";
});

// ボタンクリック時の処理
button.addEventListener("click", () => {
  status.textContent = "送信中...";

  // ボタンと入力を一時的に無効化
  button.disabled = true;
  input.disabled = true;

  setTimeout(() => {
    status.textContent = "通信に失敗しました…";

    // 再び入力可能にする
    button.disabled = false;
    input.disabled = false;
  }, 3000); // 3秒後に失敗表示
});
