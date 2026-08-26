<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy | FutureNest',
  description: 'Learn how FutureNest collects, uses, and protects your data.',
});
</script>

<template>
  <div class="page-shell page-content">
    <SiteHeader />

    <section class="prose">
      <h1>Privacy Policy</h1>
      <p>Last updated: August 26, 2026</p>
      
      <h2>1. Introduction</h2>
      <p>Welcome to FutureNest. We respect your privacy and are committed to protecting your personal data.</p>
      
      <h2>2. Data We Collect</h2>
      <p>We may collect basic analytics data (such as browser type and pages visited) to improve our website. If you contact us, we collect the information you provide in that communication.</p>
      
      <h2>3. Cookies and Tracking</h2>
      <p>FutureNest uses cookies to enhance user experience and analyze traffic. Some of our affiliate partners may also use cookies to track referrals.</p>
      
      <h2>4. Third-Party Links</h2>
      <p>Our website contains links to third-party sites, including affiliate partners. We are not responsible for the privacy practices of these external sites.</p>
      
      <h2>5. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us via our Contact page.</p>
    </section>

    <SiteFooter />
  </div>
</template>

<style scoped>
.page-content {
  padding-bottom: 80px;
}
.prose {
  max-width: 720px;
  padding: 80px 0;
}
.prose h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 24px;
}
.prose h2 {
  font-size: 1.5rem;
  margin-top: 40px;
  margin-bottom: 16px;
}
.prose p {
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 20px;
}
</style>
