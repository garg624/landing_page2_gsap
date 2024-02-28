const tl = gsap.timeline();
const tl_w = gsap.timeline();
tl.from(".logo,nav ul li,.search,.menu", {
    opacity: 0,
    x: -40,
    ease: Expo.easeInOut,
    scale: 0,
    duration: 0.5,
    stagger: 0.2
})

tl.from(".l-1,.l-2", {
    opacity: 0,
    y: -600,
    ease: Expo.easeInOut,
    stagger: 0.5
})
tl.from(".img", {
    opacity: 0,
    y: -200,
    ease: Expo.easeInOut,
    duration: 1
})
tl_w.from(".title p,.title div", {
    opacity: 0,
    stagger: 0.3,
    y: 40,
    ease: Expo.easeInOut
})
tl_w.from(".year", {
    opacity: 0,
    y: -20,
    ease: Expo.easeInOut
})
tl_w.from(".btn ", {
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})
tl_w.from(".media ul", {
    opacity: 0,
    x: -40,
    ease: Expo.easeInOut,
    stagger: 0.2
})