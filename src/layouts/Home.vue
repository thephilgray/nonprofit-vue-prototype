<template lang="pug">
.site
    header.site__header
      Navbar
    main.site__main(role="main")
      HomeContent
    footer.site__footer
      SiteFooter
</template>
<script>
import Navbar from "@/components/Navbar";
import HomeContent from "@/layouts/HomeContent";
import SiteFooter from "@/components/SiteFooter";
export default {
  components: {
    Navbar,
    HomeContent,
    SiteFooter
  }
};
</script>
