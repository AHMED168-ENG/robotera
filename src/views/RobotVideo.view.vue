<template>
  <div class="robot_details">
    <RobotVideo></RobotVideo>
    <RobotDescriptionComponent></RobotDescriptionComponent>
    <robotAdvantagesComponent></robotAdvantagesComponent>
    <UpperFooterComponent></UpperFooterComponent>
  </div>
</template>

<script>
import RobotVideo from "@/components/robot_video/RobotVideo.component.vue";
import RobotDescriptionComponent from "@/components/robot_video/RobotDescription.component.vue";
import robotAdvantagesComponent from "@/components/robot_video/RobotAdvantages.component.vue";
import UpperFooterComponent from "@/components/layouts/UpprtFooter.component.vue";

export default {
  name: "RobotDetailsView",
  components: {
    RobotVideo,
    RobotDescriptionComponent,
    robotAdvantagesComponent,
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
