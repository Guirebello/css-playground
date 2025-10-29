<template>
  <div class="view">
    <h2>Animations & Transitions</h2>
    <p class="description">Experiment with CSS animations, transitions, and transforms</p>

    <section class="example">
      <h3>Keyframe Animations</h3>
      <div class="animation-demo">
        <div class="bounce-box">Bounce</div>
        <div class="spin-box">Spin</div>
        <div class="pulse-box">Pulse</div>
      </div>
    </section>

    <section class="example">
      <h3>Hover Transitions</h3>
      <div class="transition-demo">
        <button class="btn-scale">Scale</button>
        <button class="btn-slide">Slide</button>
        <button class="btn-flip">Flip</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.view {
  max-width: 1200px;
}

h2 {
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.description {
  color: #64748b;
  margin-bottom: 2rem;
}

.example {
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

h3 {
  font-size: 1.25rem;
  color: #334155;
  margin-bottom: 1.5rem;
}

/* Keyframe Animations */
.animation-demo {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.bounce-box, .spin-box, .pulse-box {
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  border-radius: 0.5rem;
}

.bounce-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  animation: bounce 2s ease-in-out infinite;
}

.spin-box {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  animation: spin 3s linear infinite;
}

.pulse-box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

/* Transitions */
.transition-demo {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.transition-demo button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  color: white;
}

.btn-scale {
  background: #3b82f6;
  transition: transform 0.3s ease;
}

.btn-scale:hover {
  transform: scale(1.1);
}

.btn-slide {
  background: #8b5cf6;
  transition: transform 0.3s ease;
}

.btn-slide:hover {
  transform: translateX(10px);
}

.btn-flip {
  background: #ec4899;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
}

.btn-flip:hover {
  transform: rotateY(180deg);
}
</style>
