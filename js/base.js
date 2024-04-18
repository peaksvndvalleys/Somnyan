import barba from '@barba/core';

barba.init({
    transitions: [{
      leave(data) {
        return gsap.to(data.current.container, {
          x:"100%"
        });
      },
      enter(data) {
        gsap.from(data.next.container, {
          x: "-100%"
        });
      }
    }]
  });