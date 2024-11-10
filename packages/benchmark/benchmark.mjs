import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import { remarkOptimize } from 'optimize-label-end'
import Benchmark from 'benchmark'

const bracketString = new Array(10000).fill(0).map(_ => '[]').join('')

const suite = new Benchmark.Suite

suite
  .add('Original', function() {
    unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeStringify)
      .processSync(bracketString)
  })
  .add('RemarkOptimize', function() {
    unified()
      .use(remarkParse)
      .use(remarkOptimize)
      .use(remarkRehype)
      .use(rehypeStringify)
      .processSync(bracketString)
  })
  .on('cycle', function(event) {
    console.log(String(event.target))
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ 'async': true })