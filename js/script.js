/* =========================================================
   WORLD TOUR EXPO — FLYER CONFIGURATION
   Add, remove, or reorder flyer objects in the `flyers` array.
   - image: original/high-resolution file used in the preview/download
   - thumbnail: smaller image used on the gallery card (optional)
   - destination: used for the category label and filters
   - filename: preferred download name, including extension
   Replace the sample objects below with your real flyer files.
   ========================================================= */

   const flyers = [
  {
    id: 1,
    title: "5D4N TOKYO-OSAKA JAPAN",
    duration: 5,
    destination: "Asia",
    image: "images/flyers/5D4N-TOKYO-OSAKA.jpg",
    thumbnail: "images/flyers/5D4N-TOKYO-OSAKA.jpg",
    filename: "5D4N-TOKYO-OSAKA.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 2,
    title: "7D6N Christmas Hongkong",
    duration: 7,
    destination: "Asia",
    image: "images/flyers/7D6N-HK-IBER.jpg",
    thumbnail: "images/flyers/7D6N-HK-IBER.jpg",
    filename: "7D6N-HK-IBER.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 3,
    title: "9D8N FAIRYTALE EUROPE",
    duration: 9,
    destination: "Europe",
    image: "images/flyers/9D8N-FAIRYTALE-EUROPE-R-US-TOUR.jpg",
    thumbnail: "images/flyers/9D8N-FAIRYTALE-EUROPE-R-US-TOUR.jpg",
    filename: "9D8N-FAIRYTALE-EUROPE-R-US-TOUR.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 4,
    title: "10D9N CHRISTMAS TURKIYE TIMELESS",
    duration: 10,
    destination: "Europe",
    image: "images/flyers/10D9N-CHRISTMAS-TURKIYE-TIMELESS.jpg",
    thumbnail: "images/flyers/10D9N-CHRISTMAS-TURKIYE-TIMELESS.jpg",
    filename: "10D9N-CHRISTMAS-TURKIYE-TIMELESS.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 5,
    title: "10D9N TURKIYE TIMELESS",
    duration: 10,
    destination: "Europe",
    image: "images/flyers/10D9N-TURKIYE-TIMELESS.jpg",
    thumbnail: "images/flyers/10D9N-TURKIYE-TIMELESS.jpg",
    filename: "10D9N-TURKIYE-TIMELESS.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 6,
    title: "12D11N BALKAN PENINSULA",
    duration: 12,
    destination: "Europe",
    image: "images/flyers/12D11N-BALKAN-PENINSULA-R-US-TOUR.jpg",
    thumbnail: "images/flyers/12D11N-BALKAN-PENINSULA-R-US-TOUR.jpg",
    filename: "12D11N-BALKAN-PENINSULA-R-US-TOUR.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 7,
    title: "15D14N EASTER EUROPE",
    duration: 15,
    destination: "Europe",
    image: "images/flyers/15D14N-EASTER-EUROPE-R-US-TOUR.jpg",
    thumbnail: "images/flyers/15D14N-EASTER-EUROPE-R-US-TOUR.jpg",
    filename: "15D14N-EASTER-EUROPE-R-US-TOUR.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 8,
    title: "15D14N ROTARY IN SPAIN",
    duration: 15,
    destination: "Europe",
    image: "images/flyers/15D14N-ROTARY-IN-SPAIN-R-US-TOUR.jpg",
    thumbnail: "images/flyers/15D14N-ROTARY-IN-SPAIN-R-US-TOUR.jpg",
    filename: "15D14N-ROTARY-IN-SPAIN-R-US-TOUR.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 9,
    title: "16D15N 10in1 EUROPE",
    duration: 16,
    destination: "Europe",
    image: "images/flyers/16D15N-10in1-EUROPE-R-US-TOUR.jpg",
    thumbnail: "images/flyers/16D15N-10in1-EUROPE-R-US-TOUR.jpg",
    filename: "16D15N-10in1-EUROPE-R-US-TOUR.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 10,
    title: "17D16N BALKAN PENINSULA",
    duration: 17,
    destination: "Europe",
    image: "images/flyers/17D16N-BALKAN-PENINSULA-R-US-TOUR.jpg",
    thumbnail: "images/flyers/17D16N-BALKAN-PENINSULA-R-US-TOUR.jpg",
    filename: "17D16N-BALKAN-PENINSULA-R-US-TOUR.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 11,
    title: "18D17N MARIAN PILGRIMAGE",
    duration: 18,
    destination: "Europe",
    image: "images/flyers/18D17N-MARIAN-PILGRIMAGE-R-US-TOUR.jpg",
    thumbnail: "images/flyers/18D17N-MARIAN-PILGRIMAGE-R-US-TOUR.jpg",
    filename: "18D17N-MARIAN-PILGRIMAGE-R-US-TOUR.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 12,
    title: "5D4N KOREA AUTUMN",
    duration: 5,
    destination: "Asia",
    image: "images/flyers/KOREA-AUTUMN.jpg",
    thumbnail: "images/flyers/KOREA-AUTUMN.jpg",
    filename: "KOREA-AUTUMN.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 13,
    title: "5D4N KOREA SPRING",
    duration: 5,
    destination: "Asia",
    image: "images/flyers/KOREA-SPRING.jpg",
    thumbnail: "images/flyers/KOREA-SPRING.jpg",
    filename: "KOREA-SPRING.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 14,
    title: "5D4N KOREA WINTER",
    duration: 5,
    destination: "Asia",
    image: "images/flyers/KOREA-WINTER.jpg",
    thumbnail: "images/flyers/KOREA-WINTER.jpg",
    filename: "KOREA-WINTER.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 15,
    title: "3D2N MALAYSIA",
    duration: 3,
    destination: "Asia",
    image: "images/flyers/3D2N-MALAYSIA.jpg",
    thumbnail: "images/flyers/3D2N-MALAYSIA.jpg",
    filename: "3D2N Malaysia.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 16,
    title: "3D3N HONGKONG FREE CITY",
    duration: 3,
    destination: "Asia",
    image: "images/flyers/3D3N-HK-FREE-CITY.jpg",
    thumbnail: "images/flyers/3D3N-HK-FREE-CITY.jpg",
    filename: "3D2N Hongkong free city.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 17,
    title: "3D3N HONGKONG FREE DISNEY",
    duration: 3,
    destination: "Asia",
    image: "images/flyers/3D3N-HK-FREE-DISNEY.jpg",
    thumbnail: "images/flyers/3D3N-HK-FREE-DISNEY.jpg",
    filename: "3D3N Hongkong Disneyland.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 18,
    title: "3D3N HONGKONG FREE OCEAN PARK",
    duration: 3,
    destination: "Asia",
    image: "images/flyers/3D3N-HK-FREE-OP.jpg",
    thumbnail: "images/flyers/3D3N-HK-FREE-OP.jpg",
    filename: "3D2N Hongkong op.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 20,
    title: "4D3N 4 CITIES HONGKONG",
    duration: 4,
    destination: "Asia",
    image: "images/flyers/4D3N-4-CITIES-HK-GOLDEN-FUN.jpg",
    thumbnail: "images/flyers/4D3N-4-CITIES-HK-GOLDEN-FUN.jpg",
    filename: "4D3N 4 CITIES.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 19,
    title: "3D3N SINGAPORE",
    duration: 3,
    destination: "Asia",
    image: "images/flyers/3D3N-SINGAPORE.jpg",
    thumbnail: "images/flyers/3D3N-SINGAPORE.jpg",
    filename: "3D3N SINGAPORE.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 21,
    title: "4D3N AMAZING THAILAND",
    duration: 4,
    destination: "Asia",
    image: "images/flyers/4D3N-AMAZING-THAILAND-JUAN-WORLD.jpg",
    thumbnail: "images/flyers/4D3N-AMAZING-THAILAND-JUAN-WORLD.jpg",
    filename: "4D3N-AMAZING-THAILAND-JUAN-WORLD.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 23,
    title: "4D3N AVATAR ZHANGJIAJIE CHINA",
    duration: 4,
    destination: "Asia",
    image: "images/flyers/4D3N-AVATAR-ZHANGJIAJIE-CHINA-DREAM.jpg",
    thumbnail: "images/flyers/4D3N-AVATAR-ZHANGJIAJIE-CHINA-DREAM.jpg",
    filename: "4D3N-AVATAR-ZHANGJIAJIE-CHINA-DREAM.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 24,
    title: "4D3N BUSAN WINTER",
    duration: 4,
    destination: "Asia",
    image: "images/flyers/4D3N-BUSAN-WINTER-AIR-MAC.jpg",
    thumbnail: "images/flyers/4D3N-BUSAN-WINTER-AIR-MAC.jpg",
    filename: "4D3N-BUSAN-WINTER-AIR-MAC.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 25,
    title: "4D3N DANANG BANA-HILLS HOI-AN RESTOUR",
    duration: 4,
    destination: "Asia",
    image: "images/flyers/4D3N-DANANG-BANA-HILLS-HOI-AN-RESTOUR.jpg",
    thumbnail: "images/flyers/4D3N-DANANG-BANA-HILLS-HOI-AN-RESTOUR.jpg",
    filename: "4D3N-DANANG-BANA-HILLS-HOI-AN-RESTOUR.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 26,
    title: "4D3N DANANG BANA-HILLS HOI-AN",
    duration: 4,
    destination: "Asia",
    image: "images/flyers/4D3N-DANANG-BANA-HILLS-HOI-AN-PDA-PASAY.jpg",
    thumbnail: "images/flyers/4D3N-DANANG-BANA-HILLS-HOI-AN-PDA-PASAY.jpg",
    filename: "4D3N-DANANG-BANA-HILLS-HOI-AN-PDA-PASAY.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 27,
    title: "4D3N HANOI + SAPA + FANSIPAN",
    duration: 4,
    destination: "Asia",
    image: "images/flyers/4D3N-HANOI+SAPA+FANSIPAN-RESTOUR.jpg",
    thumbnail: "images/flyers/4D3N-HANOI+SAPA+FANSIPAN-RESTOUR.jpg",
    filename: "4D3N-HANOI+SAPA+FANSIPAN-RESTOUR.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 28,
    title: "4D3N HONGKONG MACAU PACKAGE",
    duration: 4,
    destination: "Asia",
    image: "images/flyers/4D3N-HONGKONG-MACAU-PACKAGE.jpg",
    thumbnail: "images/flyers/4D3N-HONGKONG-MACAU-PACKAGE.jpg",
    filename: "4D3N-HONGKONG-MACAU-PACKAGE.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 29,
    title: "5D4N AVATAR FENGHUANG CHINA DREAM",
    duration: 5,
    destination: "Asia",
    image: "images/flyers/5D4N-AVATAR-FENGHUANG-CHINA-DREAM.jpg",
    thumbnail: "images/flyers/5D4N-AVATAR-FENGHUANG-CHINA-DREAM.jpg",
    filename: "5D4N-AVATAR-FENGHUANG-CHINA-DREAM.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 30,
    title: "5D3N HANGZHOU SHANGHAI CHINA DREAM",
    duration: 5,
    destination: "Asia",
    image: "images/flyers/5D3N-HANGZHOU-SHANGHAI-CHINA-DREAM.jpg",
    thumbnail: "images/flyers/5D3N-HANGZHOU-SHANGHAI-CHINA-DREAM.jpg",
    filename: "5D3N-HANGZHOU-SHANGHAI-CHINA-DREAM.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 31,
    title: "5D4N CHRISTMAS IN BEIJING",
    duration: 4,
    destination: "Asia",
    image: "images/flyers/5D4N-CHRISTMAS-IN-BEIJING-GOLDEN-FUN.jpg",
    thumbnail: "images/flyers/5D4N-CHRISTMAS-IN-BEIJING-GOLDEN-FUN.jpg",
    filename: "5D3N-HANGZHOU-SHANGHAI-CHINA-DREAM.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 32,
    title: "5D4N JEJU0 ISLAND 2026",
    duration: 5,
    destination: "Asia",
    image: "images/flyers/5D4N-JEJU0-ISLAND-2026-RAKSO.jpg",
    thumbnail: "images/flyers/5D4N-JEJU0-ISLAND-2026-RAKSO.jpg",
    filename: "5D4N-JEJU0-ISLAND-2026-RAKSO.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 33,
    title: "5D4N-KOREA-SUMMER",
    duration: 5,
    destination: "Asia",
    image: "images/flyers/5D4N-KOREA-SUMMER.jpg",
    thumbnail: "images/flyers/5D4N-KOREA-SUMMER.jpg",
    filename: "5D4N-KOREA-SUMMER.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 34,
    title: "5D4N SHANGHAI CHRISTMAS",
    duration: 5,
    destination: "Asia",
    image: "images/flyers/5D4N-SHANGHAI-CHRISTMAS-GOLDEN-FUN.jpg",
    thumbnail: "images/flyers/5D4N-SHANGHAI-CHRISTMAS-GOLDEN-FUN.jpg",
    filename: "5D4N-SHANGHAI-CHRISTMAS-GOLDEN-FUN.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 35,
    title: "5D4N SHANGHAI DISNEYLAND MINI KYOT",
    duration: 5,
    destination: "Asia",
    image: "images/flyers/5D4N-SHANGHAI-DISNEYLAND-MINI-KYOT-GOLDEN-FUN.jpg",
    thumbnail: "images/flyers/5D4N-SHANGHAI-DISNEYLAND-MINI-KYOT-GOLDEN-FUN.jpg",
    filename: "5D4N-SHANGHAI-DISNEYLAND-MINI-KYOT-GOLDEN-FUN.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 22,
    title: "5D4N TOKYO JAPAN",
    duration: 5,
    destination: "Asia",
    image: "images/flyers/5D4N-TOKYO-JAPAN.jpg",
    thumbnail: "images/flyers/5D4N-TOKYO-JAPAN.jpg",
    filename: "5D4N-TOKYO-JAPAN.jpg",
    description: "Ill do this on my own.."
  },

  
  
];

const splash = document.querySelector("#splash");
const siteShell = document.querySelector("#site-shell");
const flyerGrid = document.querySelector("#flyer-grid");
const flyerCount = document.querySelector("#flyer-count");
const dayFilter = document.querySelector("#day-filter");
const emptyState = document.querySelector("#empty-state");
const modal = document.querySelector("#flyer-modal");
const modalImage = document.querySelector("#modal-image");
const modalImageWrap = document.querySelector("#modal-image-wrap");
const modalFallback = document.querySelector("#modal-fallback");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const zoomToggle = document.querySelector("#zoom-toggle");
const downloadButton = document.querySelector("#download-button");
const toast = document.querySelector("#toast");

let activeFlyer = null;
let previousFocus = null;
let toastTimer = null;
let currentFilter = "all";
let currentDayFilter = "all";
let zoomScale = 1;
let zoomX = 0;
let zoomY = 0;
let lastTap = null;
let suppressTap = false;
let gestureMoved = false;
const activePointers = new Map();
let gestureStart = null;

const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
}[char]));

function normalizeDestination(destination = "") {
  const value = destination.toLowerCase();
  if (value.includes("asia") || ["japan", "vietnam", "korea", "china", "thailand", "singapore"].includes(value)) return "Asia";
  if (value.includes("europe")) return "Europe";
  return "Other";
}

function formatFlyerTitle(title = "Travel flyer") {
  return String(title).toLowerCase()
    .replace(/\b[a-z]/g, (letter) => letter.toUpperCase())
    .replace(/\b\d+d\d+n\b/gi, (duration) => duration.toUpperCase());
}

function getFlyerDescription(flyer) {
  if (flyer.description && flyer.description !== "Ill do this on my own..") return flyer.description;
  return `Explore the ${formatFlyerTitle(flyer.title)} tour. Open the flyer to view the itinerary and package details.`;
}

function getFlyerDuration(flyer) {
  const duration = Number(flyer.duration);
  return Number.isInteger(duration) && duration >= 1 && duration <= 30 ? duration : null;
}

function populateDayFilter() {
  for (let days = 1; days <= 30; days += 1) {
    const option = document.createElement("option");
    option.value = String(days);
    option.textContent = `${days} ${days === 1 ? "day" : "days"}`;
    dayFilter.append(option);
  }
}

function renderFlyers(filter = currentFilter) {
  currentFilter = filter;
  const visibleFlyers = flyers.filter((flyer) => {
    const matchesDestination = filter === "all" || normalizeDestination(flyer.destination) === filter;
    const matchesDuration = currentDayFilter === "all" ||
      getFlyerDuration(flyer) === Number(currentDayFilter);
    return matchesDestination && matchesDuration;
  });
  flyerCount.textContent = `${visibleFlyers.length} ${visibleFlyers.length === 1 ? "flyer" : "flyers"}`;
  emptyState.hidden = visibleFlyers.length !== 0;
  flyerGrid.hidden = visibleFlyers.length === 0;

  flyerGrid.innerHTML = visibleFlyers.map((flyer, index) => {
    const thumbnail = flyer.thumbnail || flyer.image;
    const title = escapeHTML(formatFlyerTitle(flyer.title));
    const destination = escapeHTML(flyer.destination || "Destination");
    const description = escapeHTML(getFlyerDescription(flyer));
    const safeThumb = escapeHTML(thumbnail || "");
    return `
      <article class="flyer-card" style="animation-delay:${Math.min(index * 70, 350)}ms">
        <button class="flyer-card__trigger" type="button" data-open-flyer="${escapeHTML(flyer.id)}" aria-label="View ${title}">
          <span class="flyer-card__image-wrap">
            <img class="flyer-card__image" src="${safeThumb}" alt="${title} flyer preview" loading="lazy" decoding="async">
            <span class="flyer-card__open" aria-hidden="true">↗</span>
          </span>
        </button>
        <div class="flyer-card__body">
          <p class="flyer-card__category">${destination}</p>
          <h3 class="flyer-card__title">${title}</h3>
          <p class="flyer-card__description">${description}</p>
          <div class="flyer-card__actions">
            <button class="text-link" type="button" data-open-flyer="${escapeHTML(flyer.id)}">View flyer <span aria-hidden="true">↗</span></button>
            <a class="text-link text-link--muted" href="${safeThumb}" download="${escapeHTML(flyer.filename || "travel-flyer")}" data-card-download="${escapeHTML(flyer.id)}">↓ Download</a>
          </div>
        </div>
      </article>`;
  }).join("");

  // Missing thumbnails are replaced with a visual fallback instead of a broken-image icon.
  flyerGrid.querySelectorAll(".flyer-card__image").forEach((img) => {
    img.addEventListener("error", () => {
      img.removeAttribute("src");
      img.alt = "Flyer image unavailable";
      img.closest(".flyer-card__image-wrap").innerHTML =
        '<div class="image-fallback">Add your flyer image to the <code>images</code> folder and update <code>js/script.js</code>.</div>';
    }, { once: true });
  });
}

function openFlyer(id, trigger) {
  const flyer = flyers.find((item) => String(item.id) === String(id));
  if (!flyer) return;

  activeFlyer = flyer;
  previousFocus = trigger || document.activeElement;
  modalTitle.textContent = formatFlyerTitle(flyer.title);
  modalDescription.textContent = getFlyerDescription(flyer);
  modalImage.alt = `${formatFlyerTitle(flyer.title)} original flyer`;
  resetFlyerZoom();
  modalFallback.hidden = true;
  modalImage.hidden = false;
  zoomToggle.hidden = false;
  modalImage.src = flyer.image;
  downloadButton.href = flyer.image;
  downloadButton.download = flyer.filename || makeFilename(flyer.title);
  downloadButton.setAttribute("aria-label", `Download ${flyer.title || "travel"} original flyer`);

  modalImage.onerror = () => {
    modalImage.hidden = true;
    modalFallback.hidden = false;
    zoomToggle.hidden = true;
  };
  modalImage.onload = () => {
    zoomToggle.hidden = false;
    updateFlyerZoom();
  };

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => modal.querySelector(".modal__close").focus());
}

function closeModal() {
  if (!modal.classList.contains("is-open")) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (previousFocus && typeof previousFocus.focus === "function") previousFocus.focus();
  activeFlyer = null;
  resetFlyerZoom();
}

function clampZoomPosition() {
  const maxX = Math.max(0, (modalImage.offsetWidth * zoomScale - modalImageWrap.clientWidth) / 2);
  const maxY = Math.max(0, (modalImage.offsetHeight * zoomScale - modalImageWrap.clientHeight) / 2);
  zoomX = Math.max(-maxX, Math.min(maxX, zoomX));
  zoomY = Math.max(-maxY, Math.min(maxY, zoomY));
}

function updateFlyerZoom() {
  if (zoomScale === 1) {
    zoomX = 0;
    zoomY = 0;
  } else {
    clampZoomPosition();
  }
  modalImage.style.transform = `translate3d(${zoomX}px, ${zoomY}px, 0) scale(${zoomScale})`;
  modalImage.classList.toggle("is-zoomed", zoomScale > 1);
  modalImageWrap.classList.toggle("is-zoomed", zoomScale > 1);
  zoomToggle.textContent = zoomScale > 1 ? "Zoom out" : "Zoom in";
  zoomToggle.setAttribute("aria-label", zoomScale > 1 ? "Restore flyer to normal size" : "Zoom in on flyer");
  zoomToggle.setAttribute("aria-pressed", String(zoomScale > 1));
}

function setFlyerZoom(scale, x = zoomX, y = zoomY) {
  zoomScale = Math.max(1, Math.min(4, scale));
  zoomX = x;
  zoomY = y;
  updateFlyerZoom();
}

function resetFlyerZoom() {
  zoomScale = 1;
  zoomX = 0;
  zoomY = 0;
  lastTap = null;
  suppressTap = false;
  gestureMoved = false;
  activePointers.clear();
  gestureStart = null;
  modalImage.style.transform = "";
  modalImage.classList.remove("is-zoomed", "is-panning");
  modalImageWrap.classList.remove("is-zoomed");
  zoomToggle.textContent = "Zoom in";
  zoomToggle.setAttribute("aria-label", "Zoom in on flyer");
  zoomToggle.setAttribute("aria-pressed", "false");
}

function distanceBetween(first, second) {
  return Math.hypot(second.x - first.x, second.y - first.y);
}

function midpointBetween(first, second) {
  return { x: (first.x + second.x) / 2, y: (first.y + second.y) / 2 };
}

function toggleFlyerZoom() {
  setFlyerZoom(zoomScale > 1 ? 1 : 2.5, 0, 0);
}

function makeFilename(title = "travel-flyer") {
  const slug = String(title).toLowerCase().normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `${slug || "travel-flyer"}.webp`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2800);
}

function handleDownloadClick(event, flyer) {
  // Local same-origin files generally download directly. Cross-origin hosts may ignore
  // the download attribute; in that case the browser may open the image instead.
  if (!flyer) return;
  showToast("Preparing your flyer download…");
  const link = event.currentTarget;
  if (!link.hasAttribute("download")) link.setAttribute("download", flyer.filename || makeFilename(flyer.title));
}

// Delegated events keep interactions working when cards are re-rendered by filters.
flyerGrid.addEventListener("click", (event) => {
  const openButton = event.target.closest("[data-open-flyer]");
  if (openButton) {
    openFlyer(openButton.dataset.openFlyer, openButton);
    return;
  }
  const downloadLink = event.target.closest("[data-card-download]");
  if (downloadLink) {
    const flyer = flyers.find((item) => String(item.id) === downloadLink.dataset.cardDownload);
    handleDownloadClick(event, flyer);
  }
});

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-chip").forEach((chip) => {
      const active = chip === button;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", String(active));
    });
    renderFlyers(button.dataset.filter);
  });
});

dayFilter.addEventListener("change", () => {
  currentDayFilter = dayFilter.value;
  renderFlyers();
});

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) closeModal();
});

modalImageWrap.addEventListener("pointerdown", (event) => {
  if ((event.pointerType === "mouse" && event.button !== 0) ||
      event.target.closest(".zoom-button")) return;
  if (event.pointerType !== "mouse") event.preventDefault();
  modalImageWrap.setPointerCapture(event.pointerId);
  activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

  if (activePointers.size === 1) {
    const now = Date.now();
    const isDoubleTap = event.pointerType === "touch" && lastTap && now - lastTap.time < 320 &&
      distanceBetween(lastTap, { x: event.clientX, y: event.clientY }) < 32;
    if (isDoubleTap) {
      toggleFlyerZoom();
      lastTap = null;
      suppressTap = true;
    } else {
      suppressTap = false;
    }
    gestureMoved = false;
    gestureStart = {
      type: "drag",
      x: event.clientX,
      y: event.clientY,
      zoomX,
      zoomY
    };
  } else if (activePointers.size === 2) {
    lastTap = null;
    suppressTap = true;
    const [first, second] = [...activePointers.values()];
    gestureStart = {
      type: "pinch",
      distance: distanceBetween(first, second),
      midpoint: midpointBetween(first, second),
      scale: zoomScale,
      zoomX,
      zoomY
    };
  }
});

modalImageWrap.addEventListener("pointermove", (event) => {
  if (!activePointers.has(event.pointerId)) return;
  activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

  if (activePointers.size === 2 && gestureStart?.type === "pinch") {
    const [first, second] = [...activePointers.values()];
    const midpoint = midpointBetween(first, second);
    const distance = distanceBetween(first, second);
    if (Math.abs(distance - gestureStart.distance) > 3 ||
        distanceBetween(midpoint, gestureStart.midpoint) > 3) gestureMoved = true;
    setFlyerZoom(
      gestureStart.scale * (distance / Math.max(gestureStart.distance, 1)),
      gestureStart.zoomX + midpoint.x - gestureStart.midpoint.x,
      gestureStart.zoomY + midpoint.y - gestureStart.midpoint.y
    );
    return;
  }

  if (activePointers.size === 1 && gestureStart?.type === "drag") {
    const point = activePointers.get(event.pointerId);
    const deltaX = point.x - gestureStart.x;
    const deltaY = point.y - gestureStart.y;
    if (Math.abs(deltaX) > 6 || Math.abs(deltaY) > 6) gestureMoved = true;
    if (zoomScale > 1) {
      modalImage.classList.add("is-panning");
      setFlyerZoom(zoomScale, gestureStart.zoomX + deltaX, gestureStart.zoomY + deltaY);
    }
  }
});

function finishFlyerPointer(event) {
  if (!activePointers.has(event.pointerId)) return;
  const endedWithPinch = gestureStart?.type === "pinch";
  const point = activePointers.get(event.pointerId);
  activePointers.delete(event.pointerId);

  if (activePointers.size === 1 && endedWithPinch) {
    const [remaining] = activePointers.values();
    gestureStart = {
      type: "drag",
      x: remaining.x,
      y: remaining.y,
      zoomX,
      zoomY
    };
  } else if (activePointers.size === 0) {
    if (event.pointerType === "touch" && !gestureMoved && !suppressTap && !endedWithPinch) {
      lastTap = { ...point, time: Date.now() };
    }
    modalImage.classList.remove("is-panning");
    gestureStart = null;
    gestureMoved = false;
    suppressTap = false;
  }
}

modalImageWrap.addEventListener("pointerup", finishFlyerPointer);
modalImageWrap.addEventListener("pointercancel", finishFlyerPointer);
modalImageWrap.addEventListener("dblclick", (event) => {
  event.preventDefault();
  toggleFlyerZoom();
});
zoomToggle.addEventListener("click", toggleFlyerZoom);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
  if (event.key === "Tab" && modal.classList.contains("is-open")) {
    const focusable = [...modal.querySelectorAll('button:not([disabled]), a[href]')].filter((el) => el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  }
});

downloadButton.addEventListener("click", () => {
  if (activeFlyer) showToast("Your download is starting. If it opens in a new tab, use your browser's Save option.");
});

// Initial page rendering
populateDayFilter();
renderFlyers();

// Splash lasts about four seconds, but reduced-motion users get immediate access.
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
window.addEventListener("load", () => {
  const delay = reducedMotion ? 250 : 4000;
  window.setTimeout(() => {
    splash.classList.add("is-hidden");
    siteShell.classList.add("is-visible");
    window.setTimeout(() => { splash.hidden = true; }, reducedMotion ? 50 : 750);
  }, delay);
});

// Avoid leaving the page hidden if load events behave unexpectedly in a cached/webview context.
window.setTimeout(() => {
  if (!siteShell.classList.contains("is-visible")) {
    splash.classList.add("is-hidden");
    siteShell.classList.add("is-visible");
    window.setTimeout(() => { splash.hidden = true; }, 750);
  }
}, 5000);
