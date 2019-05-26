export default {
  data() {
    return {
      msg: '用户首页',
      userInfo: {},
      searchValue: '',
      searchList: []
    }
  },
  mounted() {
    let searchLocal = JSON.parse(localStorage.getItem("SearchList"))
    if(searchLocal)
      this.searchList = searchLocal
  },
  methods: {
    delSearch() {
      localStorage.setItem("SearchList", '[]')
      this.searchList = []
    },
    goSeachList(item) {
      this.$router.push({
        path: '/SearchList',
        query: {
          searchValue: item
        }
      })
    },
    onSearch() {
      const that = this
      if (that.searchValue !== '') {
        let searchLocal = JSON.parse(localStorage.getItem("SearchList"))
        console.log(searchLocal)
        if (searchLocal && searchLocal.length > 0) {
          if (searchLocal.length >= 10) {
            searchLocal.shift();
          }
        }
        else {
          that.searchList = []
        }
        that.searchList.push(that.searchValue)
        localStorage.setItem("SearchList", JSON.stringify(that.searchList))
      }
      that.$router.push({
        path: '/SearchList',
        query: {
          searchValue: that.searchValue
        }
      })
    }
  }
}