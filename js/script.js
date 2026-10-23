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
    title: "5D4N TOKYO-OSAKA",
    destination: "Asia",
    image: "images/flyers/5D4N-TOKYO-OSAKA.jpg",
    thumbnail: "images/flyers/5D4N-TOKYO-OSAKA.jpg",
    filename: "5D4N-TOKYO-OSAKA.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 2,
    title: "7D6N TURKIYE",
    destination: "Europe",
    image: "images/flyers/7D6N-HK-IBER.jpg",
    thumbnail: "images/flyers/7D6N-HK-IBER.jpg",
    filename: "7D6N-HK-IBER.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 3,
    title: "9D8N FAIRYTALE EUROPE",
    destination: "Europe",
    image: "images/flyers/9D8N-FAIRYTALE-EUROPE-R-US-TOUR.jpg",
    thumbnail: "images/flyers/9D8N-FAIRYTALE-EUROPE-R-US-TOUR.jpg",
    filename: "9D8N-FAIRYTALE-EUROPE-R-US-TOUR.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 4,
    title: "10D9N CHRISTMAS TURKIYE TIMELESS",
    destination: "Europe",
    image: "images/flyers/10D9N-CHRISTMAS-TURKIYE-TIMELESS.jpg",
    thumbnail: "images/flyers/10D9N-CHRISTMAS-TURKIYE-TIMELESS.jpg",
    filename: "10D9N-CHRISTMAS-TURKIYE-TIMELESS.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 5,
    title: "10D9N TURKIYE TIMELESS",
    destination: "Europe",
    image: "images/flyers/10D9N-TURKIYE-TIMELESS.jpg",
    thumbnail: "images/flyers/10D9N-TURKIYE-TIMELESS.jpg",
    filename: "10D9N-TURKIYE-TIMELESS.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 6,
    title: "12D11N BALKAN PENINSULA",
    destination: "Europe",
    image: "images/flyers/12D11N-BALKAN-PENINSULA-R-US-TOUR.jpg",
    thumbnail: "images/flyers/12D11N-BALKAN-PENINSULA-R-US-TOUR.jpg",
    filename: "12D11N-BALKAN-PENINSULA-R-US-TOUR.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 7,
    title: "15D14N EASTER EUROPE",
    destination: "Europe",
    image: "images/flyers/15D14N-EASTER-EUROPE-R-US-TOUR.jpg",
    thumbnail: "images/flyers/15D14N-EASTER-EUROPE-R-US-TOUR.jpg",
    filename: "15D14N-EASTER-EUROPE-R-US-TOUR.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 8,
    title: "15D14N ROTARY IN SPAIN",
    destination: "Europe",
    image: "images/flyers/15D14N-ROTARY-IN-SPAIN-R-US-TOUR.jpg",
    thumbnail: "images/flyers/15D14N-ROTARY-IN-SPAIN-R-US-TOUR.jpg",
    filename: "15D14N-ROTARY-IN-SPAIN-R-US-TOUR.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 9,
    title: "16D15N 10in1 EUROPE",
    destination: "Europe",
    image: "images/flyers/16D15N-10in1-EUROPE-R-US-TOUR.jpg",
    thumbnail: "images/flyers/16D15N-10in1-EUROPE-R-US-TOUR.jpg",
    filename: "16D15N-10in1-EUROPE-R-US-TOUR.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 10,
    title: "17D16N BALKAN PENINSULA",
    destination: "Europe",
    image: "images/flyers/17D16N-BALKAN-PENINSULA-R-US-TOUR.jpg",
    thumbnail: "images/flyers/17D16N-BALKAN-PENINSULA-R-US-TOUR.jpg",
    filename: "17D16N-BALKAN-PENINSULA-R-US-TOUR.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 11,
    title: "18D17N MARIAN PILGRIMAGE",
    destination: "Europe",
    image: "images/flyers/18D17N-MARIAN-PILGRIMAGE-R-US-TOUR.jpg",
    thumbnail: "images/flyers/18D17N-MARIAN-PILGRIMAGE-R-US-TOUR.jpg",
    filename: "18D17N-MARIAN-PILGRIMAGE-R-US-TOUR.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 12,
    title: "KOREA AUTUMN",
    destination: "Asia",
    image: "images/flyers/KOREA-AUTUMN.jpg",
    thumbnail: "images/flyers/KOREA-AUTUMN.jpg",
    filename: "KOREA-AUTUMN.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 13,
    title: "KOREA SPRING",
    destination: "Asia",
    image: "images/flyers/KOREA-SPRING.jpg",
    thumbnail: "images/flyers/KOREA-SPRING.jpg",
    filename: "KOREA-SPRING.jpg",
    description: "Ill do this on my own.."
  },
  {
    id: 14,
    title: "KOREA WINTER",
    destination: "Asia",
    image: "images/flyers/KOREA-WINTER.jpg",
    thumbnail: "images/flyers/KOREA-WINTER.jpg",
    filename: "KOREA-WINTER.jpg",
    description: "Ill do this on my own.."
  }
];

const splash = document.querySelector("#splash");
const siteShell = document.querySelector("#site-shell");
const flyerGrid = document.querySelector("#flyer-grid");
const flyerCount = document.querySelector("#flyer-count");
const emptyState = document.querySelector("#empty-state");
const modal = document.querySelector("#flyer-modal");
const modalImage = document.querySelector("#modal-image");
const modalFallback = document.querySelector("#modal-fallback");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const downloadButton = document.querySelector("#download-button");
const toast = document.querySelector("#toast");

let activeFlyer = null;
let previousFocus = null;
let toastTimer = null;
let currentFilter = "all";

const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
}[char]));

function normalizeDestination(destination = "") {
  const value = destination.toLowerCase();
  if (value.includes("asia") || ["japan", "vietnam", "korea", "china", "thailand", "singapore"].includes(value)) return "Asia";
  if (value.includes("europe")) return "Europe";
  return "Other";
}

function renderFlyers(filter = currentFilter) {
  currentFilter = filter;
  const visibleFlyers = flyers.filter((flyer) => filter === "all" || normalizeDestination(flyer.destination) === filter);
  flyerCount.textContent = `${visibleFlyers.length} ${visibleFlyers.length === 1 ? "flyer" : "flyers"}`;
  emptyState.hidden = visibleFlyers.length !== 0;
  flyerGrid.hidden = visibleFlyers.length === 0;

  flyerGrid.innerHTML = visibleFlyers.map((flyer, index) => {
    const thumbnail = flyer.thumbnail || flyer.image;
    const title = escapeHTML(flyer.title || "Travel flyer");
    const destination = escapeHTML(flyer.destination || "Destination");
    const description = escapeHTML(flyer.description || "Tap to view this travel flyer.");
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
  modalTitle.textContent = flyer.title || "Travel flyer";
  modalDescription.textContent = flyer.description || "View the details of this package.";
  modalImage.alt = `${flyer.title || "Travel"} original flyer`;
  modalFallback.hidden = true;
  modalImage.hidden = false;
  modalImage.src = flyer.image;
  downloadButton.href = flyer.image;
  downloadButton.download = flyer.filename || makeFilename(flyer.title);
  downloadButton.setAttribute("aria-label", `Download ${flyer.title || "travel"} original flyer`);

  modalImage.onerror = () => {
    modalImage.hidden = true;
    modalFallback.hidden = false;
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

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) closeModal();
});

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
