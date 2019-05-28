import React, {Component} from 'react';
import YouTube from '../assets/youtube.png';
class Headers extends Component{
    render(){
        return(
            <div className='Header'>
                <img src={YouTube}></img>
                <nav>
                    <input type='text' required placeholder='Search'></input>
                    <button type='text' id='b1'></button>
                </nav>
                <div className='Notivication'>
                    <a href="#" id='a1'></a>
                    <a href="#" id='a2'></a>
                    <a href="#" id='a3'></a>
                    <a href="#" id='a4'></a>
                </div>
            </div>
        )
    }
}
export default Headers;
