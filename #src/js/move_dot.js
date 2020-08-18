gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

gsap.to("#Ov", {
    scrollTrigger: {
      trigger: "#Ov",
      start: "top center",
      end: "top 100px",
      scrub: 5,
    },    
    motionPath: {
          path: "Path",
          align: "Path",
          alignOrigin: [0.5, 0.5]
      },
    duration: 3,
    ease: "none",
      
  });
  








