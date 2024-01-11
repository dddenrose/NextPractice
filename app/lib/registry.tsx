'use client'
 
import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
 
export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
 
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  // 假如window 不是undefined(就是client端) 回傳children
  if (typeof window !== 'undefined') return <>{children}</>
 
  // 如果是server端, 回傳server style sheet的children
  // 如此一來, 在server跟client端, 在ui的畫面呈現上可以有流暢的一致性
  // 若只在client端才吃styled-component的style的話, 會有一個沒吃到style的ui斷檔
  // 讓使用者體驗會覺得變差
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}