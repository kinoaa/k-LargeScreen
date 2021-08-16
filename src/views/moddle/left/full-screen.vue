<template>
  <div class='full-left'>
    <Title title="左侧全屏" arrow borderRadius @clickArrow="handleArrow" direction="left"> </Title>
  </div>
</template>

<script>
import Title from '@/components/Title'
export default {
  components: { Title },
  data() {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {
    //大屏
    handleArrow() {
      this.$store.commit("moddle/CHANGE_PAGE",{page:'page_left',name:'left'});
    },
  },
  created() {

  },
  mounted() {

  },
}
</script>
<style  scoped>
</style>