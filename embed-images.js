const fs = require("fs");
const https = require("https");


// =========================================================
// YOUR ORIGINAL HTML FILE
// =========================================================

const INPUT_FILE = "index.html";


// =========================================================
// NEW EMBEDDED HTML FILE
// =========================================================

const OUTPUT_FILE = "atiq-portfolio-embedded.html";


// =========================================================
// YOUR 8 PROJECT IMAGES
// =========================================================

const images = [

    "https://i.ibb.co/v4fLGfy1/IMG-20260829-WA0020.jpg",

    "https://i.ibb.co/1GdFf4Z9/IMG-20260829-WA0019.jpg",

    "https://i.ibb.co/vxr4BmLY/9b33d6eac666f2b6887f64016045c1c8.jpg",

    "https://i.ibb.co/7DL57nb/cc983524c96e755764313d417ed33250.jpg",

    "https://i.ibb.co/zTfZMCG3/IMG-20260829-WA0000.jpg",

    "https://i.ibb.co/V7SLDwQ/IMG-20260829-WA0002.jpg",

    "https://i.ibb.co/ycnj2cP0/IMG-20260829-WA0005.jpg",

    "https://i.ibb.co/XfNsH6Zq/IMG-20260829-WA0007.jpg"

];


// =========================================================
// DOWNLOAD IMAGE
// =========================================================

function downloadImage(url) {

    return new Promise((resolve, reject) => {

        https.get(url, response => {

            // Handle redirects
            if (
                response.statusCode >= 300 &&
                response.statusCode < 400 &&
                response.headers.location
            ) {

                return downloadImage(
                    response.headers.location
                )
                .then(resolve)
                .catch(reject);

            }


            if (response.statusCode !== 200) {

                reject(
                    new Error(
                        `HTTP ${response.statusCode}`
                    )
                );

                return;

            }


            const chunks = [];


            response.on("data", chunk => {

                chunks.push(chunk);

            });


            response.on("end", () => {

                const buffer =
                    Buffer.concat(chunks);


                const contentType =
                    response.headers["content-type"] ||
                    "image/jpeg";


                const base64 =
                    buffer.toString("base64");


                resolve(
                    `data:${contentType};base64,${base64}`
                );

            });


        }).on("error", reject);

    });

}


// =========================================================
// MAIN
// =========================================================

async function main() {

    console.log("");
    console.log("==========================================");
    console.log(" ATIq UR REHMAN PORTFOLIO");
    console.log(" IMAGE EMBEDDING SYSTEM");
    console.log("==========================================");
    console.log("");


    // Check original HTML

    if (!fs.existsSync(INPUT_FILE)) {

        console.error(
            `ERROR: ${INPUT_FILE} not found.`
        );

        console.log("");
        console.log(
            "Make sure this script is inside the same folder as your HTML file."
        );

        return;

    }


    // Read original HTML

    let html =
        fs.readFileSync(
            INPUT_FILE,
            "utf8"
        );


    console.log(
        `Found ${images.length} images to embed.`
    );

    console.log("");


    // Process every image

    for (
        let i = 0;
        i < images.length;
        i++
    ) {

        const url = images[i];


        console.log(
            `[${i + 1}/${images.length}]`
        );

        console.log(url);


        try {

            const base64 =
                await downloadImage(url);


            // Replace every occurrence
            // of the original URL

            html =
                html.split(url).join(base64);


            console.log(
                "Embedded successfully ✓"
            );

        }

        catch (error) {

            console.error(
                "FAILED ✗",
                error.message
            );

        }


        console.log("");

    }


    // Write NEW file

    fs.writeFileSync(
        OUTPUT_FILE,
        html,
        "utf8"
    );


    console.log("==========================================");

    console.log(
        "DONE ✓"
    );

    console.log(
        `Created: ${OUTPUT_FILE}`
    );

    console.log(
        "Original HTML was NOT modified."
    );

    console.log("==========================================");

}


main();