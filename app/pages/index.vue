<script setup lang="ts">
import { categories } from '~/data/categories';

useSeoMeta({
  title: 'FutureNest | Ideas for a smarter home',
  description: 'Practical ideas, products, and technology for the way we live tomorrow.',
});

const seasonal = categories.find((category) => category.slug === 'halloween');
const galleryImages = [
  {
    src: '/images/halloween/porch-ideas.jpeg',
    alt: 'Modern Halloween porch with pumpkins and warm lanterns',
  },
  {
    src: '/images/halloween/mantel.jpeg',
    alt: 'Fireplace mantel styled with pumpkins, branches, and candles',
  },
  {
    src: '/images/halloween/snack-table.jpeg',
    alt: 'Styled Halloween snack table with tiered treats',
  },
];
</script>

<template>
  <div class="page-shell">
    <SiteHeader />

    <section class="hero" aria-labelledby="hero-title">
      <p class="eyebrow">Future living, made practical</p>
      <h1 id="hero-title">Build a smarter home for tomorrow.</h1>
      <p class="hero-copy">
        Thoughtful ideas, useful technology, and considered products for the way we live next.
      </p>
      <NuxtLink class="primary-link" to="/off-grid">
        Explore off-grid living
        <span aria-hidden="true">-&gt;</span>
      </NuxtLink>
    </section>

    <section id="explore" class="explore-section" aria-labelledby="explore-title">
      <div class="section-heading">
        <p class="eyebrow">Start here</p>
        <h2 id="explore-title">Ideas worth bringing home.</h2>
      </div>
      <div class="topic-grid">
        <CategoryCard v-for="category in categories" :key="category.slug" :category="category" />
      </div>
    </section>

    <section v-if="seasonal" class="seasonal-section" aria-labelledby="seasonal-title">
      <div class="section-heading">
        <p class="eyebrow">Trending this season</p>
        <h2 id="seasonal-title">{{ seasonal.title }}</h2>
      </div>
      <div class="seasonal-gallery">
        <img
          v-for="image in galleryImages"
          :key="image.src"
          :src="image.src"
          :alt="image.alt"
          loading="lazy"
        />
      </div>
      <NuxtLink class="primary-link" :to="`/${seasonal.slug}`">
        See the full collection
        <span aria-hidden="true">-&gt;</span>
      </NuxtLink>
    </section>

    <section id="about" class="about-section" aria-labelledby="about-title">
      <p class="eyebrow">The beginning</p>
      <h2 id="about-title">Useful over complicated.</h2>
      <p>
        FutureNest is starting small: clear ideas, honest comparisons, and practical inspiration for
        building a better home.
      </p>
    </section>

    <SiteFooter />
  </div>
</template>

<style scoped>
.hero {
  max-width: 780px;
  padding: 150px 0 170px;
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

.explore-section {
  padding: 70px 0 120px;
  border-top: 1px solid var(--line);
}

.topic-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.seasonal-section {
  padding-top: 70px;
  padding-bottom: 120px;
  border-top: 1px solid var(--line);
}

.seasonal-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.seasonal-gallery img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border: 1px solid var(--line);
}

.about-section {
  max-width: 640px;
  padding: 90px 0;
  border-top: 1px solid var(--line);
}

.about-section h2 {
  font-size: clamp(2.2rem, 5vw, 4.5rem);
}

@media (max-width: 900px) {
  .topic-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .seasonal-gallery {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .hero {
    padding: 100px 0 110px;
  }

  h1 {
    font-size: clamp(3.2rem, 17vw, 6rem);
  }

  .topic-grid {
    grid-template-columns: 1fr;
  }
}
</style>
