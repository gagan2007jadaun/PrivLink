import {
    Inter,
    Playfair_Display,
    Roboto,
    Lato,
    Montserrat,
    Open_Sans,
    Poppins,
    Raleway,
    Oswald,
    Merriweather,
    Nunito,
    Ubuntu,
    Dancing_Script,
    Lobster,
    Pacifico,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
export const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-roboto" });
export const lato = Lato({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-lato" });
export const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
export const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });
export const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"], variable: "--font-poppins" });
export const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
export const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
export const merriweather = Merriweather({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-merriweather" });
export const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
export const ubuntu = Ubuntu({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-ubuntu" });
export const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing-script" });
export const lobster = Lobster({ weight: ["400"], subsets: ["latin"], variable: "--font-lobster" });
export const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"], variable: "--font-pacifico" });

export const fontOptions = [
    { name: "Inter", variable: "--font-inter" },
    { name: "Playfair Display", variable: "--font-playfair" },
    { name: "Roboto", variable: "--font-roboto" },
    { name: "Lato", variable: "--font-lato" },
    { name: "Montserrat", variable: "--font-montserrat" },
    { name: "Open Sans", variable: "--font-open-sans" },
    { name: "Poppins", variable: "--font-poppins" },
    { name: "Raleway", variable: "--font-raleway" },
    { name: "Oswald", variable: "--font-oswald" },
    { name: "Merriweather", variable: "--font-merriweather" },
    { name: "Nunito", variable: "--font-nunito" },
    { name: "Ubuntu", variable: "--font-ubuntu" },
    { name: "Dancing Script", variable: "--font-dancing-script" },
    { name: "Lobster", variable: "--font-lobster" },
    { name: "Pacifico", variable: "--font-pacifico" },
];

export const allFonts = [
    inter,
    playfair,
    roboto,
    lato,
    montserrat,
    openSans,
    poppins,
    raleway,
    oswald,
    merriweather,
    nunito,
    ubuntu,
    dancingScript,
    lobster,
    pacifico
];
