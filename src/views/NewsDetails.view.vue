<template>
  <div>
    <NewsDetails></NewsDetails>
    <UpperFooterComponent></UpperFooterComponent>
  </div>
</template>
<style lang="scss" scoped>
.news_details {
  background: #e6f0f4;
}
</style>
<script>
import NewsDetails from "@/components/news_details/NewsDetails.component.vue";
import UpperFooterComponent from "@/components/layouts/UpprtFooter.component.vue";

export default {
  name: "NewsDetailsView",
  components: {
    NewsDetails,
    UpperFooterComponent,
  },
  created() {
    this.$store.commit("setPage", "news");

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  },
};
</script>
