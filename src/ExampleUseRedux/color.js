import React, { createContext, useReducer } from 'react'

export const ColorContext = createContext({});
export const UPDATE_COLOR = 'UPDATE_COLOR';

const reducer = (state,action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return action.color;
    default:
      return state;
  }
}

export const Color = props => {
  // https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer
  // const [state, dispatch] = useReducer(reducer, initialArg, init);
  const [color, dispatch] = useReducer(reducer, 'blue');
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  )
}
