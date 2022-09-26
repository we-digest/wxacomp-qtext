import { segmentText } from 'qtext-parse'

Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    text: {
      type: String,
      value: '',
    },
  },
  data: {
    segments: [],
  },
  observers: {
    text(v) {
      // TODO 开关控制 是否需要 replaceCharSymbols
      this.setData({ segments: segmentText(v || '') })
    }
  }
})
