import {codes} from 'micromark-util-symbol'
import { labelEnd } from './micromark-label-end'
import { labelStartImage } from './micromark-label-start-image'
import { labelStartLink } from './micromark-label-start-link'

export function remarkOptimize() {
  return {
    text: {
      [codes.leftSquareBracket]: labelStartLink,
      [codes.exclamationMark]: labelStartImage,
      [codes.rightSquareBracket]: labelEnd,
    },
    disable: {
      null: ['labelStartImage', 'labelStartLink', 'labelEnd']
    }
  }
}
