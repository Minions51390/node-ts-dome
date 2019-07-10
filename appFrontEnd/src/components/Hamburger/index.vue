<template>
  <div class="logoH" :class="{'is-active':isActive}">
    <span>
      豆花App管理后台
    </span>
    <span class="iconX"  @click="toggleClick"  >
      <span class="fontcontainer">
          <span class="iconfont icon--menu"></span>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}
</script>

<style  scoped >
.logoH{
  text-align: right;
}
.logoH span{
    float: left;
    line-height: 50px;
    color: #78961a;
    font-weight: 600;
}
.logoH .iconX{
  float: right;
}
.hamburger {
	display: inline-block;
	cursor: pointer;
	width: 20px;
	height: 20px;
	transform: rotate(90deg);
	transition: .38s;
  transform-origin: 50% 50%;
}
.hamburger.is-active {
  transform: rotate(0deg);
  
}
</style>
