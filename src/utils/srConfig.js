import ScrollReveal from "scrollreveal"

const sr = ScrollReveal();

export const srConfig = (delay = 200, origin = 'bottom', distance = "100px") => ({
    origin: origin,
    duration: 500,
    distance: distance,
    delay: delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    // easing: "ease",
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: .25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
});

export default sr