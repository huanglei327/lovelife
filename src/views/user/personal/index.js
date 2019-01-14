
import tou from '../../../assets/images/myself.png'
export default {
  data(){
    return {
       tou:tou
    }
  },
  methods:{
    goMySelf(){
      this.$common.Skip(this, '/MySelf')
    },
    goSafety(){
      this.$common.Skip(this,'/Safety')
    }
  }
}