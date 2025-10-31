<template>
  <div class="app">
    <nav class="sidebar">
      <h1>CSS Playground</h1>
      <ul>
        <li>
          <router-link to="/grid">Grid & Flexbox</router-link>
        </li>
        <li>
          <router-link to="/animations">Animations</router-link>
        </li>
        <li>
          <router-link to="/modern-css">Modern CSS</router-link>
        </li>
        <li>
          <router-link to="/components">Components</router-link>
        </li>
        <li>
          <router-link to="/badges">Badges</router-link>
        </li>
      </ul>
    </nav>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
}

.app {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 240px;
  background: #1e293b;
  color: white;
  padding: 2rem 1.5rem;
  overflow-y: auto;
}

.sidebar h1 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #60a5fa;
}

.sidebar ul {
  list-style: none;
}

.sidebar li {
  margin-bottom: 0.5rem;
}

.sidebar a {
  display: block;
  color: #cbd5e1;
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.sidebar a:hover {
  background: #334155;
  color: white;
}

.sidebar a.router-link-active {
  background: #3b82f6;
  color: white;
}

.content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  background: #f8fafc;
}
</style>
