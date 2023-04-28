const app = document.getElementById('typewriter');


const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});


typewriter
.typeString('Lima 1343')
.pauseFor(500)
.start();