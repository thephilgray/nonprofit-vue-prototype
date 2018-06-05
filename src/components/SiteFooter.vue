<template lang="pug">
v-footer(height="auto")
    v-layout
        v-flex(xs12)
            v-card.lighten-1.white--text.text-xs-center(flat tile color="accent")
                v-card-text
                    img.site__footerLogo.pt-3(src="@/assets/footer__logo.svg")
                v-card-text
                    .socialIcons.mt-3
                        v-icon.mr-3(color="white" large) fa-twitter
                        v-icon.mr-3(color="white" large) fa-youtube-play
                        v-icon(color="white" large) fa-instagram
                v-card-text
                    p.site__footerCopyright &copy; 2018 Non-Profit
</template>

<style lang="scss" scoped>
.site__footerCopyright {
  text-transform: uppercase;
}
</style>
