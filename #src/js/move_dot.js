gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

gsap.to("#Ov", {
    scrollTrigger: {
      trigger: "#Ov",
      start: 'center center',
      end: '100%',
      scrub: 5,
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

  gsap.to("#Ov_2", {
    scrollTrigger: {
      trigger: "#Ov_2",
      start: 'center center',
      end: '100%',
      scrub: 5,
      toggleActions: "restart pause reverse pause"
    },    
    motionPath: {
        path: "#path_2",
        align: "#path_2",
        alignOrigin: [0.5, 0.5]
      },
    duration: 3,
    ease: "none",
  });

  








