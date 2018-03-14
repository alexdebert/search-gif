/**
 * @overview Gif List component.
 */

//React
import React from 'react';

//Component
import Gif from '../gif/Gif';

//Style
import './GifList.scss'

const GifList = props => {
  const gifItems = props.gifs.map(gif => {
    return <Gif key={gif.id}
                gifClass="gif-item"
                id = {gif.id}
                url = {gif.images.downsized.url}
                height = {gif.images.fixed_height.height}
                width = {gif.images.fixed_height.width} 
                onGifSelect = { () => props.onGifSelect(gif)} />
  });

  return (
    <div className="gif-list">{gifItems}</div>
  );
};

export default GifList;