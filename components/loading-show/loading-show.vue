<template name='loading_show'>
  <div class="box">
    <div class="thing">东</div>
    <div class="thing">装</div>
    <div class="thing">西</div>
    <div class="thing">购</div>
  </div>
</template>
<script>
export default {
  name: "loading_show"
};
</script>

<style scoped lang='scss'>
html,
body {
  background-color: #1d1f20;
  margin: 0;
  height: 100%
}

$size: 50upx;
.box {
  height: #{$size * 2};
  width: #{$size * 2};
  position: relative;
  margin-top: 50%;
  margin-left: 45%;
  perspective: 1000px;
}

.thing {
  height: $size;
  width: $size;
  background-color: #e87722;
  font-size:12px;
  color: #fff;
  text-align: center;
  line-height: $size;
  position: absolute;
  box-sizing: border-box; 
  top: 0;
  left: 0;
}

@for $i from 1 through 4 {
  .thing:nth-of-type(#{$i}) {
    animation: bounce 0.5s ease-in-out infinite alternate,
      move 4s #{-$i}s infinite;
  }
}

@keyframes bounce {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.8);
  }
}

@keyframes move {
  0% {
    top: 0;
    left: 0;
    background-color: #e87722;
  }
  25% {
    top: 0;
    left: 50%;
    background-color: #a4d65e;
  }
  50% {
    top: 50%;
    left: 50%;
    background-color: #69b3e7;
  }
  75% {
    top: 50%;
    left: 0;
    background-color: #ffc845;
  }
}
</style>