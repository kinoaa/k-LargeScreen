<template>
  <div class="bsd-frame" :style="{ background: bgColor }" ref="bsdFrame">
    <slot></slot>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'frame',
  props: {
    width: Number,
    height: Number,
    bgColor: {
      default: '#a9a9a9'
    }
  },
  data() {
    return {
      frameWidth: 0,
      frameHeight: 0
    }
  },
  methods: {
    setSize() {
      this.frameWidth = this.width || screen.width
      this.frameHeight = this.height || screen.height
      const frame = this.$refs.bsdFrame
      frame.style.width = this.frameWidth + 'px'
      frame.style.height = this.frameHeight + 'px'
      frame.style.width = '100vw'
      frame.style.height = '100vh'
      frame.style.overflow = 'auto'
    },
    setScale() {
      this.setSize()
      const bodyWidth = document.body.clientWidth
      const bodyHeight = document.body.clientHeight
      const scaleX = bodyWidth / this.frameWidth
      const scaleY = bodyHeight / this.frameHeight
      this.$refs.bsdFrame.style.transform = `scale(${scaleX},${scaleY})`
    }
  },
  mounted() {
    this.setSize()
  },
  destroyed() {
    window.removeEventListener('resize', this.setScale)
  },
  computed: {
    ...mapGetters({
      userType: 'userType'
    }),
  }
}
</script>
<style >
.bsd-frame {
  position: fixed;
  transform-origin: left top;
}
</style>
