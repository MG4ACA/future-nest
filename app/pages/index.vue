<script setup lang="ts">
useSeoMeta({
  title: "FutureNest | Ideas for a smarter home",
  description: "Practical ideas, products, and technology for the way we live tomorrow.",
})
</script>

<template>
  <main class="page-shell">
    <header class="site-header">
      <a class="brand" href="/" aria-label="FutureNest home">FutureNest</a>
      <nav aria-label="Primary navigation">
        <a href="#explore">Explore</a>
        <a href="#about">About</a>
      </nav>
    </header>

    <section class="hero" aria-labelledby="hero-title">
      <p class="eyebrow">Future living, made practical</p>
      <h1 id="hero-title">Build a smarter home for tomorrow.</h1>
      <p class="hero-copy">
        Thoughtful ideas, useful technology, and considered products for the way we live next.
      </p>
      <a class="primary-link" href="#explore">Explore future living <span aria-hidden="true">-&gt;</span></a>
    </section>

    <section id="explore" class="explore-section" aria-labelledby="explore-title">
      <div class="section-heading">
        <p class="eyebrow">Start here</p>
        <h2 id="explore-title">Ideas worth bringing home.</h2>
      </div>
      <div class="topic-grid">
        <a class="topic-card" href="/off-grid">
          <span class="topic-number">01</span>
          <h3>Off-grid living</h3>
          <p>Resilient systems and simple ways to live with less.</p>
        </a>
        <a class="topic-card" href="/smart-home">
          <span class="topic-number">02</span>
          <h3>Smart home</h3>
          <p>Technology that quietly makes everyday spaces better.</p>
        </a>
        <a class="topic-card" href="/halloween">
          <span class="topic-number">03</span>
          <h3>Seasonal home</h3>
          <p>Warm, modern ideas for making your home feel alive.</p>
        </a>
      </div>
    </section>

    <section id="about" class="about-section" aria-labelledby="about-title">
      <p class="eyebrow">The beginning</p>
      <h2 id="about-title">Useful over complicated.</h2>
      <p>
        FutureNest is starting small: clear ideas, honest comparisons, and practical inspiration
        for building a better home.
      </p>
    </section>

    <footer class="site-footer">
      <span>FutureNest</span>
      <span>Ideas for living tomorrow.</span>
    </footer>
  </main>
</template>

<style>
:root {
  --ink: #17211f;
  --muted: #62706b;
  --paper: #f4f1e9;
  --warm: #d96d45;
  --line: rgba(23, 33, 31, 0.16);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: Georgia, "Times New Roman", serif;
}

a {
  color: inherit;
}

.page-shell {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.site-header,
.site-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 0;
  border-bottom: 1px solid var(--line);
  font-family: Arial, sans-serif;
  font-size: 0.78rem;
  letter-spacing: 0.04em;
}

.site-header nav {
  display: flex;
  gap: 28px;
}

.brand {
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: -0.02em;
}

.site-header nav a,
.site-footer {
  color: var(--muted);
  text-decoration: none;
}

.hero {
  max-width: 780px;
  padding: 150px 0 170px;
}

.eyebrow {
  margin: 0 0 20px;
  color: var(--warm);
  font-family: Arial, sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  max-width: 760px;
  margin-bottom: 28px;
  font-size: clamp(3.5rem, 8vw, 7.5rem);
  font-weight: 400;
  line-height: 0.94;
  letter-spacing: -0.04em;
}

.hero-copy {
  max-width: 470px;
  margin-bottom: 34px;
  color: var(--muted);
  font-size: 1.2rem;
  line-height: 1.5;
}

.primary-link {
  display: inline-flex;
  gap: 16px;
  align-items: center;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--ink);
  font-family: Arial, sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
}

.explore-section {
  padding: 70px 0 120px;
  border-top: 1px solid var(--line);
}

.section-heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 48px;
}

h2 {
  max-width: 530px;
  margin: 0;
  font-size: clamp(2.2rem, 4vw, 4.3rem);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.03em;
}

.topic-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--line);
}

.topic-card {
  min-height: 250px;
  padding: 26px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  text-decoration: none;
  transition: background 180ms ease, color 180ms ease;
}

.topic-card:first-child {
  border-left: 1px solid var(--line);
}

.topic-card:hover {
  background: var(--ink);
  color: var(--paper);
}

.topic-number {
  display: block;
  margin-bottom: 70px;
  color: var(--warm);
  font-family: Arial, sans-serif;
  font-size: 0.75rem;
}

.topic-card h3 {
  margin-bottom: 12px;
  font-size: 1.65rem;
  font-weight: 400;
}

.topic-card p,
.about-section p {
  max-width: 270px;
  margin-bottom: 0;
  color: var(--muted);
  line-height: 1.5;
}

.topic-card:hover p {
  color: #c8d0c9;
}

.about-section {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 28px;
  padding: 90px 0;
  border-top: 1px solid var(--line);
}

.about-section h2 {
  font-size: clamp(2.2rem, 5vw, 5rem);
}

.site-footer {
  border-top: 1px solid var(--line);
  border-bottom: 0;
}

@media (max-width: 700px) {
  .page-shell {
    width: min(100% - 32px, 1180px);
  }

  .hero {
    padding: 100px 0 110px;
  }

  h1 {
    font-size: clamp(3.2rem, 17vw, 6rem);
  }

  .section-heading,
  .about-section {
    display: block;
  }

  .section-heading h2,
  .about-section h2,
  .about-section p {
    margin-top: 24px;
  }

  .topic-grid {
    grid-template-columns: 1fr;
  }

  .topic-card,
  .topic-card:first-child {
    border-left: 1px solid var(--line);
  }

  .site-footer {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }
}
</style>