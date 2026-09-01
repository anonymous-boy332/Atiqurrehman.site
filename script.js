/* =========================================================
   ATIQ UR REHMAN PORTFOLIO
   INTERACTIONS
   ========================================================= */

const $ = (selector, context = document) =>
  context.querySelector(selector);

const $$ = (selector, context = document) =>
  [...context.querySelectorAll(selector)];


/* =========================================================
   CURSOR GLOW
   ========================================================= */

const cursor = $(".cursor-glow");

window.addEventListener("pointermove", (event) => {
  if (!cursor) return;

  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuBtn = $("#menuBtn");
const nav = $("#nav");

menuBtn?.addEventListener("click", () => {
  nav?.classList.toggle("open");
  menuBtn.classList.toggle("active");
});

$$(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");
    menuBtn?.classList.remove("active");
  });
});


/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12
  }
);

$$(".reveal").forEach((element) => {
  revealObserver.observe(element);
});


/* =========================================================
   3D TILT CARDS
   ========================================================= */

$$("[data-tilt]").forEach((card) => {

  card.addEventListener("pointermove", (event) => {

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return;
    }

    const rect = card.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
      rect.width -
      0.5;

    const y =
      (event.clientY - rect.top) /
      rect.height -
      0.5;

    card.style.transform = `
      perspective(1000px)
      rotateX(${-y * 5}deg)
      rotateY(${x * 7}deg)
    `;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });

});


/* =========================================================
   PROJECT FILTER
   ========================================================= */

$$(".filter").forEach((button) => {

  button.addEventListener("click", () => {

    $$(".filter").forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.dataset.filter;

    $$(".project-card").forEach((card) => {

      const category = card.dataset.cat;

      const shouldHide =
        filter !== "all" &&
        category !== filter;

      card.classList.toggle(
        "hidden",
        shouldHide
      );

    });

  });

});


/* =========================================================
   CONTACT FORM → WHATSAPP
   ========================================================= */

$("#contactForm")?.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();

    const form = event.target;

    const name =
      form.querySelector('[name="name"]')?.value.trim();

    const email =
      form.querySelector('[name="email"]')?.value.trim();

    const type =
      form.querySelector('[name="type"]')?.value.trim();

    const message =
      form.querySelector('[name="message"]')?.value.trim();

    const note =
      $("#formNote");

    if (!name || !email || !type || !message) {
      if (note) {
        note.textContent =
          "Please complete all fields before continuing.";

        note.classList.add("show");
      }

      return;
    }


    /* YOUR WHATSAPP NUMBER */

    const whatsappNumber =
      "923302820612";


    /* MESSAGE SENT TO WHATSAPP */

    const whatsappMessage =
`Hello Atiq,

I would like to discuss a project with you.

Name: ${name}

Email: ${email}

Project Type: ${type}

Project Details:
${message}

Thank you.`;


    /* CREATE WHATSAPP URL */

    const whatsappURL =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(whatsappMessage);


    if (note) {

      note.textContent =
        "Opening WhatsApp...";

      note.classList.add("show");

    }


    /* OPEN WHATSAPP */

    window.open(
      whatsappURL,
      "_blank"
    );


    /* RESET FORM */

    form.reset();

  }
);


/* =========================================================
   HERO SCENE PARALLAX
   ========================================================= */

const heroScene = $(".hero-scene");

window.addEventListener(
  "pointermove",
  (event) => {

    if (
      !heroScene ||
      window.matchMedia("(max-width:700px)").matches ||
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return;
    }

    const x =
      event.clientX /
      window.innerWidth -
      0.5;

    const y =
      event.clientY /
      window.innerHeight -
      0.5;

    heroScene.style.transform = `
      rotateX(${-y * 3}deg)
      rotateY(${x * 5}deg)
    `;

  }
);


/* =========================================================
   IMAGE ERROR HANDLING
   ========================================================= */

$$("img").forEach((image) => {

  image.addEventListener("error", () => {
    image.classList.add("image-error");
  });

});


/* =========================================================
   SMOOTH ANCHOR OFFSET
   ========================================================= */

$$('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId =
      link.getAttribute("href");

    if (
      !targetId ||
      targetId === "#"
    ) {
      return;
    }

    const target =
      document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    const header =
      $(".site-header");

    const offset =
      header
        ? header.offsetHeight + 25
        : 25;

    const position =
      target.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top: position,
      behavior:
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
          ? "auto"
          : "smooth"
    });

  });

});


/* =========================================================
   HEADER SCROLL STATE
   ========================================================= */

const header = $(".site-header");

window.addEventListener(
  "scroll",
  () => {

    if (!header) return;

    header.classList.toggle(
      "scrolled",
      window.scrollY > 40
    );

  },
  { passive: true }
);


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections = $$("main section[id]");
const navLinks = $$(".nav a");

const navObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        const activeLink =
          document.querySelector(
            `.nav a[href="#${entry.target.id}"]`
          );

        activeLink?.classList.add("active");

      });

    },
    {
      rootMargin: "-35% 0px -55% 0px"
    }
  );

sections.forEach((section) => {
  navObserver.observe(section);
});


/* =========================================================
   MOUSE PARALLAX FLOATING ELEMENTS
   ========================================================= */

const floatingElements = $$(
  ".float-tag, .floating-panel, .saas-float"
);

window.addEventListener(
  "pointermove",
  (event) => {

    if (
      window.matchMedia("(max-width:900px)").matches ||
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return;
    }

    const x =
      event.clientX / window.innerWidth - 0.5;

    const y =
      event.clientY / window.innerHeight - 0.5;

    floatingElements.forEach(
      (element, index) => {

        const strength =
          4 + (index % 4) * 2;

        element.style.setProperty(
          "--mx",
          `${x * strength}px`
        );

        element.style.setProperty(
          "--my",
          `${y * strength}px`
        );

      }
    );

  }
);


/* =========================================================
   SERVICE CARD POINTER LIGHT
   ========================================================= */

$$(".service-card, .project-card, .business-modules > div").forEach(
  (card) => {

    card.addEventListener("pointermove", (event) => {

      const rect =
        card.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;

      card.style.setProperty(
        "--mouse-x",
        `${x}px`
      );

      card.style.setProperty(
        "--mouse-y",
        `${y}px`
      );

    });

  }
);


/* =========================================================
   FOOTER YEAR
   ========================================================= */

const footerYear =
  document.querySelector("footer small");

if (footerYear) {

  footerYear.textContent =
    `© ${new Date().getFullYear()} Atiq Ur Rehman. All Rights Reserved.`;

}


/* =========================================================
   PAGE READY
   ========================================================= */

document.documentElement.classList.add("js-ready");