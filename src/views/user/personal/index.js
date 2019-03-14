
import tou from '../../../assets/images/myself.png'
import { ExitApi } from '@/utils/httpUtils/api.js'
export default {
  data() {
    return {
      tou: tou
    }
  },
  methods: {
    goMySelf() {
      this.$common.Skip(this, '/MySelf')
    },
    goSafety() {
      this.$common.Skip(this, '/Safety')
    },
    clearLocal(){
      localStorage.clear();
      this.$common.Skip(this, '/')
    },
    btnExit() {
      const c = res => {
        if (res.resCode == 1) {
          localStorage.clear()
          this.$common.Skip(this, '/')
        }
      }
      const param = {

      }
      ExitApi(param).then(c)
    }
  }
}