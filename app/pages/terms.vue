<script setup lang="ts">
useSeoMeta({
  title: 'Terms of Service | FutureNest',
  description: 'Terms of Service and conditions for using FutureNest.',
});
</script>

<template>
  <div class="page-shell page-content">
    <SiteHeader />

    <section class="prose">
      <h1>Terms of Service</h1>
      <p>Last updated: August 26, 2026</p>
      
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using FutureNest, you accept and agree to be bound by the terms and provisions of this agreement.</p>
      
      <h2>2. Content and Information</h2>
      <p>All content provided on this site is for informational purposes only. We make no representations as to the accuracy or completeness of any information on this site.</p>
      
      <h2>3. Intellectual Property</h2>
      <p>The content, organization, graphics, and other matters related to the site are protected under applicable copyrights and intellectual property laws.</p>
      
      <h2>4. Limitation of Liability</h2>
      <p>Under no circumstances shall FutureNest be liable for any direct, indirect, incidental, or consequential damages that result from the use of, or the inability to use, the materials on this site.</p>
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
