

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/dawidvanderhoven/code/personal/dawidvdh.github.io/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/Users/dawidvanderhoven/code/personal/dawidvdh.github.io/node_modules/react-static/lib/browser/components/Default404'), universalOptions)
      t_0.template = '/Users/dawidvanderhoven/code/personal/dawidvdh.github.io/node_modules/react-static/lib/browser/components/Default404'
      
const t_1 = universal(import('/Users/dawidvanderhoven/code/personal/dawidvdh.github.io/src/pages/index'), universalOptions)
      t_1.template = '/Users/dawidvanderhoven/code/personal/dawidvdh.github.io/src/pages/index'
      
const t_2 = universal(import('/Users/dawidvanderhoven/code/personal/dawidvdh.github.io/src/pages/About'), universalOptions)
      t_2.template = '/Users/dawidvanderhoven/code/personal/dawidvdh.github.io/src/pages/About'
      
const t_3 = universal(import('/Users/dawidvanderhoven/code/personal/dawidvdh.github.io/src/containers/CaseStudy'), universalOptions)
      t_3.template = '/Users/dawidvanderhoven/code/personal/dawidvdh.github.io/src/containers/CaseStudy'
      
const t_4 = universal(import('/Users/dawidvanderhoven/code/personal/dawidvdh.github.io/src/pages/CaseStudies'), universalOptions)
      t_4.template = '/Users/dawidvanderhoven/code/personal/dawidvdh.github.io/src/pages/CaseStudies'
      
const t_5 = universal(import('/Users/dawidvanderhoven/code/personal/dawidvdh.github.io/src/pages/Contact'), universalOptions)
      t_5.template = '/Users/dawidvanderhoven/code/personal/dawidvdh.github.io/src/pages/Contact'
      

// Template Map
export default {
  '/Users/dawidvanderhoven/code/personal/dawidvdh.github.io/node_modules/react-static/lib/browser/components/Default404': t_0,
'/Users/dawidvanderhoven/code/personal/dawidvdh.github.io/src/pages/index': t_1,
'/Users/dawidvanderhoven/code/personal/dawidvdh.github.io/src/pages/About': t_2,
'/Users/dawidvanderhoven/code/personal/dawidvdh.github.io/src/containers/CaseStudy': t_3,
'/Users/dawidvanderhoven/code/personal/dawidvdh.github.io/src/pages/CaseStudies': t_4,
'/Users/dawidvanderhoven/code/personal/dawidvdh.github.io/src/pages/Contact': t_5
}
// Not Found Template
export const notFoundTemplate = "/Users/dawidvanderhoven/code/personal/dawidvdh.github.io/node_modules/react-static/lib/browser/components/Default404"

