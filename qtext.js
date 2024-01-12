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
    qqfaceUrl: {
      type: String,
      value: 'https://unpkg.com/qqface@0.1.2/img/',
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
