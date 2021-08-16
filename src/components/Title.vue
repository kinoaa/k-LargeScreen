<!-- 页面 -->
<template>
  <div class="g-title" :style="gTitleStyle">
    <div class="title-wrap">
      <span class="title-text" :style="testStyle">{{ title }}</span>
      <slot></slot>
    </div>
    <svg-icon v-if="arrow" :icon-class="direction" @click="handleChangeDirection"></svg-icon>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    // 是否显示箭头
    arrow: {
      type: Boolean,
      default: false
    },
    // 箭头的方向
    direction: {
      type: String,
      default: 'right'
    },
    bgColor: {
      type: String,
      default: 'rgba(4, 92, 0, 0.5)'
    },
    textColor: {
      type: String,
      default: '#99FF00'
    },
    border: {
      type: String,
      default: '12px'
    },
  },
  mounted() {
  },
  data() {
    return {
      iconName: true
    }
  },
  methods: {
    handleChangeDirection() {
      this.$emit('clickArrow')
    },
  },
  computed: {
    gTitleStyle() {
      return {
        'border-top-left-radius': this.border || '12px',
        'border-top-right-radius': this.border || '12px',
        'background-color': this.bgColor
      }
    },
    testStyle() {
      return {
        'color': this.textColor
      }
    }
  },
}
</script>
<style  scoped>
.g-title {
  color: #99ff00;
  line-height: 72px;
  height: 69px;
  padding-left: 42px;
  padding-right: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  background: #083a0f;
}
.title-wrap {
  display: flex;
  align-items: center;
}
.title-text {
  font-size: 40px;
}
svg {
  color: #99ff00;
  cursor: pointer;
}
</style>
