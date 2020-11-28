import React from 'react'
import Buttons from './Buttons'
import { Color } from './color'
import ShowArea from './showArea'

export default function ExampleRedux() {
  return (
    <div>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>      
    </div>
  )
}

