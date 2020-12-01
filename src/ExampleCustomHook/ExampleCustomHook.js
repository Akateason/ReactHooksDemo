import React, {  useCallback, useEffect, useState } from 'react';

export function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })

  // useCallback 缓存方法
  // useMemo 缓存状态
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    })
  }, [])
  
  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, []);

  return size;
}


export default function ExampleCustomHook()  {
  const size = useWinSize();

  return (
    <div>页面size:{size.width}x{size.height}</div>
  )
}



