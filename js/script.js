// Greeting
const greeting = document.getElementById("greeting");
const userName = prompt("Masukkan nama Anda:");
if (userName) {
  greeting.textContent = `Hi ${userName}, Welcome To RevoU`;
}

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("messageText").value.trim();
  const resultBox = document.getElementById("resultBox");

  if (!name || !email || !phone || !message) {
    alert("Semua field wajib diisi!");
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert("Email tidak valid!");
    return;
  }
  if (!/^[0-9]+$/.test(phone)) {
    alert("Nomor telepon hanya angka!");
    return;
  }

  resultBox.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  document.getElementById("contactForm").reset();
});

// Fade-in on Scroll
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

fadeElements.forEach((el) => observer.observe(el));
