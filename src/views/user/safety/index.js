
import tou from '../../../assets/images/myself.png'
export default {
  data(){
    return {
       tou:tou
    }
  },
  methods:{
    goUpPwd(){
      this.$common.Skip(this, '/UpPwd')
    },
    goAuthentication(){
      this.$common.Skip(this, '/Authentication')
    }
  }
}