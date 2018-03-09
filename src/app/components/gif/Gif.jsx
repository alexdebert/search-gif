/**
 * @overview Gif component.
 */
import React from 'react';

const Gif = props => {
  return (
    <div className={props.gifClass} id={props.id}>
		<img src={props.url} alt={props.title} height={props.height} width={props.width} />
	</div>
  )
};

export default Gif;