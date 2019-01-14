

export default {
  data(){
    return {
      msg:'123123'
    }
  },
  methods:{
    goHistory(){
      this.$common.Skip(this,'/history')
    },
    goPublish(){
      this.$common.Skip(this,'/Publish')
    }
  }
}