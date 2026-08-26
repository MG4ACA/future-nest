<script setup lang="ts">
useSeoMeta({
  title: 'Contact Us | FutureNest',
  description: 'Get in touch with the FutureNest team.',
});
</script>

<template>
  <div class="page-shell page-content">
    <SiteHeader />

    <section class="prose">
      <h1>Contact Us</h1>
      <p>Have a question, feedback, or a partnership inquiry? We'd love to hear from you.</p>
      
      <div class="contact-card">
        <h2>Get in touch</h2>
        <p>Email: <a href="mailto:hello@futurenest.example.com">hello@futurenest.example.com</a></p>
        <p>We aim to respond to all inquiries within 48 hours.</p>
      </div>
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
.prose p {
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 20px;
}
.contact-card {
  margin-top: 40px;
  padding: 32px;
  background: var(--paper-raised);
  border: 1px solid var(--line);
  border-radius: 8px;
}
.contact-card h2 {
  font-size: 1.5rem;
  margin-bottom: 16px;
}
.contact-card a {
  color: var(--warm);
  font-weight: 600;
  text-decoration: none;
}
.contact-card a:hover {
  text-decoration: underline;
}
</style>
