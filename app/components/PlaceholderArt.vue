<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    /** Short text shown inside the art, e.g. a category number. */
    glyph?: string;
  }>(),
  { glyph: undefined },
);
</script>

<template>
  <div class="placeholder-art" :aria-label="label" role="img">
    <span v-if="glyph" class="glyph">{{ glyph }}</span>
  </div>
</template>

<style scoped>
.placeholder-art {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  min-height: 160px;
  padding: 16px;
  background: linear-gradient(
    155deg,
    color-mix(in srgb, var(--tint, var(--warm)) 22%, var(--paper)),
    var(--paper-raised)
  );
}

.glyph {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  color: color-mix(in srgb, var(--tint, var(--warm)) 70%, var(--ink));
}
</style>
