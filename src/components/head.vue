<template>
 <div>
    <van-nav-bar
      :title="navtitle"
      :left-text="left_text"
      :left-arrow="left_arrow"
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
 </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";
export default {
  data(){
    return {

    }
  },
  computed: { ...mapGetters(["navtitle", "left_arrow", "left_text"]) },
}
</script>

<style>

</style>
