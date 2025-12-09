const ebooks = {
  "ebook-htmlcss": {
    title: "Panduan Lengkap HTML & CSS",
    author: "SIALIMS Studio",
    date: "12 Februari 2025",
    category: "Pemrograman Web Dasar",
    views: "2.800",
    downloads: "1.200",
    cover:
      "<div class='ebook-cover-two'><i class='fa-solid fa-book-open'></i></div>",
    unduh:
      "<a href='#' class='btn-primary' target='_blank' rel='noopener'><i class='fa-solid fa-download'></i> Download E-Book <a>",
    description:
      "E-book ini membahas dasar-dasar pembuatan halaman web menggunakan HTML dan CSS. Mulai dari struktur dokumen, layout modern, hingga tips membuat tampilan yang responsif dan mobile-friendly.",
  },
  "ebook-js-project": {
    title: "Pemrograman Dasar JavaScript",
    author: "Rahmat Fauzi, ST.,MT",
    date: "8 Maret 2025",
    category: "JavaScript",
    views: "2.100",
    downloads: "980",
    cover:
      "<div class='ebook-cover'><img src='assets/images/cover/cover_ebook_javascript.png' width='300' style='border-radius:8px;' /></div>",
    unduh:
      "<a href='assets/pdfs/ebook/Pemrograman_Dasar_Javascript.pdf' class='btn-primary' target='_blank' rel='noopener'><i class='fa-solid fa-download'></i> Download E-Book <a>",
    description:
      "Berisi kumpulan mini-project JavaScript seperti to-do list, kalkulator, dan aplikasi cuaca. Cocok untuk kamu yang sudah mengenal dasar JavaScript dan ingin naik level dengan membangun proyek nyata.",
  },
  "ebook-uiux": {
    title: "Desain UI/UX untuk Website Modern",
    author: "Pixel Craft",
    date: "25 Januari 2025",
    category: "UI/UX Design",
    views: "1.600",
    downloads: "730",
    cover:
      "<div class='ebook-cover-two'><i class='fa-solid fa-book-open'></i></div>",
    unduh:
      "<a href='#' class='btn-primary' target='_blank' rel='noopener'><i class='fa-solid fa-download'></i> Download E-Book <a>",
    description:
      "Pelajari prinsip desain antarmuka dan pengalaman pengguna untuk membuat website yang tidak hanya cantik, tetapi juga nyaman digunakan. Disertai contoh wireframe dan tips praktik terbaik.",
  },
  "ebook-programming": {
    title: "Web Programming I",
    author: "Maruloh, M.Kom",
    date: "5 Februari 2025",
    category: "Programming",
    views: "1.300",
    downloads: "640",
    cover:
      "<div class='ebook-cover'><img src='assets/images/cover/cover_ebook_web_programming_1.png' width='300' style='border-radius:8px;' /></div>",
    unduh:
      "<a href='assets/pdfs/ebook/Modul_Web_Programming_I.pdf' class='btn-primary' target='_blank' rel='noopener'><i class='fa-solid fa-download'></i> Download E-Book <a>",
    description:
      "Mengulas konsep web programming tingkat I, struktur data sederhana, serta contoh penerapannya dalam bahasa pemrograman populer. Cocok sebagai bahan pengantar bagi mahasiswa atau pemula.",
  },
  "ebook-data-mining": {
    title: "Data Mining untuk Pemula",
    author: "Data Asia Insight",
    date: "30 Januari 2025",
    category: "Data Mining",
    views: "1.100",
    downloads: "520",
    cover:
      "<div class='ebook-cover-two'><i class='fa-solid fa-book-open'></i></div>",
    unduh:
      "<a href='#' class='btn-primary' target='_blank' rel='noopener'><i class='fa-solid fa-download'></i> Download E-Book <a>",
    description:
      "Mengenalkan konsep data mining, CRISP-DM, serta contoh studi kasus sederhana. Sangat membantu bagi yang ingin memahami proses pengolahan data menjadi insight yang bermanfaat.",
  },
  "ebook-iot": {
    title: "Internet of Things Dasar untuk Web",
    author: "IoT Nusantara",
    date: "18 Maret 2025",
    category: "Internet of Things",
    views: "980",
    downloads: "410",
    cover:
      "<div class='ebook-cover-two'><i class='fa-solid fa-book-open'></i></div>",
    unduh:
      "<a href='#' class='btn-primary' target='_blank' rel='noopener'><i class='fa-solid fa-download'></i> Download E-Book <a>",
    description:
      "Membahas konsep dasar Internet of Things dan bagaimana mengintegrasikan perangkat IoT dengan aplikasi web. Disertai contoh arsitektur sederhana dan skenario penggunaan di dunia nyata.",
  },
};

const params = new URLSearchParams(window.location.search);
const bookId = params.get("book") || "ebook-htmlcss";
const data = ebooks[bookId] || ebooks["ebook-htmlcss"];

document.getElementById("ebook-title").textContent = data.title;
document.getElementById("crumb-title").textContent = data.title;
document.getElementById("ebook-author").textContent = data.author;
document.getElementById("ebook-date").textContent = data.date;
document.getElementById("ebook-category").textContent = data.category;
document.getElementById("ebook-views").textContent = data.views;
document.getElementById("ebook-downloads").textContent = data.downloads;
document.getElementById("ebook-description").textContent = data.description;
document.getElementById("cover-book").innerHTML = data.cover;
document.getElementById("ebook-download").innerHTML = data.unduh;
