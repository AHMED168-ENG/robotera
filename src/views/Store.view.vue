<template>
  <div class="store">
    <RobotComponent></RobotComponent>
    <UpperFooterComponent></UpperFooterComponent>
  </div>
</template>
<style lang="scss">
.store {
  background: #e6f0f4;
  overflow: hidden;
}
</style>
<script>
import RobotComponent from "@/components/store/Robot.component.vue";
import UpperFooterComponent from "@/components/layouts/UpprtFooter.component.vue";

export default {
  name: "RobotDetailsView",
  components: {
    RobotComponent,
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
