
import bj from '../../assets/images/bj.jpg'
import bj1 from '../../assets/images/bj1.jpg'
import bj2 from '../../assets/images/bj2.jpg'
import bj3 from '../../assets/images/bj3.jpg'

export default {
  data() {
    return {
      msg: '224324',
      active: 0,
      leftShow: true,
      menuList:[
        {
          name:'最新新闻'
        },
        {
          name:'餐厅娱乐'
        },
        {
          name:'轻松购物'
        },
        {
          name:'轻松购物'
        },
        {
          name:'轻松购物'
        },
        {
          name:'轻松购物'
        },
        {
          name:'轻松购物'
        },
        {
          name:'轻松购物'
        },
        {
          name:'轻松购物'
        },
        {
          name:'轻松购物'
        },
        {
          name:'轻松购物'
        },
        {
          name:'轻松购物'
        },
        {
          name:'轻松购物'
        },
        {
          name:'轻松购物'
        },
        {
          name:'轻松购物'
        },
        {
          name:'轻松购物'
        },
      ],
      imgList: [
        {
          id: 1,
          name: bj
        },
        {
          id: 2,
          name: bj1
        },
        {
          id: 3,
          name: bj2
        },
        {
          id: 4,
          name: bj3
        },
      ],
      current: 0,
      bxList: [
        {
          id: 1,
          img: bj,
          title: '涉水险',
          remark: '全国范围故障车辆免费救援。学的险种配搭',
          time: '2018-12-05 12:02:12'
        },
        {
          id: 1,
          img: bj1,
          title: '涉水险',
          remark: '全国范围故障车辆免费救援。学的险种配搭',
          time: '2018-12-05 12:02:12'
        },
        {
          id: 1,
          img: bj2,
          title: '涉水险',
          remark: '全国范围故障车辆免费救援。学的险种配搭',
          time: '2018-12-05 12:02:12'
        }
      ]
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
}