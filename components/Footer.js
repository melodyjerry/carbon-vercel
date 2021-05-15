import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import { COLORS } from '../lib/constants'

const EmailSubscribe = dynamic(() => import('./EmailSubscribe'), {
  loading: () => null,
})

const Footer = () => (
  <footer role="contentinfo" className="mt3">
    <div className="mt2 mb2">
      引擎{' '}
      <a className="author-link" href="https://twitter.com/carbon_app">
        @carbon
      </a>{' '}
       | 
      托管{' '}
      <a className="author-link" href="https://vercel.com">
        @Vercel
      </a>{' '}
       | 
      工具人{' '}
      <a className="author-link" href="https://blog.csdn.net/weixin_43438052/article/details/114014822">
        @Melody Jerry
      </a>{' '}
    </div>
    <style jsx>
      {`
        footer {
          font-size: 14px;
          text-align: center;
        }

        footer > div {
          text-align: center;
          color: ${COLORS.GRAY};
        }

        nav {
          margin: 0 auto;
        }

        a {
          margin-right: 1rem;
        }

        a:last-child {
          margin-right: 0;
        }

        .new {
          position: absolute;
          margin: -4px 0 0 -12px;
          padding: 1px 3px;
          color: ${COLORS.SECONDARY};
          background: #cd3f45; /* COLORS.DARK_RED? */
          border-radius: 3px;
          font-size: 8px;
          font-weight: 600;
          line-height: 1.3;
          text-transform: uppercase;
          user-select: none;
        }

        .author-link {
          color: ${COLORS.PRIMARY};
          text-decoration: none;
        }

        .author-link:hover {
          color: #fff;
        }
      `}
    </style>
  </footer>
)

export default Footer
