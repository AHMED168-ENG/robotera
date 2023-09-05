<template>
    <div>
        <RegisterComponent></RegisterComponent>
        <UpperFooterComponent></UpperFooterComponent>
    </div>
</template>

<script>
import RegisterComponent from "@/components/auth/register.component.vue";
import UpperFooterComponent from "@/components/layouts/UpprtFooter.component.vue";

export default {
    name: "RegisterPage",
    components: { RegisterComponent, UpperFooterComponent },
    created() {
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
    },
};
</script>

<style lang="scss" scoped></style>
