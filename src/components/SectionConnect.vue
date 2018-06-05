<template lang="pug">
v-container.connect__wrapper
    header.connect__header.pa-5
        h2.connect__title.display-1 Connect With Us
    v-layout(row wrap grid-list-md text-xs-center)
        v-flex.pa-3(xs12 md4 v-for="tweet in tweets")
            v-card
                v-card-title.pb-0
                    v-layout(row wrap align-center justify-space-around)
                        v-flex(xs12)
                            v-avatar(size="64")
                                img(:src="require('../assets/tweetCard__userAvatar.png')")
                        v-flex(xs12)
                            h4 non-profit
                            p @therealnonprofit
                v-card-text
                    p {{tweet.date}}
                    p {{tweet.content}}

</template>
<script>
export default {
  data() {
    return {
      tweets: [
        {
          date: "May 25",
          content:
            "After a giant asteroid hit #Earth about 66 million years ago, the planet’s climate went on a roller coaster ride. https://t.co/sfdsfdsflkj"
        },
        {
          date: "May 25",
          content:
            "After a giant asteroid hit #Earth about 66 million years ago, the planet’s climate went on a roller coaster ride. https://t.co/sfdsfdsflkj"
        },
        {
          date: "May 25",
          content:
            "After a giant asteroid hit #Earth about 66 million years ago, the planet’s climate went on a roller coaster ride. https://t.co/sfdsfdsflkj"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
