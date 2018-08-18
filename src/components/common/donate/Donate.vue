<template>
    <div>
        <div class="title">
            捐赠 Donate
        </div>
        <Money></Money>
        <Spirit></Spirit>
    </div>
</template>
<script>
import Money from "./Money.vue";
import Spirit from "./Spirit.vue";
export default {
  components: {
    Money,
    Spirit
  }
};
</script>

