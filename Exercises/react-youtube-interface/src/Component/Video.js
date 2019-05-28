import React, {Component} from 'react';
import YTIC from '../assets/unnamed.jpg'
class Video extends Component{
    render(){
        return(
            <div className='LeftVideo'>
                <div>
                <iframe width="700" height="315" src="https://www.youtube.com/embed/dpw9EHDh2bM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div id='text1'>
                    <h3>React Today and Tomorrow and 90% Cleaner React With Hooks</h3>
                    <p>321,409 views</p>
                </div>
                <div className='Desrpition'>
                    <div>
                        <img src={YTIC} id='image2'></img>
                    </div>
                    <div id='text2'>
                        <h3>React Conf</h3>
                        <p>Published on 26 Oct 2018</p>
                    </div>
                    <div>
                        <button tupe="text" id='b2'>SUBSCRIBE 14K</button>
                    </div>
                </div>
                <div id='text3'>
                    <h5>The first three talks from React Conf 2018 by Sophie Alpert, Dan Abramov, and Ryan Florence.</h5>
                    <h5>Learn more about Hooks at</h5><a src=' https://reactjs.org/hooks' id='link'> https://reactjs.org/hooks</a>
                    <p><br />Show More</p>
                </div>
            </div>
        )
    }
}
export default Video;