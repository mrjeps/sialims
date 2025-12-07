const courses = {
  "web-dasar": {
    title: "Pemrograman Web Dasar (HTML & CSS)",
    teacher: "Nurul Hidayah, S.Kom.",
    duration: "12 jam",
    level: "Pemula",
    topics: "HTML, CSS, layout, responsive design",
    date: "10 Februari 2025",
    views: "2.400",
    rating: 4.8,
    video: "https://www.youtube.com/embed/pQN-pnXPaVg",
    desc: "Modul ini mengajarkan dasar-dasar pembuatan website menggunakan HTML dan CSS. Kamu akan belajar membuat struktur halaman, mengatur teks, gambar, hingga membangun layout responsif yang siap online.",
  },
  responsive: {
    title: "Responsive Web Design",
    teacher: "Randy Pratama",
    duration: "8 jam",
    level: "Pemula - Menengah",
    topics: "media query, flexbox, grid, mobile-first",
    date: "15 Februari 2025",
    views: "1.800",
    rating: 4.7,
    video: "https://www.youtube.com/embed/srvUrASNj0s",
    desc: "Pelajari teknik membuat tampilan website yang nyaman di semua ukuran layar. Dari smartphone kecil sampai monitor lebar, modul ini membahas konsep responsive layout dengan contoh langsung.",
  },
  "js-pemula": {
    title: "JavaScript untuk Pemula",
    teacher: "Budi Santoso",
    duration: "10 jam",
    level: "Menengah",
    topics: "variabel, function, DOM, event",
    date: "20 Februari 2025",
    views: "3.100",
    rating: 4.9,
    video: "https://www.youtube.com/embed/W6NZfCO5SIk",
    desc: "Masuk ke dunia JavaScript dan pelajari bagaimana membuat halaman web menjadi interaktif. Modul ini membahas dasar-dasar bahasa JavaScript dengan contoh yang mudah diikuti.",
  },
  "frontend-framework": {
    title: "Framework Frontend Modern",
    teacher: "Intan Puspa, M.Kom.",
    duration: "9 jam",
    level: "Menengah",
    topics: "komponen, state, SPA (konsep umum)",
    date: "5 Maret 2025",
    views: "1.200",
    rating: 4.6,
    video: "https://www.youtube.com/embed/SqcY0GlETPk",
    desc: "Kenali konsep dasar framework frontend modern seperti komponen, state management, dan single-page application. Modul ini membantu kamu memahami konsep inti sebelum memilih framework favoritmu.",
  },
  "git-github": {
    title: "Version Control dengan Git & GitHub",
    teacher: "Arief Nugraha",
    duration: "6 jam",
    level: "Semua level",
    topics: "git init, commit, branch, pull request",
    date: "28 Februari 2025",
    views: "980",
    rating: 4.8,
    video: "https://www.youtube.com/embed/8JJ101D3knE",
    desc: "Belajar mengelola kode dengan rapi menggunakan Git dan GitHub. Modul ini membahas alur kerja dasar mulai dari inisialisasi repository sampai kolaborasi tim menggunakan pull request.",
  },
  "sql-dasar": {
    title: "Database Dasar dengan SQL",
    teacher: "Dewi Kartika",
    duration: "7 jam",
    level: "Pemula",
    topics: "SELECT, JOIN, filter, agregasi",
    date: "3 Maret 2025",
    views: "1.500",
    rating: 4.7,
    video: "https://www.youtube.com/embed/HXV3zeQKqGY",
    desc: "Modul ini mengenalkan konsep database relasional dan bahasa SQL. Kamu akan belajar menulis query untuk mengambil, memfilter, dan menggabungkan data dari beberapa tabel.",
  },
};

const params = new URLSearchParams(window.location.search);
const courseId = params.get("course") || "web-dasar";
const data = courses[courseId] || courses["web-dasar"];

document.getElementById("course-title").textContent = data.title;
document.getElementById("crumb-title").textContent = data.title;
document.getElementById("course-teacher").textContent = data.teacher;
document.getElementById("course-duration").textContent = data.duration;
document.getElementById("course-level").textContent = data.level;
document.getElementById("course-topics").textContent = data.topics;
document.getElementById("course-date").textContent = data.date;
document.getElementById("course-views").textContent = data.views;
document.getElementById("course-desc").textContent = data.desc;
document.getElementById("course-video").src = data.video;

const ratingStars = document.getElementById("rating-stars");
const ratingText = document.getElementById("rating-text");
const fullStars = Math.round(data.rating);
ratingStars.innerHTML = "★".repeat(fullStars) + "☆".repeat(5 - fullStars);
ratingStars.className = "star";
ratingText.textContent = data.rating.toFixed(1) + " / 5.0";

function addComment(e) {
  e.preventDefault();
  const input = document.getElementById("comment");
  const text = input.value.trim();
  if (!text) return;
  const list = document.getElementById("comment-list");
  const li = document.createElement("li");
  li.innerHTML = "<strong>Kamu:</strong> " + text;
  list.appendChild(li);
  input.value = "";
}
window.addComment = addComment;
