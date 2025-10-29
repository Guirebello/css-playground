<template>
  <div class="view">
    <h2>Modern CSS Features</h2>
    <p class="description">Experiment with container queries, :has(), CSS variables, and more</p>

    <section class="example">
      <h3>CSS Variables (Custom Properties)</h3>
      <div class="variables-demo">
        <div class="card" style="--card-color: #3b82f6;">Blue Card</div>
        <div class="card" style="--card-color: #8b5cf6;">Purple Card</div>
        <div class="card" style="--card-color: #ec4899;">Pink Card</div>
      </div>
    </section>

    <section class="example">
      <h3>:has() Selector</h3>
      <div class="has-demo">
        <div class="parent">
          <p>Parent without checkbox</p>
        </div>
        <div class="parent">
          <input type="checkbox" id="check1">
          <label for="check1">Parent with checkbox - check me!</label>
        </div>
      </div>
    </section>

    <section class="example">
      <h3>Container Queries</h3>
      <div class="container-demo">
        <div class="container">
          <div class="responsive-card">
            <h4>Responsive Card</h4>
            <p>Resize the browser to see me adapt based on container size!</p>
          </div>
        </div>
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

/* CSS Variables */
.variables-demo {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.card {
  padding: 2rem;
  background: var(--card-color);
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  flex: 1;
  min-width: 150px;
  text-align: center;
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

/* :has() Selector */
.has-demo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.parent {
  padding: 1.5rem;
  background: #f1f5f9;
  border-radius: 0.5rem;
  border: 2px solid #e2e8f0;
  transition: all 0.3s;
}

.parent:has(input:checked) {
  background: #dbeafe;
  border-color: #3b82f6;
  transform: scale(1.02);
}

.parent input {
  margin-right: 0.5rem;
}

.parent label {
  cursor: pointer;
}

/* Container Queries */
.container-demo {
  background: #f1f5f9;
  padding: 1rem;
  border-radius: 0.5rem;
}

.container {
  container-type: inline-size;
  container-name: card-container;
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  resize: horizontal;
  overflow: auto;
  min-width: 200px;
  max-width: 100%;
}

.responsive-card {
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 0.5rem;
}

.responsive-card h4 {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.responsive-card p {
  font-size: 0.875rem;
  line-height: 1.5;
}

@container card-container (min-width: 400px) {
  .responsive-card {
    padding: 2rem;
  }

  .responsive-card h4 {
    font-size: 1.5rem;
  }

  .responsive-card p {
    font-size: 1rem;
  }
}
</style>
