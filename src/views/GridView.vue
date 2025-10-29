<template>
  <div class="view">
    <h2>Grid & Flexbox Layout</h2>
    <p class="description">Experiment with CSS Grid and Flexbox layouts</p>

    <section class="example">
      <h3>CSS Grid Example</h3>
      <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
      </div>
    </section>

    <section class="example">
      <h3>Flexbox Example</h3>
      <div class="flex-container">
        <div class="flex-item">Flex 1</div>
        <div class="flex-item">Flex 2</div>
        <div class="flex-item">Flex 3</div>
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
