<template lang="pug">
v-container
    v-layout(row wrap grid-list-md text-xs-center)
        v-flex(xs12)
            v-card.pa-5(flat color="transparent")
                v-card-text
                    h3.about__text.headline.text-xs-center Non-Profit is dedicated to solving some of the most complex issues facing our world and the people who inhabit it.
        v-flex.pa-3(xs12 md6)
            v-card.about__feature(flat color="transparent")
                v-card-media(:src="require('../assets/about__featureImage.png')" height="300")
                v-card-text
                    h4.about__featureText.text-xs-center see how our work impacts thousands of lives each day.
                v-card-actions
                    v-btn(raised block) Learn More
        v-flex.pa-3(xs12 md6)
            v-card.about__feature(flat color="transparent")
                v-card-media(:src="require('../assets/about__featureImage-2.png')" height="300")
                v-card-text
                    h4.about__featureText.text-xs-center see how your involvement creates lasting impact.
                v-card-actions
                    v-btn(raised block) Learn More

</template>
<style lang="scss" scoped>
.about__text,
.about__featureText {
  text-transform: uppercase;
}
</style>
