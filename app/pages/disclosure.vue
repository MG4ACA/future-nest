<script setup lang="ts">
useSeoMeta({
  title: 'Affiliate Disclosure | FutureNest',
  description: 'How FutureNest is funded and our affiliate relationships.',
});
</script>

<template>
  <div class="page-shell page-content">
    <SiteHeader />

    <section class="prose">
      <h1>Affiliate Disclosure</h1>
      <p>Last updated: August 26, 2026</p>
      
      <h2>1. Affiliate Links</h2>
      <p>FutureNest believes in transparency. We want to disclose that we've included certain products and links on this site that will earn an affiliate commission for any purchases you make.</p>
      
      <h2>2. Programs We Participate In</h2>
      <p>We are a participant in various affiliate programs designed to provide a means for sites to earn advertising fees by advertising and linking to our partner merchants. These may include, but are not limited to, the Amazon Services LLC Associates Program, Impact, Awin, and others.</p>
      
      <h2>3. Integrity</h2>
      <p>We only promote products or services that we have investigated and truly feel deliver value to you. Earning a commission does not influence our recommendations.</p>
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
