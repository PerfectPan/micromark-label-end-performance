import {codes} from 'micromark-util-symbol'
import { labelEnd } from './micromark-label-end.js'
import { labelStartImage } from './micromark-label-start-image.js'
import { labelStartLink } from './micromark-label-start-link.js'

export function remarkOptimize() {
  const data = this.data()

  const micromarkExtensions =
    data.micromarkExtensions || (data.micromarkExtensions = [])

  micromarkExtensions.push({
    text: {
      [codes.leftSquareBracket]: labelStartLink,
      [codes.exclamationMark]: labelStartImage,
      [codes.rightSquareBracket]: labelEnd,
    },
    disable: {
      null: ['labelStartImage', 'labelStartLink', 'labelEnd']
    }
  })
}
