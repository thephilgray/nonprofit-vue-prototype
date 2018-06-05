<template lang="pug">
v-form.SignUpForm__form
    v-text-field(label="Name" v-model="name" required :dark="dark" color
="success")
    v-text-field(label="E-mail" v-model="email" required :dark="dark" color
="success")
    v-btn(color="white" light block large) Sign Up        
</template>
<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      name: "",
      email: ""
    };
  }
};
</script>
