// Add event listeners for collapse animation
document.addEventListener("DOMContentLoaded", function () {
  const collapseElements = document.querySelectorAll(
    '[data-bs-toggle="collapse"]'
  );

  collapseElements.forEach(function (element) {
    const target = document.querySelector(element.dataset.bsTarget);
    const icon = element.querySelector(".collapse-icon");

    target.addEventListener("shown.bs.collapse", function () {
      icon.style.transform = "rotate(180deg)";
    });

    target.addEventListener("hidden.bs.collapse", function () {
      icon.style.transform = "rotate(0deg)";
    });
  });
});
// Data sertifikat - sesuaikan dengan sertifikat asli Anda
const certificates = [
  {
    title:
      "Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar (LKMM-TD) 2023",
    image: "img/sertifikat/2.jpeg",
    description:
      "Sertifikat Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar (LKMM-TD) 2023 yang diselenggarakan oleh HIMATIKA FMIPA UNESA.",
  },
  {
    title: "Pendidikan dan Pelatihan Kewirausahaan 2024",
    image: "img/sertifikat/3.jpeg",
    description:
      "Sertifikat Latihan Pendidikan dan Pelatihan Kewirausahaan 2024 yang diselenggarakan oleh FORMADIKSI UNESA.",
  },
  {
    title: "Tryout and Talkshow 2024",
    image: "img/sertifikat/4.jpeg",
    description:
      "Sertifikat Panitia Tryout and Talkshow 2024 yang diselenggarakan oleh Forum Komunikasi Mahasiswa Bojonegoro.",
  },
  {
    title: "Children Coloring Competition 2024",
    image: "img/sertifikat/5.jpeg",
    description:
      "Children Coloring Competition 2024 yang diselenggarakan oleh Forum Komunikasi Mahasiswa Bojonegoro.",
  },
  {
    title: "Attanwir Education Festival 2024",
    image: "img/sertifikat/6.jpeg",
    description:
      "Sertifikat Panitia Attanwir Education Festival 2024 yang diselenggarakan oleh IKAMI Attanwir.",
  },
  {
    title: "FKMB Mengajar 2024",
    image: "img/sertifikat/7.jpeg",
    description:
      "FKMB Mengajar 2024 yang diselenggarakan oleh Forum Komunikasi Mahasiswa Bojonegoro.",
  },
  {
    title: "Fest Goworld Asia Futurepreneur Selection Program 2024",
    image: "img/sertifikat/8.jpeg",
    description:
      "Sertifikat Fest Goworld Asia Futurepreneur Selection Program 2024 yang diselenggarakan oleh FEST Goword dengan BEM UNESA di Airlangga Convention Center UNAIR.",
  },
  {
    title: "Sertifikat Pengabdian Masyarakat 2024",
    image: "img/sertifikat/9.jpeg",
    description:
      "Sertifikat Panitia Pengabdian Masyarakat 2024 yang diselenggarakan oleh Forum Komunikasi Mahasiswa Bojonegoro.",
  },
  {
    title: "Webinar Self Development Program 2024",
    image: "img/sertifikat/10.jpeg",
    description:
      "Sertifikat Webinar Self Development Program 2024 yang diselenggarakan oleh FEST Management.",
  },
  {
    title: "Pelatihan Entrepreneurship 2024",
    image: "img/sertifikat/11.jpeg",
    description:
      "Sertifikat Pelatihan Entrepreneurship 2024 yang diselenggarakan oleh FESt Regional Surabaya dengan BEM UNESA.",
  },
  {
    title: "MCR and LRP 2024",
    image: "img/sertifikat/13.jpeg",
    description:
      "MCR and LRP 2024 yang diselenggarakan oleh HIMADIKMA dan HIMATIKA FMIPA UNESA.",
  },
  {
    title: "Future Entrepreneur Summit Surabaya 2024",
    image: "img/sertifikat/14.jpeg",
    description:
      "Sertifikat Future Entrepreneur Summit Surabaya 2024 yang diselenggarakan oleh FESt Regional Surabaya dengan BEM UNESA.",
  },
  {
    title: "Training Public Speaking 2024",
    image: "img/sertifikat/15.jpeg",
    description:
      "Sertifikat Training Public Speaking 2024 yang diselenggarakan oleh FESt Regional Surabaya dengan BEM UNESA.",
  },
  {
    title: "Tryout and Talkshow 2025",
    image: "img/sertifikat/12.jpeg",
    description:
      "Sertifikat Panitia Tryout and Talkshow 2025 yang diselenggarakan oleh Forum Komunikasi Mahasiswa Bojonegoro.",
  },
  {
    title: "Pelatihan Desain 2025",
    image: "img/sertifikat/1.jpeg",
    description:
      "Sertifikat Pelatihan Desain 2025 yang diselenggarakan oleh Forum Komunikasi Mahasiswa Bojonegoro.",
  },
];

let currentSlide = 0;
let autoplayInterval;

// Inisialisasi carousel
function initCarousel() {
  const contentDiv = document.querySelector(".certificate-content");
  const indicatorsDiv = document.querySelector(".certificate-indicators");

  // Buat slides
  certificates.forEach((cert, index) => {
    const slide = document.createElement("div");
    slide.className = `certificate-slide ${index === 0 ? "active" : ""}`;
    slide.innerHTML = `<img src="${cert.image}" alt="${cert.title}" loading="lazy">`;
    contentDiv.appendChild(slide);
  });

  // Buat indicators
  certificates.forEach((cert, index) => {
    const indicator = document.createElement("div");
    indicator.className = `indicator ${index === 0 ? "active" : ""}`;
    indicator.onclick = () => goToSlide(index);
    indicatorsDiv.appendChild(indicator);
  });

  updateInfo();
}

function changeSlide(direction) {
  const slides = document.querySelectorAll(".certificate-slide");
  const indicators = document.querySelectorAll(".indicator");

  // Hapus class active dari slide dan indicator saat ini
  slides[currentSlide].classList.remove("active");
  indicators[currentSlide].classList.remove("active");

  // Hitung index slide baru
  currentSlide += direction;

  // Wrap around jika perlu
  if (currentSlide >= certificates.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = certificates.length - 1;
  }

  // Tambah class active ke slide dan indicator baru
  slides[currentSlide].classList.add("active");
  indicators[currentSlide].classList.add("active");

  updateInfo();
  resetAutoplay();
}

function goToSlide(index) {
  const slides = document.querySelectorAll(".certificate-slide");
  const indicators = document.querySelectorAll(".indicator");

  // Hapus class active dari slide dan indicator saat ini
  slides[currentSlide].classList.remove("active");
  indicators[currentSlide].classList.remove("active");

  // Set index slide baru
  currentSlide = index;

  // Tambah class active ke slide dan indicator baru
  slides[currentSlide].classList.add("active");
  indicators[currentSlide].classList.add("active");

  updateInfo();
  resetAutoplay();
}

function updateInfo() {
  document.getElementById("current-slide").textContent = currentSlide + 1;
  document.getElementById("certificate-title").textContent =
    certificates[currentSlide].title;
  document.getElementById("certificate-description").textContent =
    certificates[currentSlide].description;
}

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    changeSlide(1);
  }, 5000); // Ganti slide setiap 5 detik
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

function resetAutoplay() {
  stopAutoplay();
  startAutoplay();
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  initCarousel();
  startAutoplay();
});

// Pause autoplay saat hover
const carousel = document.querySelector(".certificate-display");
carousel.addEventListener("mouseenter", stopAutoplay);
carousel.addEventListener("mouseleave", startAutoplay);

// Navigasi keyboard
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    changeSlide(-1);
  } else if (e.key === "ArrowRight") {
    changeSlide(1);
  }
});

// Touch/swipe support untuk mobile
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

carousel.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX < touchStartX - 50) {
    changeSlide(1); // Swipe left, next slide
  }
  if (touchEndX > touchStartX + 50) {
    changeSlide(-1); // Swipe right, previous slide
  }
}
