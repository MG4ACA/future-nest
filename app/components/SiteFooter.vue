<template>
  <footer class="site-footer">
    <div class="footer-brand">
      <span>FutureNest</span>
      <span>Ideas for living tomorrow.</span>
    </div>
    <nav class="footer-links" aria-label="Footer Navigation">
      <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
      <NuxtLink to="/terms">Terms of Service</NuxtLink>
      <NuxtLink to="/disclosure">Affiliate Disclosure</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
  </footer>
</template>

<style scoped>
.site-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 32px 0;
  border-top: 1px solid var(--line);
  font-family: var(--font-sans);
  font-size: 0.85rem;
  color: var(--muted);
  flex-wrap: wrap;
}

.footer-brand {
  display: flex;
  gap: 16px;
  font-weight: 600;
}

.footer-links {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.footer-links a {
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--ink);
}

@media (max-width: 700px) {
  .site-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
  .footer-brand {
    flex-direction: column;
    gap: 8px;
  }
  .footer-links {
    gap: 16px;
  }
}
</style>
