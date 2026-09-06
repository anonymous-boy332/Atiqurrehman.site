/* =========================================================
   ATIq UR REHMAN PORTFOLIO
   PORTFOLIO PROJECT DATABASE
   ========================================================= */


/* =========================================================
   PREMIUM GRAPHIC DESIGN VISUAL GENERATOR
   Embedded SVG — No External Image Required
   ========================================================= */

function createCampaignVisual({
    brand,
    title,
    subtitle,
    accent = "#00d9ff",
    secondary = "#7c3aed",
    label = "CREATIVE DESIGN",
    symbol = "✦",
    number = "01"
}) {
    const uid = (
        brand +
        title +
        symbol +
        Math.random().toString(36).slice(2, 7)
    )
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase();

    const svg = `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1200"
        height="800"
        viewBox="0 0 1200 800"
    >
        <defs>

            <linearGradient
                id="bg-${uid}"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
            >
                <stop offset="0%" stop-color="#03050a"/>
                <stop offset="45%" stop-color="#0a0f1c"/>
                <stop offset="100%" stop-color="${secondary}"/>
            </linearGradient>

            <linearGradient
                id="accent-${uid}"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
            >
                <stop offset="0%" stop-color="${accent}"/>
                <stop offset="100%" stop-color="${secondary}"/>
            </linearGradient>

            <linearGradient
                id="glass-${uid}"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
            >
                <stop offset="0%" stop-color="#ffffff" stop-opacity=".14"/>
                <stop offset="100%" stop-color="#ffffff" stop-opacity=".025"/>
            </linearGradient>

            <radialGradient id="glow-${uid}">
                <stop offset="0%" stop-color="${accent}" stop-opacity=".55"/>
                <stop offset="55%" stop-color="${accent}" stop-opacity=".12"/>
                <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
            </radialGradient>

            <filter
                id="shadow-${uid}"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
            >
                <feDropShadow
                    dx="0"
                    dy="24"
                    stdDeviation="28"
                    flood-color="#000000"
                    flood-opacity=".65"
                />
            </filter>

            <filter id="blur-${uid}">
                <feGaussianBlur stdDeviation="55"/>
            </filter>

            <pattern
                id="grid-${uid}"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
            >
                <path
                    d="M50 0H0V50"
                    fill="none"
                    stroke="#ffffff"
                    stroke-opacity=".055"
                    stroke-width="1"
                />
            </pattern>

            <filter id="noise-${uid}">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency=".8"
                    numOctaves="3"
                    stitchTiles="stitch"
                />
                <feColorMatrix
                    type="saturate"
                    values="0"
                />
                <feComponentTransfer>
                    <feFuncA
                        type="table"
                        tableValues="0 .035"
                    />
                </feComponentTransfer>
            </filter>

        </defs>

        <rect
            width="1200"
            height="800"
            fill="url(#bg-${uid})"
        />

        <rect
            width="1200"
            height="800"
            fill="url(#grid-${uid})"
        />

        <circle
            cx="1010"
            cy="100"
            r="320"
            fill="url(#glow-${uid})"
            filter="url(#blur-${uid})"
        />

        <circle
            cx="150"
            cy="730"
            r="260"
            fill="url(#glow-${uid})"
            filter="url(#blur-${uid})"
            opacity=".45"
        />

        <rect
            width="1200"
            height="800"
            filter="url(#noise-${uid})"
            opacity=".3"
        />

        <text
            x="70"
            y="68"
            fill="${accent}"
            font-family="Arial, Helvetica, sans-serif"
            font-size="15"
            font-weight="700"
            letter-spacing="5"
        >
            ${label}
        </text>

        <text
            x="1130"
            y="68"
            text-anchor="end"
            fill="#ffffff"
            fill-opacity=".42"
            font-family="Arial, Helvetica, sans-serif"
            font-size="14"
            font-weight="600"
            letter-spacing="3"
        >
            2026 / ${number}
        </text>

        <line
            x1="70"
            y1="90"
            x2="1130"
            y2="90"
            stroke="#ffffff"
            stroke-opacity=".12"
        />

        <text
            x="70"
            y="155"
            fill="#ffffff"
            font-family="Arial, Helvetica, sans-serif"
            font-size="34"
            font-weight="800"
            letter-spacing="2"
        >
            ${brand}
        </text>

        <text
            x="70"
            y="260"
            fill="#ffffff"
            font-family="Arial, Helvetica, sans-serif"
            font-size="78"
            font-weight="900"
        >
            ${title}
        </text>

        <rect
            x="72"
            y="286"
            width="85"
            height="4"
            rx="2"
            fill="url(#accent-${uid})"
        />

        <text
            x="70"
            y="335"
            fill="#c6cede"
            font-family="Arial, Helvetica, sans-serif"
            font-size="21"
            letter-spacing="2"
        >
            ${subtitle}
        </text>

        <g filter="url(#shadow-${uid})">

            <rect
                x="70"
                y="425"
                width="480"
                height="205"
                rx="28"
                fill="url(#glass-${uid})"
                stroke="#ffffff"
                stroke-opacity=".15"
            />

            <text
                x="105"
                y="470"
                fill="${accent}"
                font-family="Arial, Helvetica, sans-serif"
                font-size="14"
                font-weight="700"
                letter-spacing="4"
            >
                CREATIVE DIRECTION
            </text>

            <text
                x="105"
                y="520"
                fill="#ffffff"
                font-family="Arial, Helvetica, sans-serif"
                font-size="25"
                font-weight="700"
            >
                BRAND • TYPE • FORM
            </text>

            <text
                x="105"
                y="557"
                fill="#aeb8ca"
                font-family="Arial, Helvetica, sans-serif"
                font-size="17"
            >
                Premium visual communication
            </text>

            <text
                x="105"
                y="585"
                fill="#aeb8ca"
                font-family="Arial, Helvetica, sans-serif"
                font-size="17"
            >
                designed for modern brands.
            </text>

            <circle
                cx="490"
                cy="478"
                r="8"
                fill="${accent}"
            />

            <circle
                cx="515"
                cy="478"
                r="8"
                fill="${secondary}"
            />

        </g>

        <g
            transform="translate(700 125)"
            filter="url(#shadow-${uid})"
        >

            <rect
                x="0"
                y="0"
                width="405"
                height="540"
                rx="34"
                fill="#05070d"
                stroke="#ffffff"
                stroke-opacity=".2"
                stroke-width="2"
            />

            <rect
                x="18"
                y="18"
                width="369"
                height="504"
                rx="25"
                fill="#080c16"
                stroke="${accent}"
                stroke-opacity=".18"
            />

            <path
                d="M35 110V35H110"
                fill="none"
                stroke="${accent}"
                stroke-width="3"
            />

            <path
                d="M295 505H370V430"
                fill="none"
                stroke="${secondary}"
                stroke-width="3"
            />

            <circle
                cx="202"
                cy="205"
                r="122"
                fill="none"
                stroke="${accent}"
                stroke-opacity=".2"
                stroke-width="2"
            />

            <circle
                cx="202"
                cy="205"
                r="92"
                fill="none"
                stroke="${secondary}"
                stroke-opacity=".3"
                stroke-width="1"
                stroke-dasharray="8 12"
            />

            <circle
                cx="202"
                cy="205"
                r="67"
                fill="url(#glow-${uid})"
            />

            <circle
                cx="202"
                cy="205"
                r="58"
                fill="#080c16"
                stroke="url(#accent-${uid})"
                stroke-width="4"
            />

            <text
                x="202"
                y="224"
                text-anchor="middle"
                fill="#ffffff"
                font-family="Arial, Helvetica, sans-serif"
                font-size="52"
                font-weight="900"
            >
                ${symbol}
            </text>

            <text
                x="202"
                y="320"
                text-anchor="middle"
                fill="#ffffff"
                font-family="Arial, Helvetica, sans-serif"
                font-size="25"
                font-weight="800"
                letter-spacing="4"
            >
                ${brand}
            </text>

            <text
                x="202"
                y="348"
                text-anchor="middle"
                fill="${accent}"
                font-family="Arial, Helvetica, sans-serif"
                font-size="12"
                font-weight="700"
                letter-spacing="4"
            >
                VISUAL IDENTITY
            </text>

            <rect
                x="65"
                y="390"
                width="275"
                height="11"
                rx="5"
                fill="#ffffff"
                opacity=".82"
            />

            <rect
                x="95"
                y="417"
                width="215"
                height="7"
                rx="3"
                fill="${accent}"
                opacity=".85"
            />

            <rect
                x="65"
                y="447"
                width="275"
                height="42"
                rx="14"
                fill="#ffffff"
                opacity=".055"
            />

            <rect
                x="65"
                y="503"
                width="100"
                height="5"
                rx="3"
                fill="${accent}"
            />

        </g>

        <text
            x="70"
            y="735"
            fill="#ffffff"
            fill-opacity=".38"
            font-family="Arial, Helvetica, sans-serif"
            font-size="13"
            font-weight="600"
            letter-spacing="3"
        >
            ATIq UR REHMAN • GRAPHIC DESIGN • VISUAL DIRECTION
        </text>

        <text
            x="1130"
            y="735"
            text-anchor="end"
            fill="${accent}"
            font-family="Arial, Helvetica, sans-serif"
            font-size="13"
            font-weight="700"
            letter-spacing="2"
        >
            PORTFOLIO / ${number}
        </text>

    </svg>
    `;

    return "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg);
}


/* =========================================================
   SOCIAL MEDIA VISUAL GENERATOR
   Existing Social Media Design Preserved
   ========================================================= */

function createSocialVisual({
    brand,
    title,
    subtitle,
    accent = "#00d9ff",
    secondary = "#7c3aed",
    icon = "SOCIAL"
}) {
    const svg = `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1200"
        height="800"
        viewBox="0 0 1200 800"
    >

        <defs>

            <linearGradient
                id="socialBg"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
            >
                <stop offset="0%" stop-color="#050914"/>
                <stop offset="55%" stop-color="#0b1224"/>
                <stop offset="100%" stop-color="${secondary}"/>
            </linearGradient>

            <linearGradient
                id="socialAccent"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
            >
                <stop offset="0%" stop-color="${accent}"/>
                <stop offset="100%" stop-color="${secondary}"/>
            </linearGradient>

        </defs>

        <rect
            width="1200"
            height="800"
            rx="40"
            fill="url(#socialBg)"
        />

        <circle
            cx="1040"
            cy="130"
            r="190"
            fill="${accent}"
            opacity=".12"
        />

        <circle
            cx="120"
            cy="700"
            r="220"
            fill="${secondary}"
            opacity=".12"
        />

        <text
            x="80"
            y="90"
            fill="#ffffff"
            font-family="Arial, Helvetica, sans-serif"
            font-size="34"
            font-weight="700"
        >
            ${brand}
        </text>

        <text
            x="83"
            y="122"
            fill="${accent}"
            font-family="Arial, Helvetica, sans-serif"
            font-size="16"
            font-weight="600"
            letter-spacing="4"
        >
            SOCIAL MEDIA CAMPAIGN
        </text>

        <text
            x="80"
            y="250"
            fill="#ffffff"
            font-family="Arial, Helvetica, sans-serif"
            font-size="72"
            font-weight="800"
        >
            ${title}
        </text>

        <text
            x="82"
            y="305"
            fill="#b8c3d9"
            font-family="Arial, Helvetica, sans-serif"
            font-size="25"
        >
            ${subtitle}
        </text>

        <rect
            x="80"
            y="390"
            width="420"
            height="220"
            rx="28"
            fill="#ffffff"
            opacity=".07"
            stroke="#ffffff"
            stroke-opacity=".14"
        />

        <text
            x="115"
            y="445"
            fill="${accent}"
            font-family="Arial, Helvetica, sans-serif"
            font-size="18"
            font-weight="700"
            letter-spacing="3"
        >
            SOCIAL STRATEGY
        </text>

        <text
            x="115"
            y="505"
            fill="#ffffff"
            font-family="Arial, Helvetica, sans-serif"
            font-size="30"
            font-weight="700"
        >
            BUILD • ENGAGE • GROW
        </text>

        <text
            x="115"
            y="550"
            fill="#9eabc2"
            font-family="Arial, Helvetica, sans-serif"
            font-size="19"
        >
            Premium content strategy
        </text>

        <g transform="translate(720 155)">

            <rect
                x="0"
                y="0"
                width="300"
                height="500"
                rx="42"
                fill="#05070e"
                stroke="#ffffff"
                stroke-opacity=".25"
                stroke-width="3"
            />

            <rect
                x="18"
                y="18"
                width="264"
                height="464"
                rx="30"
                fill="#10182a"
            />

            <circle
                cx="150"
                cy="145"
                r="72"
                fill="url(#socialAccent)"
            />

            <circle
                cx="150"
                cy="145"
                r="38"
                fill="#ffffff"
                opacity=".92"
            />

            <text
                x="150"
                y="155"
                text-anchor="middle"
                fill="#111827"
                font-family="Arial, Helvetica, sans-serif"
                font-size="20"
                font-weight="800"
            >
                ${icon}
            </text>

            <rect
                x="55"
                y="250"
                width="190"
                height="16"
                rx="8"
                fill="#ffffff"
                opacity=".8"
            />

            <rect
                x="80"
                y="282"
                width="140"
                height="11"
                rx="6"
                fill="${accent}"
                opacity=".8"
            />

            <rect
                x="55"
                y="330"
                width="190"
                height="55"
                rx="15"
                fill="#ffffff"
                opacity=".07"
            />

            <rect
                x="55"
                y="400"
                width="190"
                height="35"
                rx="17"
                fill="url(#socialAccent)"
            />

        </g>

    </svg>
    `;

    return "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg);
}


/* =========================================================
   PREMIUM 3D INTERIOR LAYOUT VISUAL GENERATOR
   Embedded SVG — No External Image Required
   ========================================================= */

function createInteriorVisual({
    room = "RESIDENTIAL INTERIOR",
    title = "MODERN LIVING",
    subtitle = "LUXURY • BALANCE • COMFORT",
    accent = "#d8b36a",
    secondary = "#2563eb",
    type = "3D INTERIOR",
    number = "01"
}) {

    const uid = (
        room +
        title +
        Math.random().toString(36).slice(2, 8)
    )
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase();

    const svg = `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1200"
        height="800"
        viewBox="0 0 1200 800"
    >

        <defs>

            <linearGradient
                id="roomBg-${uid}"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
            >
                <stop offset="0%" stop-color="#08090b"/>
                <stop offset="45%" stop-color="#151518"/>
                <stop offset="100%" stop-color="#302616"/>
            </linearGradient>

            <linearGradient
                id="floor-${uid}"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
            >
                <stop offset="0%" stop-color="#5d5347"/>
                <stop offset="100%" stop-color="#201c19"/>
            </linearGradient>

            <linearGradient
                id="wall-${uid}"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
            >
                <stop offset="0%" stop-color="#d9d3c8"/>
                <stop offset="55%" stop-color="#bcb5aa"/>
                <stop offset="100%" stop-color="#777169"/>
            </linearGradient>

            <linearGradient
                id="sofa-${uid}"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
            >
                <stop offset="0%" stop-color="#4b4a47"/>
                <stop offset="100%" stop-color="#171717"/>
            </linearGradient>

            <linearGradient
                id="wood-${uid}"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
            >
                <stop offset="0%" stop-color="#9b7953"/>
                <stop offset="100%" stop-color="#3c2c20"/>
            </linearGradient>

            <radialGradient
                id="light-${uid}"
                cx="50%"
                cy="50%"
                r="50%"
            >
                <stop offset="0%" stop-color="${accent}" stop-opacity=".5"/>
                <stop offset="45%" stop-color="${accent}" stop-opacity=".15"/>
                <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
            </radialGradient>

            <filter
                id="roomShadow-${uid}"
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
            >
                <feDropShadow
                    dx="0"
                    dy="18"
                    stdDeviation="22"
                    flood-color="#000"
                    flood-opacity=".5"
                />
            </filter>

            <filter id="soft-${uid}">
                <feGaussianBlur stdDeviation="35"/>
            </filter>

        </defs>


        <!-- BACKGROUND -->

        <rect
            width="1200"
            height="800"
            fill="url(#roomBg-${uid})"
        />

        <circle
            cx="980"
            cy="150"
            r="300"
            fill="url(#light-${uid})"
            filter="url(#soft-${uid})"
        />

        <circle
            cx="180"
            cy="700"
            r="230"
            fill="${secondary}"
            opacity=".08"
            filter="url(#soft-${uid})"
        />


        <!-- ARCHITECTURAL ROOM -->

        <g
            transform="translate(125 105)"
            filter="url(#roomShadow-${uid})"
        >

            <!-- BACK WALL -->

            <polygon
                points="0,0 680,0 680,390 0,390"
                fill="url(#wall-${uid})"
            />

            <!-- LEFT WALL -->

            <polygon
                points="0,0 180,95 180,485 0,390"
                fill="#8d877e"
            />

            <!-- RIGHT WALL -->

            <polygon
                points="680,0 680,390 500,485 500,95"
                fill="#67625c"
            />

            <!-- FLOOR -->

            <polygon
                points="0,390 680,390 500,485 180,485"
                fill="url(#floor-${uid})"
            />

            <!-- FLOOR PLANKS -->

            <g
                stroke="#d6c5ad"
                stroke-opacity=".18"
                stroke-width="2"
            >
                <line x1="45" y1="398" x2="215" y2="478"/>
                <line x1="115" y1="395" x2="270" y2="478"/>
                <line x1="185" y1="395" x2="325" y2="478"/>
                <line x1="255" y1="395" x2="380" y2="478"/>
                <line x1="325" y1="395" x2="430" y2="478"/>
                <line x1="395" y1="395" x2="475" y2="478"/>
                <line x1="465" y1="395" x2="520" y2="470"/>
                <line x1="535" y1="395" x2="565" y2="450"/>
                <line x1="605" y1="395" x2="610" y2="425"/>
            </g>


            <!-- LARGE WINDOW -->

            <g transform="translate(235 48)">

                <rect
                    x="0"
                    y="0"
                    width="260"
                    height="210"
                    fill="#141b20"
                    stroke="#272d30"
                    stroke-width="10"
                />

                <rect
                    x="13"
                    y="13"
                    width="234"
                    height="184"
                    fill="#263b45"
                />

                <polygon
                    points="13,197 247,197 210,130 55,130"
                    fill="#738f99"
                    opacity=".28"
                />

                <line
                    x1="130"
                    y1="13"
                    x2="130"
                    y2="197"
                    stroke="#b8a58b"
                    stroke-opacity=".55"
                    stroke-width="5"
                />

                <line
                    x1="13"
                    y1="105"
                    x2="247"
                    y2="105"
                    stroke="#b8a58b"
                    stroke-opacity=".35"
                    stroke-width="4"
                />

            </g>


            <!-- TV / FEATURE WALL -->

            <rect
                x="45"
                y="70"
                width="135"
                height="190"
                fill="#282624"
            />

            <rect
                x="65"
                y="90"
                width="95"
                height="75"
                rx="4"
                fill="#101316"
                stroke="${accent}"
                stroke-opacity=".35"
            />

            <rect
                x="88"
                y="173"
                width="48"
                height="7"
                rx="3"
                fill="${accent}"
                opacity=".7"
            />

            <rect
                x="62"
                y="195"
                width="101"
                height="3"
                fill="#a99d8b"
                opacity=".25"
            />

            <rect
                x="62"
                y="210"
                width="80"
                height="3"
                fill="#a99d8b"
                opacity=".18"
            />


            <!-- SOFA -->

            <g transform="translate(190 255)">

                <rect
                    x="0"
                    y="48"
                    width="310"
                    height="82"
                    rx="20"
                    fill="url(#sofa-${uid})"
                />

                <rect
                    x="18"
                    y="10"
                    width="85"
                    height="82"
                    rx="18"
                    fill="#41403c"
                />

                <rect
                    x="112"
                    y="10"
                    width="85"
                    height="82"
                    rx="18"
                    fill="#3b3a37"
                />

                <rect
                    x="206"
                    y="10"
                    width="85"
                    height="82"
                    rx="18"
                    fill="#363532"
                />

                <rect
                    x="22"
                    y="130"
                    width="25"
                    height="28"
                    fill="#171717"
                />

                <rect
                    x="263"
                    y="130"
                    width="25"
                    height="28"
                    fill="#171717"
                />

            </g>


            <!-- COFFEE TABLE -->

            <g transform="translate(270 350)">

                <ellipse
                    cx="115"
                    cy="25"
                    rx="105"
                    ry="30"
                    fill="#171513"
                    opacity=".5"
                />

                <rect
                    x="20"
                    y="0"
                    width="190"
                    height="35"
                    rx="17"
                    fill="url(#wood-${uid})"
                />

                <rect
                    x="42"
                    y="30"
                    width="12"
                    height="35"
                    fill="#251c17"
                />

                <rect
                    x="176"
                    y="30"
                    width="12"
                    height="35"
                    fill="#251c17"
                />

                <circle
                    cx="115"
                    cy="17"
                    r="8"
                    fill="${accent}"
                    opacity=".7"
                />

            </g>


            <!-- FLOOR RUG -->

            <polygon
                points="170,370 470,370 420,440 220,440"
                fill="#9b9183"
                opacity=".55"
            />

            <polygon
                points="195,380 445,380 410,425 235,425"
                fill="#4c4944"
                opacity=".65"
            />


            <!-- PLANT -->

            <g transform="translate(550 280)">

                <rect
                    x="0"
                    y="70"
                    width="58"
                    height="45"
                    rx="8"
                    fill="#25201b"
                />

                <path
                    d="M29 70C12 45 15 15 30 0"
                    fill="none"
                    stroke="#44583e"
                    stroke-width="7"
                />

                <path
                    d="M29 65C50 42 55 20 49 2"
                    fill="none"
                    stroke="#4e6648"
                    stroke-width="7"
                />

                <path
                    d="M25 55C3 48 -4 32 2 20"
                    fill="none"
                    stroke="#536b4b"
                    stroke-width="7"
                />

                <ellipse
                    cx="30"
                    cy="8"
                    rx="18"
                    ry="8"
                    fill="#718c61"
                    transform="rotate(-35 30 8)"
                />

                <ellipse
                    cx="48"
                    cy="12"
                    rx="18"
                    ry="8"
                    fill="#617b54"
                    transform="rotate(30 48 12)"
                />

            </g>


            <!-- CEILING LIGHT -->

            <g transform="translate(315 -12)">

                <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="48"
                    stroke="#262626"
                    stroke-width="5"
                />

                <circle
                    cx="0"
                    cy="65"
                    r="25"
                    fill="#242424"
                />

                <circle
                    cx="0"
                    cy="65"
                    r="15"
                    fill="${accent}"
                    opacity=".9"
                />

                <circle
                    cx="0"
                    cy="65"
                    r="65"
                    fill="url(#light-${uid})"
                />

            </g>


            <!-- DECORATIVE WALL PANELS -->

            <g opacity=".42">

                <rect
                    x="520"
                    y="65"
                    width="105"
                    height="120"
                    fill="none"
                    stroke="#3c3935"
                    stroke-width="4"
                />

                <rect
                    x="535"
                    y="80"
                    width="75"
                    height="90"
                    fill="none"
                    stroke="${accent}"
                    stroke-opacity=".35"
                    stroke-width="2"
                />

            </g>

        </g>


        <!-- PREMIUM INFORMATION PANEL -->

        <g transform="translate(835 105)">

            <rect
                x="0"
                y="0"
                width="275"
                height="590"
                rx="28"
                fill="#08090b"
                fill-opacity=".91"
                stroke="#ffffff"
                stroke-opacity=".13"
            />

            <text
                x="30"
                y="45"
                fill="${accent}"
                font-family="Arial, Helvetica, sans-serif"
                font-size="12"
                font-weight="700"
                letter-spacing="3"
            >
                ${type}
            </text>

            <text
                x="30"
                y="98"
                fill="#ffffff"
                font-family="Arial, Helvetica, sans-serif"
                font-size="28"
                font-weight="800"
            >
                ${title}
            </text>

            <line
                x1="30"
                y1="125"
                x2="245"
                y2="125"
                stroke="#ffffff"
                stroke-opacity=".12"
            />

            <text
                x="30"
                y="165"
                fill="#a8a49d"
                font-family="Arial, Helvetica, sans-serif"
                font-size="13"
                letter-spacing="1.5"
            >
                ${room}
            </text>

            <text
                x="30"
                y="205"
                fill="#ded9d0"
                font-family="Arial, Helvetica, sans-serif"
                font-size="14"
            >
                ${subtitle}
            </text>


            <!-- SPECIFICATIONS -->

            <text
                x="30"
                y="270"
                fill="${accent}"
                font-family="Arial, Helvetica, sans-serif"
                font-size="11"
                font-weight="700"
                letter-spacing="3"
            >
                DESIGN ELEMENTS
            </text>

            <text
                x="30"
                y="310"
                fill="#ffffff"
                font-family="Arial, Helvetica, sans-serif"
                font-size="14"
            >
                MATERIAL PALETTE
            </text>

            <text
                x="30"
                y="333"
                fill="#88857f"
                font-family="Arial, Helvetica, sans-serif"
                font-size="12"
            >
                Wood • Stone • Fabric
            </text>

            <text
                x="30"
                y="375"
                fill="#ffffff"
                font-family="Arial, Helvetica, sans-serif"
                font-size="14"
            >
                LIGHTING
            </text>

            <text
                x="30"
                y="398"
                fill="#88857f"
                font-family="Arial, Helvetica, sans-serif"
                font-size="12"
            >
                Ambient • Accent • Natural
            </text>

            <text
                x="30"
                y="440"
                fill="#ffffff"
                font-family="Arial, Helvetica, sans-serif"
                font-size="14"
            >
                SPACE PLANNING
            </text>

            <text
                x="30"
                y="463"
                fill="#88857f"
                font-family="Arial, Helvetica, sans-serif"
                font-size="12"
            >
                Functional • Balanced • Open
            </text>


            <!-- COLOR PALETTE -->

            <circle
                cx="40"
                cy="525"
                r="12"
                fill="${accent}"
            />

            <circle
                cx="78"
                cy="525"
                r="12"
                fill="#8d8374"
            />

            <circle
                cx="116"
                cy="525"
                r="12"
                fill="#45423d"
            />

            <circle
                cx="154"
                cy="525"
                r="12"
                fill="#171717"
            />

            <text
                x="30"
                y="565"
                fill="#ffffff"
                fill-opacity=".35"
                font-family="Arial, Helvetica, sans-serif"
                font-size="11"
                letter-spacing="2"
            >
                ATIq UR REHMAN / ${number}
            </text>

        </g>


        <!-- TOP LABEL -->

        <text
            x="65"
            y="55"
            fill="#ffffff"
            fill-opacity=".48"
            font-family="Arial, Helvetica, sans-serif"
            font-size="12"
            font-weight="600"
            letter-spacing="3"
        >
            INTERIOR DESIGN / 3D VISUALIZATION
        </text>

        <text
            x="1135"
            y="55"
            text-anchor="end"
            fill="${accent}"
            font-family="Arial, Helvetica, sans-serif"
            font-size="12"
            font-weight="700"
            letter-spacing="3"
        >
            2026 / ${number}
        </text>

    </svg>
    `;

    return "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg);
}


/* =========================================================
   REALISTIC ARCHITECTURAL 2D FLOOR PLAN GENERATOR
   CAD / ARCHITECTURAL DRAWING STYLE
   Embedded SVG — No External Image Required
   ========================================================= */

function createFloorPlanVisual({
    title = "MODERN RESIDENCE",
    type = "2D FLOOR PLAN",
    accent = "#b08a52",
    number = "05"
}) {

    const uid = (
        title +
        type +
        Math.random().toString(36).slice(2, 8)
    )
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase();

    const svg = `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1200"
        height="800"
        viewBox="0 0 1200 800"
    >

        <defs>

            <pattern
                id="paperGrid-${uid}"
                width="25"
                height="25"
                patternUnits="userSpaceOnUse"
            >
                <path
                    d="M25 0H0V25"
                    fill="none"
                    stroke="#9da3a8"
                    stroke-opacity=".16"
                    stroke-width=".7"
                />
            </pattern>

            <filter
                id="paperShadow-${uid}"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
            >
                <feDropShadow
                    dx="0"
                    dy="10"
                    stdDeviation="14"
                    flood-color="#000000"
                    flood-opacity=".2"
                />
            </filter>

        </defs>


        <!-- PAPER -->

        <rect
            width="1200"
            height="800"
            fill="#e9e6df"
        />

        <rect
            x="35"
            y="30"
            width="1130"
            height="740"
            fill="#f7f5ef"
            stroke="#4d5155"
            stroke-width="2"
            filter="url(#paperShadow-${uid})"
        />

        <rect
            x="55"
            y="50"
            width="1090"
            height="700"
            fill="url(#paperGrid-${uid})"
        />


        <!-- HEADER -->

        <text
            x="85"
            y="88"
            fill="#25282b"
            font-family="Arial, Helvetica, sans-serif"
            font-size="13"
            font-weight="700"
            letter-spacing="3"
        >
            ATIq UR REHMAN
        </text>

        <text
            x="85"
            y="118"
            fill="#25282b"
            font-family="Arial, Helvetica, sans-serif"
            font-size="24"
            font-weight="800"
        >
            ${title}
        </text>

        <text
            x="85"
            y="142"
            fill="#666b70"
            font-family="Arial, Helvetica, sans-serif"
            font-size="11"
            letter-spacing="2"
        >
            ${type} • ARCHITECTURAL SPACE PLANNING
        </text>


        <!-- NORTH ARROW -->

        <g transform="translate(1060 95)">

            <circle
                cx="0"
                cy="0"
                r="32"
                fill="none"
                stroke="#565b60"
                stroke-width="1.5"
            />

            <path
                d="M0 -23L8 10L0 5L-8 10Z"
                fill="#292d30"
            />

            <text
                x="0"
                y="-38"
                text-anchor="middle"
                fill="#292d30"
                font-family="Arial"
                font-size="12"
                font-weight="700"
            >
                N
            </text>

        </g>


        <!-- MAIN FLOOR PLAN FRAME -->

        <g transform="translate(115 185)">

            <!-- OUTER WALL -->

            <rect
                x="0"
                y="0"
                width="790"
                height="480"
                fill="#ffffff"
                stroke="#292d30"
                stroke-width="14"
            />


            <!-- INNER ROOM AREAS -->

            <!-- LIVING -->

            <rect
                x="14"
                y="14"
                width="365"
                height="235"
                fill="#f9f9f7"
            />

            <!-- DINING -->

            <rect
                x="379"
                y="14"
                width="190"
                height="235"
                fill="#f4f3ef"
            />

            <!-- KITCHEN -->

            <rect
                x="569"
                y="14"
                width="207"
                height="235"
                fill="#f0efeb"
            />

            <!-- BEDROOM 01 -->

            <rect
                x="14"
                y="249"
                width="250"
                height="217"
                fill="#f8f8f6"
            />

            <!-- BEDROOM 02 -->

            <rect
                x="264"
                y="249"
                width="250"
                height="217"
                fill="#f8f8f6"
            />

            <!-- MASTER -->

            <rect
                x="514"
                y="249"
                width="262"
                height="217"
                fill="#f5f4f0"
            />


            <!-- INTERNAL WALLS -->

            <line
                x1="379"
                y1="0"
                x2="379"
                y2="249"
                stroke="#292d30"
                stroke-width="9"
            />

            <line
                x1="569"
                y1="0"
                x2="569"
                y2="249"
                stroke="#292d30"
                stroke-width="9"
            />

            <line
                x1="0"
                y1="249"
                x2="776"
                y2="249"
                stroke="#292d30"
                stroke-width="9"
            />

            <line
                x1="264"
                y1="249"
                x2="264"
                y2="480"
                stroke="#292d30"
                stroke-width="9"
            />

            <line
                x1="514"
                y1="249"
                x2="514"
                y2="480"
                stroke="#292d30"
                stroke-width="9"
            />


            <!-- LIVING ROOM FURNITURE -->

            <g transform="translate(70 70)">

                <!-- SOFA -->

                <rect
                    x="0"
                    y="0"
                    width="190"
                    height="55"
                    rx="7"
                    fill="#d9d6cf"
                    stroke="#55595d"
                    stroke-width="2"
                />

                <line
                    x1="45"
                    y1="0"
                    x2="45"
                    y2="55"
                    stroke="#777"
                    stroke-width="1"
                />

                <line
                    x1="95"
                    y1="0"
                    x2="95"
                    y2="55"
                    stroke="#777"
                    stroke-width="1"
                />

                <line
                    x1="145"
                    y1="0"
                    x2="145"
                    y2="55"
                    stroke="#777"
                    stroke-width="1"
                />

                <!-- ARMCHAIRS -->

                <rect
                    x="15"
                    y="90"
                    width="58"
                    height="58"
                    rx="8"
                    fill="#d3d0c9"
                    stroke="#55595d"
                    stroke-width="2"
                />

                <rect
                    x="165"
                    y="90"
                    width="58"
                    height="58"
                    rx="8"
                    fill="#d3d0c9"
                    stroke="#55595d"
                    stroke-width="2"
                />

                <!-- COFFEE TABLE -->

                <ellipse
                    cx="120"
                    cy="120"
                    rx="55"
                    ry="28"
                    fill="#dedbd4"
                    stroke="#55595d"
                    stroke-width="2"
                />

            </g>


            <!-- LIVING LABEL -->

            <text
                x="195"
                y="35"
                text-anchor="middle"
                fill="#33373a"
                font-family="Arial"
                font-size="12"
                font-weight="700"
                letter-spacing="2"
            >
                LIVING ROOM
            </text>

            <text
                x="195"
                y="52"
                text-anchor="middle"
                fill="#85898d"
                font-family="Arial"
                font-size="9"
            >
                18'-6" × 12'-0"
            </text>


            <!-- DINING TABLE -->

            <g transform="translate(415 65)">

                <ellipse
                    cx="65"
                    cy="55"
                    rx="55"
                    ry="34"
                    fill="#d6d2ca"
                    stroke="#55595d"
                    stroke-width="2"
                />

                <circle cx="65" cy="15" r="8" fill="#c4c0b8"/>
                <circle cx="65" cy="95" r="8" fill="#c4c0b8"/>
                <circle cx="10" cy="55" r="8" fill="#c4c0b8"/>
                <circle cx="120" cy="55" r="8" fill="#c4c0b8"/>

            </g>

            <text
                x="474"
                y="220"
                text-anchor="middle"
                fill="#33373a"
                font-family="Arial"
                font-size="11"
                font-weight="700"
                letter-spacing="2"
            >
                DINING
            </text>


            <!-- KITCHEN COUNTER -->

            <g>

                <rect
                    x="585"
                    y="35"
                    width="170"
                    height="32"
                    fill="#c8c4bc"
                    stroke="#4f5357"
                    stroke-width="2"
                />

                <rect
                    x="585"
                    y="67"
                    width="32"
                    height="145"
                    fill="#c8c4bc"
                    stroke="#4f5357"
                    stroke-width="2"
                />

                <rect
                    x="617"
                    y="67"
                    width="138"
                    height="32"
                    fill="#c8c4bc"
                    stroke="#4f5357"
                    stroke-width="2"
                />

                <!-- SINK -->

                <rect
                    x="645"
                    y="43"
                    width="45"
                    height="18"
                    rx="4"
                    fill="#aeb3b5"
                    stroke="#555"
                    stroke-width="2"
                />

                <!-- STOVE -->

                <circle cx="720" cy="50" r="7" fill="#555"/>
                <circle cx="738" cy="50" r="7" fill="#555"/>

                <text
                    x="675"
                    y="180"
                    text-anchor="middle"
                    fill="#44484b"
                    font-family="Arial"
                    font-size="10"
                    font-weight="700"
                >
                    KITCHEN
                </text>

            </g>


            <!-- BEDROOM 1 -->

            <g transform="translate(45 285)">

                <!-- BED -->

                <rect
                    x="35"
                    y="35"
                    width="145"
                    height="95"
                    rx="5"
                    fill="#dedbd4"
                    stroke="#55595d"
                    stroke-width="2"
                />

                <rect
                    x="48"
                    y="45"
                    width="58"
                    height="32"
                    fill="#f5f4ef"
                    stroke="#777"
                />

                <rect
                    x="110"
                    y="45"
                    width="58"
                    height="32"
                    fill="#f5f4ef"
                    stroke="#777"
                />

                <!-- SIDE TABLES -->

                <rect
                    x="8"
                    y="50"
                    width="20"
                    height="35"
                    fill="#c9c5bd"
                    stroke="#666"
                />

                <rect
                    x="187"
                    y="50"
                    width="20"
                    height="35"
                    fill="#c9c5bd"
                    stroke="#666"
                />

            </g>

            <text
                x="139"
                y="445"
                text-anchor="middle"
                fill="#33373a"
                font-family="Arial"
                font-size="11"
                font-weight="700"
                letter-spacing="2"
            >
                BEDROOM 01
            </text>


            <!-- BEDROOM 2 -->

            <g transform="translate(295 285)">

                <rect
                    x="35"
                    y="35"
                    width="145"
                    height="95"
                    rx="5"
                    fill="#dedbd4"
                    stroke="#55595d"
                    stroke-width="2"
                />

                <rect
                    x="48"
                    y="45"
                    width="58"
                    height="32"
                    fill="#f5f4ef"
                    stroke="#777"
                />

                <rect
                    x="110"
                    y="45"
                    width="58"
                    height="32"
                    fill="#f5f4ef"
                    stroke="#777"
                />

                <rect
                    x="8"
                    y="50"
                    width="20"
                    height="35"
                    fill="#c9c5bd"
                    stroke="#666"
                />

                <rect
                    x="187"
                    y="50"
                    width="20"
                    height="35"
                    fill="#c9c5bd"
                    stroke="#666"
                />

            </g>

            <text
                x="389"
                y="445"
                text-anchor="middle"
                fill="#33373a"
                font-family="Arial"
                font-size="11"
                font-weight="700"
                letter-spacing="2"
            >
                BEDROOM 02
            </text>


            <!-- MASTER BEDROOM -->

            <g transform="translate(550 285)">

                <rect
                    x="28"
                    y="30"
                    width="165"
                    height="105"
                    rx="5"
                    fill="#dedbd4"
                    stroke="#55595d"
                    stroke-width="2"
                />

                <rect
                    x="42"
                    y="40"
                    width="66"
                    height="35"
                    fill="#f5f4ef"
                    stroke="#777"
                />

                <rect
                    x="113"
                    y="40"
                    width="66"
                    height="35"
                    fill="#f5f4ef"
                    stroke="#777"
                />

                <rect
                    x="205"
                    y="45"
                    width="35"
                    height="70"
                    fill="#c5c1b9"
                    stroke="#666"
                />

            </g>

            <text
                x="645"
                y="445"
                text-anchor="middle"
                fill="#33373a"
                font-family="Arial"
                font-size="11"
                font-weight="700"
                letter-spacing="2"
            >
                MASTER BEDROOM
            </text>


            <!-- DOOR OPENINGS -->

            <g
                fill="none"
                stroke="#777"
                stroke-width="2"
            >

                <!-- Living door -->

                <path d="M365 249 A65 65 0 0 0 300 184"/>
                <line x1="365" y1="249" x2="300" y2="249"/>

                <!-- Dining door -->

                <path d="M570 249 A60 60 0 0 1 630 189"/>
                <line x1="570" y1="249" x2="630" y2="249"/>

                <!-- Bedroom 1 -->

                <path d="M264 330 A55 55 0 0 0 209 275"/>
                <line x1="264" y1="330" x2="264" y2="275"/>

                <!-- Bedroom 2 -->

                <path d="M514 330 A55 55 0 0 0 459 275"/>
                <line x1="514" y1="330" x2="514" y2="275"/>

                <!-- Master -->

                <path d="M514 390 A60 60 0 0 1 574 330"/>
                <line x1="514" y1="390" x2="574" y2="390"/>

            </g>


            <!-- WINDOWS -->

            <g
                stroke="#4c8aa0"
                stroke-width="5"
            >

                <line x1="55" y1="0" x2="150" y2="0"/>
                <line x1="430" y1="0" x2="515" y2="0"/>
                <line x1="640" y1="480" x2="720" y2="480"/>
                <line x1="0" y1="360" x2="0" y2="425"/>

            </g>


            <!-- DIMENSION LINES -->

            <g
                fill="none"
                stroke="#777c80"
                stroke-width="1"
            >

                <line x1="0" y1="-28" x2="790" y2="-28"/>
                <line x1="0" y1="-35" x2="0" y2="-21"/>
                <line x1="790" y1="-35" x2="790" y2="-21"/>

                <line x1="-28" y1="0" x2="-28" y2="480"/>
                <line x1="-35" y1="0" x2="-21" y2="0"/>
                <line x1="-35" y1="480" x2="-21" y2="480"/>

            </g>

            <text
                x="395"
                y="-38"
                text-anchor="middle"
                fill="#656a6e"
                font-family="Arial"
                font-size="10"
            >
                42'-0"
            </text>

            <text
                x="-42"
                y="240"
                text-anchor="middle"
                transform="rotate(-90 -42 240)"
                fill="#656a6e"
                font-family="Arial"
                font-size="10"
            >
                28'-0"
            </text>


            <!-- WALL DETAIL MARKERS -->

            <g
                fill="#44484b"
                font-family="Arial"
                font-size="7"
            >

                <text x="15" y="12">W01</text>
                <text x="382" y="12">W02</text>
                <text x="572" y="12">W03</text>
                <text x="16" y="262">W04</text>

            </g>

        </g>


        <!-- TITLE BLOCK -->

        <g transform="translate(935 575)">

            <rect
                x="0"
                y="0"
                width="190"
                height="115"
                fill="#f7f5ef"
                stroke="#55595d"
                stroke-width="1.5"
            />

            <text
                x="12"
                y="22"
                fill="#33373a"
                font-family="Arial"
                font-size="10"
                font-weight="700"
            >
                PROJECT
            </text>

            <text
                x="12"
                y="40"
                fill="#55595d"
                font-family="Arial"
                font-size="11"
            >
                ${title}
            </text>

            <line
                x1="12"
                y1="50"
                x2="178"
                y2="50"
                stroke="#aaa"
            />

            <text
                x="12"
                y="68"
                fill="#33373a"
                font-family="Arial"
                font-size="9"
                font-weight="700"
            >
                DRAWING
            </text>

            <text
                x="12"
                y="84"
                fill="#55595d"
                font-family="Arial"
                font-size="10"
            >
                ${type}
            </text>

            <text
                x="155"
                y="68"
                fill="#33373a"
                font-family="Arial"
                font-size="9"
                font-weight="700"
            >
                NO.
            </text>

            <text
                x="155"
                y="84"
                fill="${accent}"
                font-family="Arial"
                font-size="12"
                font-weight="800"
            >
                ${number}
            </text>

        </g>


        <!-- FOOTER -->

        <text
            x="85"
            y="725"
            fill="#5f6468"
            font-family="Arial, Helvetica, sans-serif"
            font-size="10"
            letter-spacing="2"
        >
            ARCHITECTURAL PLANNING • SPACE ZONING • FURNITURE LAYOUT
        </text>

        <text
            x="1115"
            y="725"
            text-anchor="end"
            fill="${accent}"
            font-family="Arial, Helvetica, sans-serif"
            font-size="10"
            font-weight="700"
            letter-spacing="2"
        >
            PORTFOLIO / ${number}
        </text>

    </svg>
    `;

    return "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg);
}


/* =========================================================
   PORTFOLIO PROJECTS
   ========================================================= */

const portfolioProjects = [

    /* =====================================================
       WEB DEVELOPMENT
       ===================================================== */

    {
        id: "muhammadi-steel-fiber-glass",
        title: "Muhammadi Steel & Fiber Glass",
        category: "web",
        description:
            "Professional business website developed for Muhammadi Steel & Fiber Glass.",
        image:
            "https://image.thum.io/get/width/1200/crop/800/https://www.ironandfiberglass.site/",
        projectUrl:
            "https://www.ironandfiberglass.site/",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design"
        ],
        featured: true,
        published: true
    },


    {
        id: "fahim-photography-films",
        title: "FAHIM PHOTOGRAPHY & FILMS",
        category: "web",
        description:
            "Professional photography and film portfolio website showcasing creative visual work, photography services and cinematic presentation.",
        image:
            "https://image.thum.io/get/width/1200/crop/800/https://anonymous-boy332.github.io/Photo-White/",
        projectUrl:
            "https://anonymous-boy332.github.io/Photo-White/",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design"
        ],
        featured: true,
        published: true
    },


    /* =====================================================
       E-COMMERCE
       ===================================================== */

    {
        id: "premium-timepieces",
        title: "Premium Timepieces",
        category: "ecommerce",
        description:
            "Premium e-commerce store developed for showcasing and selling luxury timepieces with a modern shopping experience.",
        image:
            "https://image.thum.io/get/width/1200/crop/800/https://anonymous-boy332.github.io/premium-timepieces/index.html",
        projectUrl:
            "https://anonymous-boy332.github.io/premium-timepieces/index.html",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "E-Commerce",
            "Responsive Design"
        ],
        featured: true,
        published: true
    },


    /* =====================================================
       GRAPHIC DESIGN 01
       ===================================================== */

    {
        id: "aurelia-brand-identity",
        title: "Aurelia Brand Identity",
        category: "graphic",
        description:
            "Premium luxury brand identity concept combining sophisticated typography, visual systems, logo direction and high-end brand positioning.",
        image:
            createCampaignVisual({
                brand: "AURELIA",
                title: "IDENTITY",
                subtitle: "ELEGANCE • FORM • PURPOSE",
                accent: "#f5d76e",
                secondary: "#7c3aed",
                label: "BRAND IDENTITY",
                symbol: "A",
                number: "01"
            }),
        projectUrl: "",
        technologies: [
            "Logo Design",
            "Brand Identity",
            "Typography",
            "Visual Design"
        ],
        featured: true,
        published: true
    },


    /* =====================================================
       GRAPHIC DESIGN 02
       ===================================================== */

    {
        id: "nova-coffee-packaging",
        title: "Nova Coffee Packaging",
        category: "graphic",
        description:
            "Premium coffee packaging concept combining strong typography, sophisticated product presentation, modern composition and commercial visual direction.",
        image:
            createCampaignVisual({
                brand: "NOVA COFFEE",
                title: "ROASTED",
                subtitle: "BOLD • RICH • ORIGINAL",
                accent: "#f59e0b",
                secondary: "#78350f",
                label: "PACKAGING DESIGN",
                symbol: "N",
                number: "02"
            }),
        projectUrl: "",
        technologies: [
            "Packaging Design",
            "Typography",
            "Art Direction",
            "Print Design"
        ],
        featured: true,
        published: true
    },


    /* =====================================================
       GRAPHIC DESIGN 03
       ===================================================== */

    {
        id: "vortex-gaming-poster",
        title: "Vortex Gaming Poster",
        category: "graphic",
        description:
            "High-impact gaming poster concept built around futuristic typography, dramatic lighting, energetic composition and digital visual direction.",
        image:
            createCampaignVisual({
                brand: "VORTEX",
                title: "LEVEL UP",
                subtitle: "PLAY • COMPETE • DOMINATE",
                accent: "#22d3ee",
                secondary: "#4f46e5",
                label: "POSTER DESIGN",
                symbol: "V",
                number: "03"
            }),
        projectUrl: "",
        technologies: [
            "Poster Design",
            "Digital Art",
            "Typography",
            "Creative Direction"
        ],
        featured: true,
        published: true
    },


    /* =====================================================
       GRAPHIC DESIGN 04
       ===================================================== */

    {
        id: "lumiere-fashion-campaign",
        title: "Lumière Fashion Campaign",
        category: "graphic",
        description:
            "Luxury fashion campaign concept focused on editorial typography, refined composition, modern art direction and premium visual storytelling.",
        image:
            createCampaignVisual({
                brand: "LUMIÈRE",
                title: "ESSENCE",
                subtitle: "MODERN • REFINED • TIMELESS",
                accent: "#f9fafb",
                secondary: "#831843",
                label: "FASHION CAMPAIGN",
                symbol: "L",
                number: "04"
            }),
        projectUrl: "",
        technologies: [
            "Campaign Design",
            "Editorial Design",
            "Typography",
            "Art Direction"
        ],
        featured: false,
        published: true
    },


    /* =====================================================
       GRAPHIC DESIGN 05
       ===================================================== */

    {
        id: "urban-roast-promotion",
        title: "Urban Roast Promotional Design",
        category: "graphic",
        description:
            "Premium restaurant promotional creative designed with bold commercial typography, strong visual hierarchy and modern advertising direction.",
        image:
            createCampaignVisual({
                brand: "URBAN ROAST",
                title: "FRESH",
                subtitle: "BREWED • SERVED • LOVED",
                accent: "#fb923c",
                secondary: "#9a3412",
                label: "PROMOTIONAL DESIGN",
                symbol: "U",
                number: "05"
            }),
        projectUrl: "",
        technologies: [
            "Advertising Design",
            "Poster Design",
            "Typography",
            "Branding"
        ],
        featured: false,
        published: true
    },


    /* =====================================================
       GRAPHIC DESIGN 06
       ===================================================== */

    {
        id: "techcore-product-poster",
        title: "TechCore Product Poster",
        category: "graphic",
        description:
            "Futuristic technology advertising concept designed for premium product promotion, digital campaigns and modern brand communication.",
        image:
            createCampaignVisual({
                brand: "TECHCORE",
                title: "NEXT",
                subtitle: "INNOVATION • POWER • FUTURE",
                accent: "#00d9ff",
                secondary: "#2563eb",
                label: "PRODUCT ADVERTISING",
                symbol: "T",
                number: "06"
            }),
        projectUrl: "",
        technologies: [
            "Product Design",
            "Advertising",
            "Digital Art",
            "Visual Direction"
        ],
        featured: false,
        published: true
    },


    /* =====================================================
       SOCIAL MEDIA 01
       ===================================================== */

    {
        id: "freshbites-social-media-campaign",
        title: "FreshBites Social Media Campaign",
        category: "social",
        description:
            "Creative social media campaign designed for a healthy food brand, focusing on engagement, brand awareness and consistent visual communication.",
        image:
            createSocialVisual({
                brand: "FRESHBITES",
                title: "HEALTHY",
                subtitle: "FOOD • BETTER • YOU",
                accent: "#22c55e",
                secondary: "#0f766e",
                icon: "FRESH"
            }),
        projectUrl: "",
        technologies: [
            "Instagram",
            "Facebook",
            "Social Media Design",
            "Content Creation"
        ],
        featured: true,
        published: true
    },


    /* =====================================================
       SOCIAL MEDIA 02
       ===================================================== */

    {
        id: "nextgen-tech-social-campaign",
        title: "NextGen Tech Social Media Campaign",
        category: "social",
        description:
            "Modern social media campaign for a technology brand, designed to increase digital reach, product awareness and audience engagement.",
        image:
            createSocialVisual({
                brand: "NEXTGEN TECH",
                title: "UPGRADE",
                subtitle: "YOUR DIGITAL LIFE",
                accent: "#00d9ff",
                secondary: "#4f46e5",
                icon: "NEXT"
            }),
        projectUrl: "",
        technologies: [
            "Instagram",
            "Facebook",
            "LinkedIn",
            "Social Media Design"
        ],
        featured: true,
        published: true
    },


    /* =====================================================
       SOCIAL MEDIA 03
       ===================================================== */

    {
        id: "stylehub-social-media-campaign",
        title: "StyleHub Social Media Campaign",
        category: "social",
        description:
            "Fashion and lifestyle social media campaign featuring premium branded visuals, promotional content and consistent social identity.",
        image:
            createSocialVisual({
                brand: "STYLEHUB",
                title: "YOUR STYLE",
                subtitle: "YOUR PASSION • YOUR IDENTITY",
                accent: "#f59e0b",
                secondary: "#be185d",
                icon: "STYLE"
            }),
        projectUrl: "",
        technologies: [
            "Instagram",
            "Facebook",
            "Social Media Design",
            "Branding"
        ],
        featured: true,
        published: true
    },


    /* =====================================================
       SOCIAL MEDIA 04
       ===================================================== */

    {
        id: "luxeaura-social-campaign",
        title: "LuxeAura Luxury Campaign",
        category: "social",
        description:
            "Luxury lifestyle social media campaign created around premium visual direction, product presentation and high-end brand positioning.",
        image:
            createSocialVisual({
                brand: "LUXEAURA",
                title: "TIMELESS",
                subtitle: "LUXURY • STYLE • ELEGANCE",
                accent: "#f5d76e",
                secondary: "#7c2d12",
                icon: "LUXE"
            }),
        projectUrl: "",
        technologies: [
            "Instagram",
            "Luxury Branding",
            "Campaign Design",
            "Content Creation"
        ],
        featured: false,
        published: true
    },


    /* =====================================================
       SOCIAL MEDIA 05
       ===================================================== */

    {
        id: "primenest-real-estate-social",
        title: "PrimeNest Real Estate Campaign",
        category: "social",
        description:
            "Real estate social media campaign designed to present properties through clean promotional creatives, informative content and lead-focused visuals.",
        image:
            createSocialVisual({
                brand: "PRIMENEST",
                title: "FIND HOME",
                subtitle: "LIVE • INVEST • BELONG",
                accent: "#38bdf8",
                secondary: "#0369a1",
                icon: "HOME"
            }),
        projectUrl: "",
        technologies: [
            "Instagram",
            "Facebook",
            "Real Estate Marketing",
            "Social Media Design"
        ],
        featured: false,
        published: true
    },


    /* =====================================================
       SOCIAL MEDIA 06
       ===================================================== */

    {
        id: "velora-motors-social-campaign",
        title: "Velora Motors Social Campaign",
        category: "social",
        description:
            "Automotive social media campaign built around bold product visuals, promotional creatives and premium digital brand communication.",
        image:
            createSocialVisual({
                brand: "VELORA MOTORS",
                title: "DRIVE",
                subtitle: "POWER • PERFORMANCE • PRECISION",
                accent: "#ef4444",
                secondary: "#7f1d1d",
                icon: "AUTO"
            }),
        projectUrl: "",
        technologies: [
            "Instagram",
            "Facebook",
            "Automotive",
            "Campaign Design"
        ],
        featured: false,
        published: true
    },


    /* =====================================================
       INTERIOR / 3D 01
       ===================================================== */

    {
        id: "luxury-modern-living-room",
        title: "Luxury Modern Living Room",
        category: "interior",
        description:
            "Premium 3D interior visualization featuring contemporary furniture composition, architectural lighting, material balance and refined residential space planning.",
        image:
            createInteriorVisual({
                room: "RESIDENTIAL INTERIOR",
                title: "MODERN LIVING",
                subtitle: "LUXURY • BALANCE • COMFORT",
                accent: "#d8b36a",
                secondary: "#2563eb",
                type: "3D INTERIOR",
                number: "01"
            }),
        projectUrl: "",
        technologies: [
            "3D Visualization",
            "Interior Design",
            "Space Planning",
            "Lighting Design"
        ],
        featured: true,
        published: true
    },


    /* =====================================================
       INTERIOR / 3D 02
       ===================================================== */

    {
        id: "premium-bedroom-interior",
        title: "Premium Bedroom Interior",
        category: "interior",
        description:
            "Elegant 3D bedroom visualization focused on warm architectural lighting, premium textures, furniture proportions and sophisticated modern atmosphere.",
        image:
            createInteriorVisual({
                room: "MASTER BEDROOM",
                title: "SOFT LUXURY",
                subtitle: "WARM • MINIMAL • REFINED",
                accent: "#e7c98b",
                secondary: "#7c3aed",
                type: "3D VISUALIZATION",
                number: "02"
            }),
        projectUrl: "",
        technologies: [
            "3D Interior",
            "Material Design",
            "Lighting",
            "Furniture Planning"
        ],
        featured: true,
        published: true
    },


    /* =====================================================
       INTERIOR / 3D 03
       ===================================================== */

    {
        id: "modern-office-interior",
        title: "Modern Executive Office",
        category: "interior",
        description:
            "High-end executive office visualization combining contemporary architecture, functional workspace planning, premium finishes and professional lighting.",
        image:
            createInteriorVisual({
                room: "COMMERCIAL INTERIOR",
                title: "EXECUTIVE OFFICE",
                subtitle: "POWER • FOCUS • PRECISION",
                accent: "#00d9ff",
                secondary: "#2563eb",
                type: "3D OFFICE",
                number: "03"
            }),
        projectUrl: "",
        technologies: [
            "Commercial Interior",
            "3D Visualization",
            "Space Planning",
            "Architectural Design"
        ],
        featured: true,
        published: true
    },


    /* =====================================================
       INTERIOR / 3D 04
       ===================================================== */

    {
        id: "restaurant-interior-concept",
        title: "Luxury Restaurant Interior",
        category: "interior",
        description:
            "Atmospheric restaurant interior visualization featuring dramatic lighting, elegant materials, premium furniture and a sophisticated hospitality environment.",
        image:
            createInteriorVisual({
                room: "HOSPITALITY DESIGN",
                title: "URBAN DINING",
                subtitle: "ATMOSPHERE • STYLE • EXPERIENCE",
                accent: "#fb923c",
                secondary: "#9a3412",
                type: "3D RESTAURANT",
                number: "04"
            }),
        projectUrl: "",
        technologies: [
            "Hospitality Design",
            "3D Rendering",
            "Lighting Design",
            "Interior Styling"
        ],
        featured: false,
        published: true
    },


    /* =====================================================
   INTERIOR / 3D ARCHITECTURAL VISUALIZATION
   ===================================================== */

{
    id: "luxury-bungalow-interior",
    title: "Luxury Banglow Interior",
    category: "interior",
    description:
        "Premium residential banglow interior visualization featuring modern architecture, elegant furniture, realistic materials and sophisticated spatial planning.",
    image:
        "https://www.streif.de/3_traumhausbungalow-2-satteldach-innen-TH-B-SD-107.jpg",
    projectUrl: "",
    technologies: [
        "3D Interior Visualization",
        "Residential Design",
        "Space Planning",
        "Architectural Visualization"
    ],
    featured: true,
    published: true
},

{
    id: "modern-executive-office",
    title: "Modern Executive Office",
    category: "interior",
    description:
        "Contemporary executive office visualization combining functional workspace planning, premium furniture, architectural lighting and refined materials.",
    image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/67fff2156610325.636a4d8ee9639.jpg",
    projectUrl: "",
    technologies: [
        "Office Interior",
        "3D Visualization",
        "Space Planning",
        "Lighting Design"
    ],
    featured: true,
    published: true
},

{
    id: "luxury-fashion-boutique",
    title: "Luxury Fashion Boutique",
    category: "interior",
    description:
        "High-end fashion boutique visualization featuring premium product displays, elegant furniture, marble finishes, architectural lighting and luxury retail styling.",
    image:
        "https://i.pinimg.com/originals/00/00/00/00000000000000000000000000000000.jpg",
    projectUrl: "",
    technologies: [
        "Retail Interior",
        "3D Visualization",
        "Interior Styling",
        "Lighting Design"
    ],
    featured: true,
    published: true
},

{
    id: "premium-restaurant-interior",
    title: "Premium Restaurant Interior",
    category: "interior",
    description:
        "Luxury restaurant interior visualization designed around atmospheric lighting, premium materials, sophisticated furniture and modern hospitality architecture.",
    image:
        "https://cdn.prod.website-files.com/663252f264529454bf5317d2/67dab52a240cab048b9b0209_67a37b2c04a8beaf0027369a_673a7bca68dbde8a8adeef66_Kitchen1.webp",
    projectUrl: "",
    technologies: [
        "Restaurant Design",
        "3D Visualization",
        "Hospitality Interior",
        "Lighting Design"
    ],
    featured: true,
    published: true
},

{
    id: "modern-master-bedroom",
    title: "Modern Master Bedroom",
    category: "interior",
    description:
        "Modern luxury bedroom visualization featuring balanced furniture placement, warm architectural lighting, premium textures and contemporary interior detailing.",
    image:
        "https://cdn.renderhub.com/iid-studio/modern-bedroom-interior-scene-2/modern-bedroom-interior-scene-2-08.jpg",
    projectUrl: "",
    technologies: [
        "Bedroom Interior",
        "3D Visualization",
        "Furniture Planning",
        "Material Design"
    ],
    featured: true,
    published: true
},

{
    id: "modern-residential-floor-plan",
    title: "Modern Residential Floor Plan",
    category: "interior",
    description:
        "Professional 2D architectural floor plan showing room zoning, circulation, furniture placement and functional residential space planning.",
    image:
        "https://i.ibb.co/XfNsH6Zq/IMG-20260829-WA0007.jpg",
    projectUrl: "",
    technologies: [
        "2D Floor Plan",
        "Architectural Planning",
        "Space Planning",
        "Furniture Layout"
    ],
    featured: true,
    published: true
},

/* =====================================================
   DIGITAL MARKETING 01
   ===================================================== */
{
    id: "seo-search-growth-campaign",
    title: "SEO & Search Growth Campaign",
    category: "digital",
    description:
        "Data-driven SEO campaign focused on increasing organic visibility, keyword rankings, search traffic and long-term website growth.",
    image:
        "https://image.thum.io/get/width/1200/crop/800/https://www.google.com/",
    projectUrl: "",
    technologies: [
        "SEO",
        "Keyword Research",
        "Google Search Console",
        "Organic Growth",
        "Content Strategy"
    ],
    featured: true,
    published: true
},

/* =====================================================
   DIGITAL MARKETING 02
   ===================================================== */
{
    id: "social-media-marketing-campaign",
    title: "Social Media Marketing Campaign",
    category: "digital",
    description:
        "Complete social media marketing campaign designed to build brand awareness, increase engagement and create consistent digital brand communication.",
    image:
        "https://image.thum.io/get/width/1200/crop/800/https://www.instagram.com/",
    projectUrl: "",
    technologies: [
        "Social Media Marketing",
        "Instagram Marketing",
        "Facebook Marketing",
        "Content Strategy",
        "Audience Growth"
    ],
    featured: true,
    published: true
},

/* =====================================================
   DIGITAL MARKETING 03
   ===================================================== */
{
    id: "google-ads-performance-campaign",
    title: "Google Ads Performance Campaign",
    category: "digital",
    description:
        "Performance-focused paid advertising campaign built around targeted keywords, conversion optimization, campaign tracking and measurable advertising results.",
    image:
        "https://image.thum.io/get/width/1200/crop/800/https://ads.google.com/",
    projectUrl: "",
    technologies: [
        "Google Ads",
        "PPC Advertising",
        "Keyword Targeting",
        "Conversion Optimization",
        "Campaign Analytics"
    ],
    featured: true,
    published: true
},

/* =====================================================
   DIGITAL MARKETING 04
   ===================================================== */
{
    id: "content-marketing-strategy",
    title: "Content Marketing Strategy",
    category: "digital",
    description:
        "Strategic content marketing project combining content planning, audience research, brand storytelling, SEO content and multi-channel distribution.",
    image:
        "https://image.thum.io/get/width/1200/crop/800/https://www.hubspot.com/",
    projectUrl: "",
    technologies: [
        "Content Marketing",
        "Content Strategy",
        "SEO Content",
        "Brand Storytelling",
        "Content Planning"
    ],
    featured: true,
    published: true
},

/* =====================================================
   DIGITAL MARKETING 05
   ===================================================== */
{
    id: "email-marketing-campaign",
    title: "Email Marketing Campaign",
    category: "digital",
    description:
        "Conversion-focused email marketing campaign designed around audience segmentation, promotional messaging, engagement tracking and customer retention.",
    image:
        "https://image.thum.io/get/width/1200/crop/800/https://mailchimp.com/",
    projectUrl: "",
    technologies: [
        "Email Marketing",
        "Campaign Strategy",
        "Audience Segmentation",
        "Marketing Automation",
        "Conversion Tracking"
    ],
    featured: false,
    published: true
},

/* =====================================================
   DIGITAL MARKETING 06
   ===================================================== */
{
    id: "digital-marketing-analytics-dashboard",
    title: "Digital Marketing Analytics",
    category: "digital",
    description:
        "Comprehensive digital marketing analytics project showcasing traffic sources, campaign performance, conversions, audience behavior and measurable business growth.",
    image:
        "https://image.thum.io/get/width/1200/crop/800/https://analytics.google.com/",
    projectUrl: "",
    technologies: [
        "Google Analytics",
        "Marketing Analytics",
        "Data Visualization",
        "Conversion Tracking",
        "Performance Reporting"
    ],
    featured: true,
    published: true
},

/* ==========================
   SAAS PROJECTS
========================== */

{
  id: "synvora-ai",
  title: "Synvora AI",
  category: "saas",
  type: "AI-Powered SaaS Ecosystem",
  published: true,
  description:
    "Synvora AI is a premium AI-powered SaaS ecosystem designed to bring intelligent automation, business management, creative AI workflows and enterprise operations into one unified digital platform. The ecosystem combines an advanced Business OS with CRM, Finance, Inventory, Employee Management, Sales, Invoices, Reports & Analytics, Automation and AI Business Advisor capabilities. Its broader AI platform architecture is designed to support AI-powered generation, autonomous AI Workflow Agents, persistent task and workflow execution, intelligent business assistance and an advanced AI Code Studio for AI-assisted software development. Synvora AI is built around a scalable SaaS architecture with centralized administration, company workspaces, role-based permissions, account security, team management, analytics and modular business operations. The product concept focuses on transforming complex business processes into streamlined, intelligent and highly automated digital workflows through a premium futuristic enterprise experience.",
  image:
    "https://placehold.co/1200x800/070b14/00AEEF?text=Synvora+AI"
},

{
  id: "business-os",
  title: "Business OS",
  category: "saas",
  type: "Enterprise Business Management SaaS",
  published: true,
  description:
    "Business OS is an enterprise-focused SaaS management environment designed to centralize the complete operational side of a modern company. The platform brings Finance, CRM, Inventory, Employees & HR, Sales, Invoices, Reports & Analytics and business operations into a unified workspace. It provides company workspace management, company settings, team permissions, account security, employee management, transactions, expenses, invoices and operational dashboards. The system is designed to give business owners and teams a centralized command center where financial activity, customers, employees, inventory, sales and company performance can be monitored and managed efficiently. Its modular architecture allows individual business operations to evolve independently while remaining connected through a unified Business OS experience.",
  image:
    "https://placehold.co/1200x800/070b14/FFD700?text=Business+OS"
},

{
  id: "ai-workflow-agent",
  title: "AI Workflow Agent",
  category: "saas",
  type: "Autonomous AI Workflow Platform",
  published: true,
  description:
    "AI Workflow Agent is an advanced autonomous AI SaaS platform concept focused on intelligent task execution, workflow automation and AI agent orchestration. The platform is designed to allow users to create AI agents, define workflows, execute multi-step tasks, monitor live runs and maintain persistent workflow history. Its architecture includes task management, workflow execution, tool integrations, files, schedules, activity tracking, human approval workflows and secure credential management. The system is designed around an extensible plugin and tool architecture that enables AI agents to interact with external services and perform practical business operations. With background execution, streaming activity logs and persistent run management, the platform transforms AI from a simple conversational interface into an autonomous digital workforce capable of executing structured business workflows.",
  image:
    "https://placehold.co/1200x800/070b14/00AEEF?text=AI+Workflow+Agent"
},

{
  id: "ai-code-studio",
  title: "AI Code Studio",
  category: "saas",
  type: "AI Development Platform",
  published: true,
  description:
    "AI Code Studio is an advanced AI-powered development environment designed to combine professional software development tools with intelligent coding assistance. The platform concept includes a split-screen development workspace with an AI-assisted code editor and live application preview, multi-file project management, AI code generation, intelligent editing, debugging and development workflows. It is designed to support modern development frameworks while allowing AI agents to understand project structure, modify multiple files, identify issues and assist with implementation. The platform can evolve into a complete AI coding workspace where developers can generate applications, test changes through live previews, debug implementations, manage project files and export complete projects. AI Code Studio represents the development-focused side of the broader Synvora AI ecosystem.",
  image:
    "https://placehold.co/1200x800/070b14/00AEEF?text=AI+Code+Studio"
},

{
  id: "crm-management-platform",
  title: "CRM Management Platform",
  category: "saas",
  type: "Customer Relationship Management SaaS",
  published: true,
  description:
    "CRM Management Platform is a modern SaaS customer relationship management environment designed to organize customer information and strengthen business relationships through a centralized workspace. The platform includes CRM dashboards, customer statistics, searchable customer records, customer profiles, notes, activities and relationship history. It is designed to provide businesses with a structured view of their customer base while making important customer information accessible from a single operational interface. The system can support customer segmentation, active and inactive customer tracking, new customer insights, sales-related information and ongoing customer activity. Its modular architecture allows the CRM to integrate naturally with Sales, Finance, Invoices, Business Analytics and AI-powered business assistance.",
  image:
    "https://placehold.co/1200x800/070b14/FFD700?text=CRM+Platform"
},

{
  id: "enterprise-admin-panel",
  title: "Enterprise Admin Panel",
  category: "saas",
  type: "Enterprise SaaS Administration",
  published: true,
  description:
    "Enterprise Admin Panel is a centralized SaaS administration environment designed to control and monitor the complete platform ecosystem from a secure management layer. The system is designed around administrative control over users, companies, workspaces, teams, permissions, employees, security, analytics and platform operations. It provides the foundation for managing multi-company SaaS environments while maintaining role-based access and controlled permissions across different organizational levels. The administration architecture is intended to support scalable SaaS operations, account management, workspace oversight, security controls, business activity monitoring and centralized platform governance. As part of a larger enterprise SaaS ecosystem, the Admin Panel provides the operational control layer required to manage complex business applications at scale.",
  image:
    "https://placehold.co/1200x800/070b14/00AEEF?text=Enterprise+Admin"
}

];