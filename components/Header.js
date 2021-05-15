import React from 'react'
import Logo from './svg/Logo'

const Header = ({ enableHeroText }) => (
  <header role="banner" className="mb4">
    <div className="header-content">
      <a id="link-home" href="/" aria-label="Home">
        <Logo />
      </a>
      {enableHeroText ? (
        <h2 className="mt3">
          快速创建代码图像的工具，让你的代码分享逼格更高、排版更直观
          <br />
          导入你的代码：支持直接拖入代码文件、直接粘贴代码到编辑器
        </h2>
      ) : null}
    </div>
    <style jsx>
      {`
        .header-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .header-content a {
          height: 64px;
          max-width: 96vw;
        }

        h2 {
          text-align: center;
        }

        @media (max-width: 768px) {
          header {
            margin-bottom: var(--x3);
          }
          h2 {
            font-size: 13px;
          }
        }
      `}
    </style>
  </header>
)

export default Header
