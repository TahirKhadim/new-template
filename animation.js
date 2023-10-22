

gsap.from("#right", {
    scrollTrigger: {
        trigger: "#right",
        scroller: "body"

    },
    x: "160",
    duration: 1,
    delay: 1,


})
gsap.from("#left", {
    scrollTrigger: {
        trigger: "#left",
        scroller: "body"

    },
    x: "-160",
    duration: 1,
    delay: 1,


})

gsap.from("#down", {
    scrollTrigger: {
        trigger: "#down",
        scroller: "body"

    },
    y: "20px",
    duration: 1,
    delay: 1,


})

// tl.from(".img-fluid", {
//     x: "-600",
//     duration: 1,
//     delay: 0.5,
// }) 
