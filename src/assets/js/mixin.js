/**
 * Created by xfan on 2019/11/12.
 */
import { Message } from 'element-ui'
export const mixins = {
  data () {
    return {
      
    }
  },
  created () {
  },
  computed: {
    tableH () {
      const winH = document.body.offsetHeight
      return winH - 270
    }
  },
  watch: {
    $route (newV, oldV) {
      console.log(newV.path, oldV)
    }
  },
  methods: {
    Message (msg, type = 'success') {
      Message({ type: type, message: msg })
    }
    
  }
}
