// Google Fonts via next/font/google is currently broken in this environment (Turbopack/Next.js mismatch).
// Exporting mock objects to maintain type compatibility without causing build errors.

const mockFont = (variable: string) => ({
    variable,
    style: { fontFamily: 'sans-serif' },
    className: variable.replace('--font-', '')
});

export const inter = mockFont("--font-inter");
export const playfair = mockFont("--font-playfair");
export const roboto = mockFont("--font-roboto");
export const lato = mockFont("--font-lato");
export const montserrat = mockFont("--font-montserrat");
export const openSans = mockFont("--font-open-sans");
export const poppins = mockFont("--font-poppins");
export const raleway = mockFont("--font-raleway");
export const oswald = mockFont("--font-oswald");
export const merriweather = mockFont("--font-merriweather");
export const nunito = mockFont("--font-nunito");
export const ubuntu = mockFont("--font-ubuntu");
export const dancingScript = mockFont("--font-dancing-script");
export const lobster = mockFont("--font-lobster");
export const pacifico = mockFont("--font-pacifico");
export const quicksand = mockFont("--font-quicksand");
export const rubik = mockFont("--font-rubik");
export const spaceMono = mockFont("--font-space-mono");
export const workSans = mockFont("--font-work-sans");
export const lora = mockFont("--font-lora");
export const robotoMono = mockFont("--font-roboto-mono");
export const sourceCodePro = mockFont("--font-source-code-pro");
export const mulish = mockFont("--font-mulish");
export const kanit = mockFont("--font-kanit");
export const exo2 = mockFont("--font-exo-2");
export const titilliumWeb = mockFont("--font-titillium-web");
export const anton = mockFont("--font-anton");
export const josefinSans = mockFont("--font-josefin-sans");
export const bebasNeue = mockFont("--font-bebas-neue");
export const abrilFatface = mockFont("--font-abril-fatface");

export const allFonts = [
    inter, playfair, roboto, lato, montserrat, openSans, poppins, raleway,
    oswald, merriweather, nunito, ubuntu, dancingScript, lobster, pacifico,
    quicksand, rubik, spaceMono, workSans, lora, robotoMono, sourceCodePro,
    mulish, kanit, exo2, titilliumWeb, anton, josefinSans, bebasNeue, abrilFatface
];
