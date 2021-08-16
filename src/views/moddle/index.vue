<template>
  <Frame>
    <div class="platform page-index">
      <router-view :name="page_left" style="width:2212px;height:2000px;flex-shrink: 0"></router-view>
      <router-view :name="page_middle" style="width:3200px;flex-shrink: 0"></router-view>
      <router-view :name="page_right" style="width:2214px;height:2000px;flex-shrink: 0"></router-view>
    </div>
  </Frame>
</template>

<script>
import Frame from '@/components/Frame'
import { mapGetters } from 'vuex'
export default {
  components: { Frame },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters({
      page_right: 'page_right',
      page_middle: 'page_middle',
      page_left: 'page_left',
    })
  },
  watch: {},
  methods: {

  },
  created() {

  },
  mounted() {

  },
}
</script>
<style  scoped>
.platform{
  display: flex;
}
</style>