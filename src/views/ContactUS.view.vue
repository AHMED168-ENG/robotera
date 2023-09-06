<template>
  <div>
    <ContactUsComponent></ContactUsComponent>
    <UpperFooterComponent></UpperFooterComponent>
  </div>
</template>
<style lang="scss" scoped>
.contact_us {
  background: #e6f0f4;
}
</style>
<script>
import ContactUsComponent from "@/components/contactus/ContactUs.component.vue";
import UpperFooterComponent from "@/components/layouts/UpprtFooter.component.vue";

export default {
  name: "ContactUsView",
  components: {
    UpperFooterComponent,
    ContactUsComponent,
  },
  created() {
    this.$store.commit("setPage", "contact");

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  },
};
</script>
