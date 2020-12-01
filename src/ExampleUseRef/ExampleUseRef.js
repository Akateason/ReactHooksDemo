//
// useRef主要用来操作dom元素. 用法类似useState
// 获取/控制 dom元素
// 

import React, { useRef, useState ,useEffect} from 'react';

export default function ExampleUseRef() {
  const inputElement = useRef(null)
  const onButtonClick = () => {
    inputElement.current.value = 'hellow, js11111';
    console.log(inputElement);
  }

  const [text, setText] = useState('js default2222');
  const textRef = useRef();

  useEffect(() => { 
    textRef.current = text;
    console.log('textRef.current : ', textRef.current);
  })

  return (
    <>
      {/* 用法一 操作dom*/}
      <input ref={inputElement} type='text' />
      <button onClick={onButtonClick}>在input上显示文字</button>
      <br />
      <br />
      {/* 用法二 保存变量*/}
      <input value={text} onChange={(e)=>{setText(e.target.value)}} />
    </>
  )
}
