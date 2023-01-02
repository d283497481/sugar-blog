import { BlogTheme, Theme } from '@sugarat/theme'
import { ElMessage } from 'element-plus'
import { h } from 'vue'

const AIWords = [
  '无论多么沉重的负担，也不要忘记微笑；无论多么漫长的路程，也不要忘记坚持',
  '生活的真谛不在繁华，而在于淡泊',
  '只要坚持自己的目标，没有什么不可能',
  '未来永远是可期待的，唯有拼搏不懈，才能创造辉煌',
  '希望是一把尺子，它能衡量痛',
  '一个人的勇气，不是看他有多么强大，而是看他在多大的困难面前依然坚持',
  '勇气不是不害怕，而是在害怕的同时做出决定',
  '人生就是不断取舍的过程，你可以拥有很多，但终究要放弃很多',
  '生活的艰辛，不是把你击垮，而是让你更坚强',
  '勇气不是没有恐惧，而是敢于面对恐惧'
]

const homeProps: Theme.HomeConfig = {
  handleChangeSlogan() {
    ElMessage.success({
      message: '支持点击修改内容',
      duration: 888
    })
    return AIWords[Math.floor(Math.random() * AIWords.length)]
  }
}

export default {
  ...BlogTheme,
  Layout: h(BlogTheme.Layout, homeProps)
}
