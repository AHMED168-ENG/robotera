<template>
    <div>
        <Navbare></Navbare>
        <router-view />
    </div>
</template>

<script>
import Navbare from "@/components/layouts/Navbar.vue";
export default {
    components: { Navbare },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap");
body {
    // height: 9000px;
    overflow-x: hidden !important;
}
* {
    font-family: "Cairo";
}

.container {
    display: block !important;
}

@media (min-width: 576px) {
    .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl,
    .container-xxl {
        max-width: 85%;
    }
}
@media (min-width: 768px) {
    .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl,
    .container-xxl {
        max-width: 90% !important;
    }
}

@media (min-width: 1400px) {
    .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl,
    .container-xxl {
        max-width: 90% !important;
    }
}
* a {
    text-decoration: none;
}
ul {
    margin: 0;
    padding: 0;
}
.row {
    margin: 0 !important;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}
body::-webkit-scrollbar {
    width: 5px;
}

body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
    background-color: #f6921e;
    outline: 1px solid slategrey;
}
</style>
