<template>
    <div>
        <LoginComponent></LoginComponent>
        <UpperFooterComponent></UpperFooterComponent>
    </div>
</template>

<script>
import LoginComponent from "@/components/auth/login.component.vue";
import UpperFooterComponent from "@/components/layouts/UpprtFooter.component.vue";

export default {
    name: "LoginPage",
    components: { LoginComponent, UpperFooterComponent },
    created() {
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
    },
};
</script>

<style lang="scss" scoped></style>
