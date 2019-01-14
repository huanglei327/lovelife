
import tou from '../../../assets/images/myself.png'
export default {
  data(){
    return {
       tou:tou,
       value:''
    }
  },
  methods:{
    goMySelf(){
      this.$common.Skip(this, '/MySelf')
    }
  }
}