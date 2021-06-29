import React from 'react';

//Horizontal Navigation Bar

const HorizontalMenu = () => {
    return (
        <ul class="topnav">
        <li><a class="active" href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li class="right"><a href="#about">About</a></li>
      </ul>
    )
}

export default HorizontalMenu;