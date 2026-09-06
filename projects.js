/* =========================================================
   ATIq UR REHMAN PORTFOLIO
   DYNAMIC SELECTED WORK
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const grid =
        document.getElementById("projectGrid");

    const filters =
        document.querySelectorAll("#filters .filter");

    if (!grid) return;

    if (
        typeof portfolioProjects === "undefined" ||
        !Array.isArray(portfolioProjects)
    ) {
        console.error("projects-data.js not loaded.");
        return;
    }


    /* =====================================================
       FIND EMBEDDED IMAGE FROM THE EXISTING HTML
       ===================================================== */

    function findEmbeddedImage(filename) {

        const images =
            document.querySelectorAll(
                'img[src^="data:image/"]'
            );

        const filenameOnly =
            filename
                .split("/")
                .pop()
                .toLowerCase();


        for (const img of images) {

            const alt =
                (img.alt || "").toLowerCase();


            /*
             * Match the original project image
             * using the existing alt text.
             */

            if (
                filenameOnly.includes(
                    "wa0000"
                ) &&
                alt.includes("website")
            ) {
                return img.src;
            }


            if (
                filenameOnly.includes(
                    "wa0020"
                ) &&
                alt.includes("e-commerce")
            ) {
                return img.src;
            }


            if (
                filenameOnly.includes(
                    "wa0002"
                ) &&
                alt.includes("graphic")
            ) {
                return img.src;
            }


            if (
                filenameOnly.includes(
                    "9b33d6"
                ) &&
                alt.includes("social")
            ) {
                return img.src;
            }


            if (
                filenameOnly.includes(
                    "wa0019"
                ) &&
                alt.includes("marketing")
            ) {
                return img.src;
            }


            if (
                filenameOnly.includes(
                    "wa0005"
                ) &&
                alt.includes("3d")
            ) {
                return img.src;
            }


            if (
                filenameOnly.includes(
                    "wa0007"
                ) &&
                alt.includes("2d")
            ) {
                return img.src;
            }

        }


        return "";
    }


    /* =====================================================
       CATEGORY LABELS
       ===================================================== */

    function categoryLabel(category) {

        const labels = {

            web: "WEB DEVELOPMENT",

            ecommerce: "E-COMMERCE",

            graphic: "GRAPHIC DESIGN",

            social: "SOCIAL MEDIA",

            marketing: "DIGITAL MARKETING",

            interior: "INTERIOR / 3D",

            saas: "SAAS / AI"

        };


        return (
            labels[category] ||
            "PROJECT"
        );
    }


    /* =====================================================
       ESCAPE HTML
       ===================================================== */

    function escapeHTML(value) {

        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =====================================================
       RENDER PROJECTS
       ===================================================== */

    function renderProjects(category = "all") {

        grid.innerHTML = "";


        const projects =
            portfolioProjects.filter(project => {
                console.log("CURRENT PROJECTS:", portfolioProjects);

                if (project.published !== true) {
                    return false;
                }

                if (category === "all") {
                    return true;
                }

                return project.category === category;

            });


        projects.forEach((project, index) => {

            const card =
                document.createElement("article");


            card.className =
                "project-card reveal";


            if (index === 0) {
                card.classList.add("large");
            }


            card.dataset.cat =
                project.category;


            const image =
    project.image ||
    (
        project.projectUrl
        ? `https://image.thum.io/get/width/1200/crop/800/${encodeURIComponent(project.projectUrl)}`
        : ""
    );


            card.innerHTML = `

                <div class="project-art real-project-art">

                    ${
                        image
                        ?
                        `
                        <img
                            src="${image}"
                            alt="${escapeHTML(project.title)}"
                            loading="lazy"
                        />
                        `
                        :
                        `
                        <div class="project-image-placeholder">
                            PROJECT IMAGE
                        </div>
                        `
                    }

                    <div class="project-photo-label">
                        ${categoryLabel(project.category)}
                    </div>

                </div>


                <div class="project-info">

    <span>
        ${categoryLabel(project.category)}
    </span>

    <h3>
        ${escapeHTML(project.title)}
    </h3>

    <p>
        ${escapeHTML(project.description)}
    </p>

    ${
        project.projectUrl
        ?
        `
        <a
            class="project-live-link"
            href="${escapeHTML(project.projectUrl)}"
            target="_blank"
            rel="noopener noreferrer"
        >
            View Live Website
            <span>↗</span>
        </a>
        `
        :
        ""
    }

</div>

            `;


            grid.appendChild(card);

        });


        requestAnimationFrame(() => {

            grid
                .querySelectorAll(".reveal")
                .forEach(element => {

                    element.classList.add("visible");

                });

        });

    }


    /* =====================================================
       FILTERS
       ===================================================== */

    filters.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                filters.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


                button.classList.add(
                    "active"
                );


                renderProjects(
                    button.dataset.filter ||
                    "all"
                );

            }
        );

    });


    /* =====================================================
       INITIAL RENDER
       ===================================================== */

    renderProjects("all");

});