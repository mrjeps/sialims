// Cek kombinasi password
const passwordInput = document.getElementById("password");
const checklistItems = document.querySelectorAll("#passwordChecklist li");
const meter1 = document.getElementById("meter1");
const meter2 = document.getElementById("meter2");
const meter3 = document.getElementById("meter3");

function updateChecklist() {
  const value = passwordInput.value;

  const checks = {
    length: value.length >= 8,
    uppercase: /[A-Z]/.test(value),
    lowercase: /[a-z]/.test(value),
    number: /[0-9]/.test(value),
    symbol: /[^A-Za-z0-9]/.test(value),
  };

  let score = 0;

  checklistItems.forEach((item) => {
    const key = item.getAttribute("data-check");
    const valid = checks[key];

    if (valid) {
      item.classList.remove("invalid");
      item.classList.add("valid");
      item.querySelector("i").className = "fa-solid fa-circle-check";
      score++;
    } else {
      item.classList.remove("valid");
      item.classList.add("invalid");
      item.querySelector("i").className = "fa-solid fa-circle-xmark";
    }
  });

  // Reset meter
  [meter1, meter2, meter3].forEach((bar) => {
    bar.className = "meter-bar";
  });

  if (score === 0) return;

  // Weak
  if (score >= 2) {
    meter1.classList.add("active-weak");
  }

  // Medium
  if (score >= 3) {
    meter2.classList.add("active-medium");
  }

  // Strong
  if (score >= 4) {
    meter3.classList.add("active-strong");
  }
}

passwordInput.addEventListener("input", updateChecklist);

// (Opsional) cegah submit kalau password belum kuat
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    const validItems = document.querySelectorAll(
      "#passwordChecklist li.valid"
    ).length;
    if (validItems < 4) {
      e.preventDefault();
      alert(
        "Password belum cukup kuat. Pastikan semua kriteria hampir tercentang hijau ya. 😊"
      );
    }
  });
