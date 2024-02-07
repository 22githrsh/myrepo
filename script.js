Shery.mouseFollower()
Shery.makeMagnet(".page1 h1" , {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
//   Shery.textAnimate(".page1 h1" , {
//     //Parameters are optional.
//     style: 2,
//     y: 10,
//     delay: 0.1,
//     duration: 2,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     multiplier: 0.1,
//   });
  Shery.hoverWithMediaCircle(".page1 h1" /* Element to target.*/, {
    images: ["https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",] /*OR*/,
    // videos: ["video1.mp4", "video2.mp4"],
  });
