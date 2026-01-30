* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #111;
  color: white;
  font-family: system-ui, sans-serif;
  overflow: hidden;
}

#container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#shrine {
  width: min(60vw, 300px);
  max-height: 40vh;
}

#offering {
  position: absolute;
  width: min(40vw, 200px);
  pointer-events: none;
}

#upload {
  margin-top: 20px;
}

#message {
  font-size: clamp(1.2rem, 4vw, 2rem);
  text-align: center;
  margin-top: 20px;
}

#repeat {
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 1rem;
}

#flash {
  position: fixed;
  inset: 0;
  background: white;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}

/* Animation */
@keyframes offerToShrine {
  to {
    transform:
      translate(var(--x), var(--y))
      rotate(720deg)
      scale(0.3);
    opacity: 0;
  }
}
