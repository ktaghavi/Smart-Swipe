import React from 'react';
import './CardFooter.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRate from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';


const CardFooter = () => {
  return (
    <div className='bottomButtons'>
        <IconButton className="replay">
          <ReplayIcon fontSize ="large"/>
        </IconButton>
        <IconButton className="close">
          <CloseIcon fontSize ="large"/>
        </IconButton>
        <IconButton className="star">
          <StarRate fontSize ="large"/>
        </IconButton>
        <IconButton className="favorite">
          <FavoriteIcon fontSize ="large"/>
        </IconButton>
        <IconButton className="flash">
          <FlashOnIcon fontSize ="large"/>
        </IconButton>
    </div>
  )
}

export default CardFooter