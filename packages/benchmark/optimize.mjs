import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import { remarkOptimize } from 'optimize-label-end';

const bracketString = new Array(10000).fill(0).map(_ => '[]').join('')

console.time('optimize')

unified()
  .use(remarkParse)
  .use(remarkOptimize)
  .use(remarkRehype)
  .use(rehypeStringify)
  .processSync(bracketString)

console.timeEnd('optimize')
