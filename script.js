const timeline = new gsap.timeline();

timeline.to('#T1', {y: '-50%' });
timeline.to('#Y', {y: '50%' });
timeline.to('#P1', {y: '-50%' });
timeline.to('#E', {y: '50%' });
timeline.to('#S', {y: '-50%' });
timeline.to('#C', {y: '50%' });
timeline.to('#R', {y: '-50%' });
timeline.to('#I', {y: '50%' });
timeline.to('#P2', {y: '-50%' });
timeline.to('#T2', {y: '50%' });

timeline.to('#Typescript', { rotation: "+=360", ease: Linear.easeNone, transformOrigin:"50% 50%" });

timeline.to('#Y', {y: '-50%' });
timeline.to('#E', {y: '-50%' });
timeline.to('#C', {y: '-50%' });
timeline.to('#I', {y: '-50%' });
timeline.to('#T2', {y: '-50%' });

timeline.to('#Typescript', { y: '100px', repeat: 5, yoyo: true });

timeline.to('#T1Color', { fill: 'black' });