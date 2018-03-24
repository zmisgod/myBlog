<template>
  <div>
    <Detal></Detal>
  </div>
</template>
<script>
import Detal from './../common/detail/Detail.vue'
export default {
  name: 'detail',
  title() {
    return 'detail'
  },
  components:{
    Detal
  }
}
</script>
