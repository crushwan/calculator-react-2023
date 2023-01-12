import React from "react";
import { ACTIONS } from  "./App";


export default function DigitBtn({ style, dispatch, digit}) {
  return (
    <button
      onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})}
      className={`${style}`}
    >
      {digit}
    </button>
  )
}