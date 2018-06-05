<template lang="pug">
v-parallax.hero__cta(:src="require('../assets/hero__background.png')", height="800")
    HeroSignUpForm
</template>
<script>
import HeroSignUpForm from "@/components/HeroSignUpForm";
export default {
  components: {
    HeroSignUpForm
  }
};
</script>
