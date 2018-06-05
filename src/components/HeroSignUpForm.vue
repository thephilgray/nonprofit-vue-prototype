<template lang="pug">
  v-layout.white--text(row align-center justify-center)
      v-flex(sm6 md5)
          .heroSignUpForm__formWrapper
              h1.heroSignUpForm__title.display-1 Join Us
              SignUpForm.heroSignUpForm__form(dark)
              .socialIcons.mt-3
                  v-icon.mr-3(color="white" large) fa-twitter
                  v-icon.mr-3(color="white" large) fa-youtube-play
                  v-icon(color="white" large) fa-instagram
</template>
<script>
import SignUpForm from "@/components/SignUpForm";
export default {
  components: {
    SignUpForm
  },
  data() {
    return {
      name: "",
      email: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.heroSignUpForm__formWrapper {
  padding: 1em;
  background: rgba(0, 0, 0, 0.6);
}
.heroSignUpForm__title {
  text-transform: uppercase;
}
</style>
