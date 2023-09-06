<template>
  <div class="allNews">
    <NewsComponent></NewsComponent>
    <UpperFooterComponent></UpperFooterComponent>
  </div>
</template>

<script>
import NewsComponent from "@/components/news/news.component.vue";
import UpperFooterComponent from "@/components/layouts/UpprtFooter.component.vue";

export default {
  name: "AllNewsView",
  components: {
    NewsComponent,
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
