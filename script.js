function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    
    const items = ["🌸", "✨", "🌷", "🏵️", "💖", "🤍"];
    petal.innerHTML = items[Math.floor(Math.random() * items.length)];
    
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = Math.random() * 20 + 15 + "px";
    petal.style.opacity = Math.random() * 0.6 + 0.2;
    
    const duration = Math.random() * 7 + 10 + "s";
    petal.style.animation = `fall ${duration} linear forwards`;

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 15000);
}

// Gentle continuous flow
setInterval(createPetal, 1000);

// Interactive: Cursor Sparkle Effect
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.8) { // Don't create too many
        const sparkle = document.createElement("div");
        sparkle.innerHTML = "✨";
        sparkle.style.position = "fixed";
        sparkle.style.left = e.clientX + "px";
        sparkle.style.top = e.clientY + "px";
        sparkle.style.pointerEvents = "none";
        sparkle.style.fontSize = "12px";
        sparkle.style.zIndex = "9999";
        sparkle.style.transition = "all 1s ease";
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.style.transform = `translateY(20px) scale(0)`;
            sparkle.style.opacity = "0";
        }, 50);

        setTimeout(() => sparkle.remove(), 1000);
    }
});

// Smooth reveal on scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .appreciation-letter').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});