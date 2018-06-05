<template lang="pug">
v-container
    header.news__header.pa-5
        h2.news__title.display-1 News
    v-container(fluid grid-list-sm)
        v-layout(row wrap)
            v-flex(d-flex xs12 md5)
                v-layout(column)
                    v-flex(d-flex v-for="post in latest")
                        v-card(tile flat color="transparent")
                            v-card-title
                                h3.headline.text-xs-left {{post.title}}
                            v-card-text.text-xs-left
                                p {{post.body}}
            v-flex(d-flex xs12 md7)    
                v-layout(column)    
                    v-flex(d-flex xs12)
                        v-layout(row wrap)
                            v-flex(d-flex xs12 v-for="(post, i) in features")
                                v-card(tile flat color="transparent" v-if="i===0")
                                    v-card-media(:src="require('../assets/' + post.image)" height="240")
                                    v-card-title
                                        h3.headline.text-xs-left {{post.title}}
                                    v-card-text.text-xs-left
                                        p {{post.body}}
                                v-card(tile flat color="transparent" v-else)                       
                                    v-card-text
                                        v-layout(row wrap)
                                            v-flex.text-xs-left(xs12 md8)
                                                .card__title.pl-0
                                                    h3.headline.text-xs-left {{post.title}}         
                                                p {{post.body}}
                                            v-flex(xs12 md4)
                                                v-card-media(:src="require('../assets/' + post.image)" height="175")
    v-layout.pt-5(row)
        v-flex(xs12)
            v-btn(large) More News                                                                                
</template>
<script>
export default {
  data() {
    return {
      latest: [
        {
          title: "US scientists try 1st gene editing in the body",
          body:
            "OAKLAND, Calif. (AP) — Scientists for the first time have tried editing a gene inside the body in a bold attempt to permanently change a person’s DNA to cure a disease."
        },
        {
          title: "Amount of straws, plastic pollution is huge",
          body:
            "WASHINGTON (AP) — Cities and nations are looking at banning plastic straws and stirrers in hopes of addressing the world’s plastic pollution problem. The problem is so large, though, that scientists say that’s not nearly enough."
        },
        {
          title: "Why Europe still has so many measles outbreaks",
          body:
            "LONDON (AP) — While parts of the world have all but banished measles, Europe is still getting hit with large outbreaks where some people don’t get vaccinated."
        }
      ],
      features: [
        {
          title: "New US weather satellite can’t keep cool, could hurt photos",
          body:
            "CAPE CANAVERAL, Fla. (AP) — The nation’s newest weather satellite, launched less than three months ago, has a serious cooling problem that could affect the quality of its pictures.",
          image: "newsGrid__featureImage.png"
        },
        {
          title: "Forecasters predict Central Pacific could see 6 hurricanes",
          body:
            "HONOLULU (AP) — The Central Pacific could see anywhere from three to six hurricanes over the next six months, forecasters predicted Wednesday. That would be an increase over the two named storms last year.",
          image: "newsGrid__featureImage-2.png"
        }
      ]
    };
  }
};
</script>
