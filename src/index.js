import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import './style.css'
import Back from './img/back.png'

import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default function Card({
  handleClick, 
  id, 
  type,
  flipped, 
  solved,
  height, 
  width,
  disabled
}) {
    return (
    <div
        className = {`flip-container ${flipped ? 'flipped' : ''}`}
        style = {{
          width, 
          height 
        }}
        onClick = {() => disabled ? null : handleClick(id)}
    >
        <div className ="flipper">
            <img
                style={{
                  height, width
                }}
                className ={flipped ? 'front' : 'back'}
                src = {(flipped || solved ? type : Back)}
                alt= '.'
            />
        </div>
    </div>
  )
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired,
}

