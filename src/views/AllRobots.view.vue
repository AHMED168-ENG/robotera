<template>
  <div class="allRobots">
    <LandingPageComponent></LandingPageComponent>
    <OurProductCompany></OurProductCompany>
    <UpperFooterComponent></UpperFooterComponent>
  </div>
</template>
<style lang="scss" scoped>
.allRobots {
  background: #e6f0f4;
}
</style>
<script>
import LandingPageComponent from "@/components/all_robots/LandingPage.component.vue";
import OurProductCompany from "@/components/all_robots/OurProducts.component.vue";
import UpperFooterComponent from "@/components/layouts/UpprtFooter.component.vue";

export default {
  name: "AllRobots",
  components: {
    LandingPageComponent,
    OurProductCompany,
    UpperFooterComponent,
  },
  created() {
    this.$store.commit("setPage", "store");
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  },
};
</script>
