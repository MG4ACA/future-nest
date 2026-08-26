<script setup lang="ts">
import type { MerchantStatus } from '~/data/articles';

const props = withDefaults(
  defineProps<{
    title: string;
    category: string;
    priceRange: string;
    merchantStatus?: MerchantStatus;
    description?: string;
    ctaLabel?: string;
    href?: string;
    enabled?: boolean;
    accent?: string;
  }>(),
  {
    merchantStatus: 'unverified',
    description: undefined,
    ctaLabel: 'View product',
    href: undefined,
    enabled: false,
    accent: undefined,
  },
);

const merchantLabels: Record<MerchantStatus, string> = {
  unverified: 'Merchant unverified',
  shortlisted: 'Merchant shortlisted',
  verified: 'Merchant verified',
};
</script>

<template>
  <article class="product-card" :style="accent ? { '--tint': accent } : undefined">
    <div class="product-media">
      <PlaceholderArt :label="`${title} placeholder artwork`" />
    </div>
    <div class="product-body">
      <p class="product-meta">{{ category }} · {{ priceRange }}</p>
      <h3>{{ title }}</h3>
      <p v-if="description" class="product-copy">{{ description }}</p>

      <div class="product-footer">
        <span class="merchant-badge">{{ merchantLabels[merchantStatus] }}</span>
        <a
          v-if="enabled && href"
          class="product-cta"
          :href="href"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ ctaLabel }}
        </a>
        <button v-else class="product-cta disabled" type="button" disabled>
          {{ ctaLabel }}
        </button>
      </div>
    </div>
  </article>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--paper-raised);
}

.product-media {
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.product-body {
  padding: 22px 24px 26px;
}

.product-meta {
  margin-bottom: 12px;
  color: color-mix(in srgb, var(--tint, var(--warm)) 76%, var(--ink));
  font-family: var(--font-sans);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.product-body h3 {
  margin-bottom: 10px;
  font-size: 1.35rem;
  font-weight: 400;
}

.product-copy {
  margin-bottom: 18px;
  color: var(--muted);
  line-height: 1.5;
}

.product-footer {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}

.merchant-badge {
  display: inline-block;
  padding: 6px 10px;
  border: 1px solid var(--line);
  font-family: var(--font-sans);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.product-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border: 1px solid var(--ink);
  background: transparent;
  color: inherit;
  font-family: var(--font-sans);
  font-size: 0.74rem;
  font-weight: 700;
  text-decoration: none;
}

.product-cta.disabled {
  border-color: var(--line);
  color: var(--muted);
  cursor: not-allowed;
}
</style>
