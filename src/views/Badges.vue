<template>
  <div class="view">
    <h2>Badges</h2>
    <p class="description">Experiment badges created with data attributes</p>

    <section class="example">
      <h3>Shapes</h3>
      <div class="flex-container">
        <span class="square" />
        <span class="big-square" />
        <span class="triangle" />
        <span class="circle" />
        <span class="pentagon" />
      </div>
    </section>

    <section class="example">
      <h3>Shapes + Letters</h3>
      <div class="flex-container">
        <span class="hexagon spinning-badge" data-grade="a" data-size="sm" />
        <span class="hexagon" data-grade="b" data-size="sm" />
        <span class="hexagon" data-grade="c" data-size="sm" />
        <span class="hexagon" data-grade="d" data-size="sm" />
        <span class="hexagon" data-grade="f" data-size="sm" />
        <span class="hexagon" data-size="sm" />
      </div>
      <div class="flex-container">
        <span class="hexagon spinning-badge" data-grade="a" data-size="md" />
        <span class="hexagon" data-grade="b" data-size="md" />
        <span class="hexagon" data-grade="c" data-size="md" />
        <span class="hexagon" data-grade="d" data-size="md" />
        <span class="hexagon" data-grade="f" data-size="md" />
        <span class="hexagon" data-size="md" />
      </div>
      <div class="flex-container">
        <span class="hexagon spinning-badge" data-grade="a" data-size="lg" />
        <span class="hexagon" data-grade="b" data-size="lg" />
        <span class="hexagon" data-grade="c" data-size="lg" />
        <span class="hexagon" data-grade="d" data-size="lg" />
        <span class="hexagon" data-grade="f" data-size="lg" />
        <span class="hexagon" data-size="lg" />
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap");

.spinning-badge {
  animation: spin 7s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.hexagon {
  position: relative;
  width: 100px;
  height: 100px;
  background: #999999;
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
}

.hexagon::after {
  content: "-";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -54%);
  font-size: 130px;
  font-family: "Nunito";
  font-weight: bold;
  color: white;
}

/*Badge content*/
.hexagon[data-grade="a"] {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  /* background: #0bd276; */
}
.hexagon[data-grade="a"]::after {
  content: "A";
}

.hexagon[data-grade="b"] {
  background: #30a8eb;
}
.hexagon[data-grade="b"]::after {
  content: "B";
}

.hexagon[data-grade="c"] {
  background: #edc702;
}
.hexagon[data-grade="c"]::after {
  content: "C";
}

.hexagon[data-grade="d"] {
  background: #ee8b1c;
}
.hexagon[data-grade="d"]::after {
  content: "D";
}

.hexagon[data-grade="f"] {
  background: #ec2405;
}
.hexagon[data-grade="f"]::after {
  content: "F";
}

/* Small size */
.hexagon[data-size="sm"] {
  width: 35px;
  height: 40px;
}
.hexagon[data-size="sm"]:not([data-grade])::after {
  font-size: 40px;
  transform: translate(-50%, -54%);
}
.hexagon[data-size="sm"][data-grade]::after {
  font-size: 20px;
  transform: translate(-50%, -50%);
}

/* Medium size */
.hexagon[data-size="md"] {
  width: 50px;
  height: 60px;
}
.hexagon[data-size="md"]:not([data-grade])::after {
  font-size: 60px;
  transform: translate(-50%, -54%);
}
.hexagon[data-size="md"][data-grade]::after {
  font-size: 32px;
  transform: translate(-50%, -50%);
}

/* Large size */
.hexagon[data-size="lg"] {
  width: 80px;
  height: 100px;
}
.hexagon[data-size="lg"]:not([data-grade])::after {
  font-size: 100px;
  transform: translate(-50%, -54%);
}
.hexagon[data-size="lg"][data-grade]::after {
  font-size: 64px;
  transform: translate(-50%, -50%);
}

.pentagon {
  position: relative;
  width: 100px;
  height: 88px;
  background: forestgreen;
  clip-path: polygon(50% 0, 100% 38%, 81% 100%, 19% 100%, 0 38%);
}
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: mediumpurple;
}
.square {
  width: 100px;
  height: 100px;
  background: red;
}
.big-square {
  width: 0;
  height: 0;
  border-top: 100px solid yellow;
  border-left: 100px solid blue;
  border-right: 100px solid green;
  border-bottom: 100px solid sandybrown;
}
.triangle {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid darkslateblue;
}

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

/* Grid Example */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.grid-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
}

/* Flexbox Example */
.flex-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.flex-item {
  flex: 1;
  min-width: 200px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: 500;
}
</style>
