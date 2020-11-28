
// # useMemo
// 面向对象时有 shouldComponentUpdate 组件更新之前.
// 在用hooks之后 生命周期变成useEffect 对比状态 需要解决  父子方法中调用的性能问题. 如果父组件更新, 子组件更新, 子组件里面有请求数据. 需要用 useMemo 解决

import React, { useMemo, useState } from 'react';

export default function ExampleUseMemo() {
  const [xiaohong, setXiaohong] = useState('小红在待客状态');
  const [zhilin, setZhilin] = useState('志玲在待客状态');

  return (
    <>
      <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
      <button onClick={() => { setZhilin(new Date().getTime() + '志玲来了') }}>志玲</button>      
      <ChildComponent name={xiaohong}>{ zhilin}</ChildComponent>
    </>
  );
}

function ChildComponent({ name, children }) {    

  function changeXiaohong() {
    console.log('小红来了, 小红来了, 小红来了');
    return name + '小红走来了';
  }
  // 父组件任何状态发生变化, 子组件任何方法changeXiaohong都会重新渲染一遍. 用useMemo解决.   
  // const actionXiaohong = changeXiaohong(name);
  const actionXiaohong = useMemo(() => changeXiaohong(name), [name]);

  return (
    <>
      <div>{actionXiaohong}</div>  
      <div>{children}</div>  
    </>
  )
}
