<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    description: string;
    /** Displayed while the article has not been published yet. */
    status?: 'coming-soon' | 'published';
    to?: string;
    readTime?: string;
    accent?: string;
  }>(),
  { status: 'coming-soon', to: undefined, readTime: undefined, accent: undefined },
);
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="article-card article-link"
    :style="accent ? { '--tint': accent } : undefined"
  >
    <PlaceholderArt :label="`${title} preview artwork coming soon`" />
    <div class="article-body">
      <div class="article-meta">
        <span class="status-badge">
          {{ status === 'coming-soon' ? 'Coming soon' : 'Published' }}
        </span>
        <span v-if="readTime" class="read-time">{{ readTime }}</span>
      </div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <span class="article-cta">
        {{ status === 'coming-soon' ? 'Preview page ->' : 'Read article ->' }}
      </span>
    </div>
  </NuxtLink>

  <article v-else class="article-card" :style="accent ? { '--tint': accent } : undefined">
    <PlaceholderArt :label="`${title} preview artwork coming soon`" />
    <div class="article-body">
      <div class="article-meta">
        <span class="status-badge">
          {{ status === 'coming-soon' ? 'Coming soon' : 'Published' }}
        </span>
        <span v-if="readTime" class="read-time">{{ readTime }}</span>
      </div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </article>
</template>

<style scoped>
.article-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--paper-raised);
}

.article-link {
  text-decoration: none;
  color: inherit;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

.article-link:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(23, 33, 31, 0.12);
}

.article-body {
  padding: 22px 24px 26px;
}

.article-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: baseline;
  margin-bottom: 14px;
}

.status-badge {
  display: inline-block;
  color: var(--tint, var(--warm));
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.read-time {
  color: var(--muted);
  font-family: var(--font-sans);
  font-size: 0.75rem;
}

.article-body h3 {
  margin-bottom: 10px;
  font-size: 1.4rem;
  font-weight: 400;
}

.article-body p {
  margin-bottom: 16px;
  color: var(--muted);
  line-height: 1.5;
}

.article-cta {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
}
</style>
