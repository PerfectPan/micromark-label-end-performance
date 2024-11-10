import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'

const bracketString = new Array(10000).fill(0).map(_ => '[]').join('')

console.time('original')

unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify)
  .processSync(bracketString)

console.timeEnd('original')
