export default {
  data(){
    return {
        historyList:[
          {
            img:'',
            title:'乐智课',
            type:'到店',
            address:'普新路',
            distance:'1.1KM'
          },
          {
            img:'',
            title:'乐智课',
            type:'到店',
            address:'普新路',
            distance:'1.1KM'
          }, {
            img:'',
            title:'乐智课',
            type:'到店',
            address:'普新路',
            distance:'1.1KM'
          },
          {
            img:'',
            title:'乐智课',
            type:'到店',
            address:'普新路',
            distance:'1.1KM'
          }
        ]
    }
  },
  methods:{
    goDetails(item){
      this.$common.Skip(this,'/Details')
    }
  }
}