<template>
  <footer class="site-footer">
    <span>FutureNest</span>
    <span>Ideas for living tomorrow.</span>
  </footer>
</template>

<style scoped>
.site-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 28px 0;
  border-top: 1px solid var(--line);
  font-family: var(--font-sans);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  color: var(--muted);
}

@media (max-width: 700px) {
  .site-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
