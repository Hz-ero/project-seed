import React from 'react'
import style from './index.css'

const About = (props) => {
  const { clickFetch } = props

  const handleClickJump = (anchorId) => {
    if (anchorId) {
      // 找到锚点
      let anchorElement = document.getElementById(anchorId)
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) { anchorElement.scrollIntoView() }
    }
  }
  return (
    <div className={style.content} >
      <a onClick={() => handleClickJump('jump02')} >jump to jump01</a>
            this is component About <br />
            import when need <br />
      <button onClick={() => clickFetch()} >TestFetch</button>

            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
      <p name='jump01'>jump01</p>
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
      <p id='jump02'>jump02</p>
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
            this is component About <br />
            import when need <br />
    </div>
  )
}

export default About
