// ambil semua section yang punya id
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const header = document.querySelector("header"); // kalau header kamu pakai <header>

function onScroll() {
  const headerHeight = header ? header.offsetHeight : 0;
  // posisi scroll + tinggi header sedikit buffer
  const scrollPos = window.scrollY + headerHeight + 10;

  let currentId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute("href"); // misal "#tentang"
    link.classList.toggle("active", href === `#${currentId}`);
  });
}

// supaya pas klik menu langsung aktif juga
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

window.addEventListener("scroll", onScroll);
// pas reload langsung cek
onScroll();
