<template>
    <div class="allRobots">
        <RobotGalaryComponent></RobotGalaryComponent>
        <robotDescription></robotDescription>
        <RobotsRelatedComponent></RobotsRelatedComponent>
        <UpperFooterComponent></UpperFooterComponent>
    </div>
</template>
<style lang="scss" scoped>
.allRobots {
    background: #e6f0f4;
}
</style>
<script>
import RobotGalaryComponent from "@/components/robot_details/RobotGalary.component.vue";
import robotDescription from "@/components/robot_details/RobotDescription.component.vue";
import RobotsRelatedComponent from "@/components/robot_details/RobotsRelated.component.vue";
import UpperFooterComponent from "@/components/layouts/UpprtFooter.component.vue";

export default {
    name: "RobotDetailsPage",
    components: {
        RobotGalaryComponent,
        robotDescription,
        RobotsRelatedComponent,
        UpperFooterComponent,
    },
    created() {
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
    },
};
</script>
