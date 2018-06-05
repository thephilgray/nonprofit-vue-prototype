<template lang="pug">
v-container
    v-layout(row wrap align-center justify-center)
        v-flex(xs12 md3)
            header.section__header.pa-5
                h2.section__title.display-1 Join Us Today
        v-flex(xs12 md9)
            SignUpForm.section__subscribeForm
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
