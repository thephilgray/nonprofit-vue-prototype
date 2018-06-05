<template lang="pug">
.site__mainWrapper
    section.site__hero(role="banner")
      SiteHero
    section.site__donateCta.pa-3
      DonateCta
    section.site__about.pa-3
      SectionAbout
    section.site__issues.pa-3
      SectionIssues
    section.site__news.pa-3
      SectionNews
    section.site__subscribe.pa-3
      SectionSubscribe
    section.site__connect.pa-3
      SectionConnect
</template>
<script>
import SiteHero from "@/components/SiteHero";
import DonateCta from "@/components/DonateCta";
import SectionAbout from "@/components/SectionAbout";
import SectionIssues from "@/components/SectionIssues";
import SectionNews from "@/components/SectionNews";
import SectionSubscribe from "@/components/SectionSubscribe";
import SectionConnect from "@/components/SectionConnect";
export default {
  components: {
    DonateCta,
    SiteHero,
    SectionAbout,
    SectionIssues,
    SectionNews,
    SectionSubscribe,
    SectionConnect
  }
};
</script>

<style lang="scss" scoped>
.site__about {
  background: #eeeded;
}
.site__issues {
  background: #dbd9d9;
}
.site__subscribe {
  background: #d6d6d6;
}
</style>
