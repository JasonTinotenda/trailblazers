<script lang="ts">
  import Navbar from '$lib/components/navbar.svelte';
  import Hero from '$lib/components/hero.svelte';
  import Events from '$lib/components/events.svelte';
  import Blog from '$lib/components/blog.svelte';
  import Testimonials from '$lib/components/testimonials.svelte';
  import Connect from '$lib/components/connect.svelte';
  import Serve from '$lib/components/serve.svelte';
  import About from '$lib/components/about.svelte';
  import ImNew from '$lib/components/newpeople.svelte';
  import Parents from '$lib/components/parents.svelte';
  import Faq from '$lib/components/faq.svelte';
  import Contact from '$lib/components/contact.svelte';
  import Footer from '$lib/components/footer.svelte';
  import Popup from '$lib/components/popup.svelte';

  let { data } = $props();
</script>

<Navbar />
<main>
    <Hero />
    <Events events={data.upcomingEvents} />
    <Blog blogs={data.latestBlogs} />
    <Testimonials testimonials={data.allTestimonials} />
    <Connect groups={data.allGroups} />
    <Serve />
    <About leaders={data.leadership} />
    <ImNew />
    <Parents />
    <Faq faqs={data.faqList} />
    <Contact />
    <Popup />
</main>
<Footer />