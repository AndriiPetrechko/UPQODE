gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

gsap.to("#Ov", {
    scrollTrigger: {
      trigger: "#Ov",
      start: 'center center',
      end: '100%',
      scrub: 14,
      toggleActions: "restart pause reverse pause"
    },    
    motionPath: {
          path: "Path",
          align: "Path",
          alignOrigin: [0.5, 0.5]
      },
    duration: 3,
    ease: "none",
  });

  








