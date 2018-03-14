/**
 * @overview Gif component.
 */

 //React
import React from 'react';

//Styles
import './Gif.scss'

const Gif = props => {
  return (
    <div className={props.gifClass} id={props.id} onClick={props.onGifSelect}>
		<img src={props.url} alt={props.title} height={props.height} width={props.width} />
	</div>
  )
};

export default Gif;