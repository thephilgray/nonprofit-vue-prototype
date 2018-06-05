<template lang="pug">
v-container
    header.section__header.pa-5
        h2.issue__title.display-1 Issues
    v-layout(row wrap grid-list-md text-xs-center)
        v-flex(xs12)
            v-jumbotron.issue__feature(:src="require('../assets/issue_background-1.png')" dark)
                v-container(fill-height)
                    v-layout(align-end justify-end)
                        v-btn.issue__button(large) Sustainability                
        v-flex(xs12 sm6)
            v-jumbotron.issue__feature(:src="require('../assets/issue_background-2.png')" dark)
                v-container(fill-height)
                    v-layout(align-end justify-end)
                        v-btn.issue__button(large) Research         
        v-flex(xs12 sm6)
            v-jumbotron.issue__feature(:src="require('../assets/issue_background-3.png')" dark)
                v-container(fill-height)
                    v-layout(align-end justify-end)
                        v-btn.issue__button(large) Hunger Relief
    v-layout.pt-5(row)
        v-flex(xs12)
            v-btn(large) More Issues
</template>
<style lang="scss" scoped>
.issue__text,
.issue__featureText {
  text-transform: uppercase;
}
.issue__button {
  border: 2px solid #fff;
}
</style>
