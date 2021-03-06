import React from 'react';

//Horizontal Navigation Bar

const DropDownMenu = () => {
    return (
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">Dropdown</a>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </li>
        </ul>
    )
}

export default DropDownMenu;