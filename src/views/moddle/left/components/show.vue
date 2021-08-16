<template>
<div class='show'>
  <Title title="左侧模块" arrow borderRadius @clickArrow="handleArrow">

    </Title>
</div>
</template>

<script>

import Title from '@/components/Title'
export default {
components: {Title},
data() {
return {

};
},
computed: {},
watch: {},
methods: {
  // ...mapMutations("vuexTest", ['mutationsHello']),
handleArrow(){
  this.$store.commit("moddle/CHANGE_PAGE",{page:'page_left',name:'left_source'});
}
},
created() {

},
mounted() {

},
}
</script>
<style  scoped>
.show{
  width: 100%;
  height: 500px;
  background: lightpink;
}
</style>