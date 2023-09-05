<template>
    <section class="lower_footer">
        <p>
            SAUDI_RRC 2023 جميع الحقوق محفوظة لدى الإتحاد السعودي للروبوت
            والرياضات اللاسلكية
        </p>
    </section>
</template>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
.lower_footer {
    background: var(--2, linear-gradient(238deg, #f9ae3b 0%, #f5911e 100%));
    padding: 15px 0;
    text-align: center;
    p {
        font-size: 12px;
        color: white;
        margin: 0;
    }
}
@media (max-width: 1500px) {
}
@media (max-width: 1200px) {
}
@media (max-width: 992px) {
}
@media (max-width: 600px) {
}
@media (max-width: 375px) {
}
</style>

<script>
export default {
    name: "LowerFooterComponent",
};
</script>
