<template>
  <div class="view">
    <h2>UI Components & Patterns</h2>
    <p class="description">Common UI components and design patterns</p>

    <section class="example">
      <h3>Buttons</h3>
      <div class="button-demo">
        <button class="btn-primary">Primary</button>
        <button class="btn-secondary">Secondary</button>
        <button class="btn-outline">Outline</button>
        <button class="btn-ghost">Ghost</button>
      </div>
    </section>

    <section class="example">
      <h3>Cards</h3>
      <div class="cards-demo">
        <div class="component-card">
          <div class="card-image"></div>
          <div class="card-content">
            <h4>Card Title</h4>
            <p>Card description with some text content.</p>
            <button class="card-btn">Learn More</button>
          </div>
        </div>
        <div class="component-card">
          <div class="card-image"></div>
          <div class="card-content">
            <h4>Another Card</h4>
            <p>More information about this card component.</p>
            <button class="card-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>

    <section class="example">
      <h3>Form Elements</h3>
      <div class="form-demo">
        <input type="text" placeholder="Enter text..." class="input-field">
        <input type="email" placeholder="Email address..." class="input-field">
        <textarea placeholder="Your message..." class="textarea-field"></textarea>
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

/* Buttons */
.button-demo {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.button-demo button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: #3b82f6;
  color: white;
  border: none;
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.btn-secondary {
  background: #64748b;
  color: white;
  border: none;
}

.btn-secondary:hover {
  background: #475569;
}

.btn-outline {
  background: transparent;
  color: #3b82f6;
  border: 2px solid #3b82f6;
}

.btn-outline:hover {
  background: #3b82f6;
  color: white;
}

.btn-ghost {
  background: transparent;
  color: #64748b;
  border: none;
}

.btn-ghost:hover {
  background: #f1f5f9;
  color: #1e293b;
}

/* Cards */
.cards-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.component-card {
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.3s;
}

.component-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.card-image {
  height: 160px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card-content {
  padding: 1.5rem;
}

.card-content h4 {
  font-size: 1.25rem;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.card-content p {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.card-btn {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background 0.2s;
}

.card-btn:hover {
  background: #2563eb;
}

/* Form Elements */
.form-demo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
}

.input-field, .textarea-field {
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.2s;
}

.input-field:focus, .textarea-field:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.textarea-field {
  min-height: 120px;
  resize: vertical;
}
</style>
