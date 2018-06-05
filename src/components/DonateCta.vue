<template lang="pug">
v-layout.done__donateWrapper(row wrap)
    v-flex.pt-5(xs12)
        h2.donate__title.display-1 Donate to Make an Impact
    v-flex.donate__buttonGroup.pa-5(xs12)
        v-btn(large color="secondary" light) $10
        v-btn(large color="secondary" light) $20
        v-btn(large color="secondary" light) $50
        v-btn(large color="secondary" light) $100
        v-btn(large  raised dark) Go!
</template>
<style lang="scss" scoped>
.donate__title {
  text-transform: uppercase;
}
</style>
