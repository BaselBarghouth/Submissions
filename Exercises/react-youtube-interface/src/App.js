import React, {Component} from 'react';
import './App.css';
import Headers from './Component/Headers';
import Video from './Component/Video';
import Videoo from './Component/Videoo';
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {
        return (
            <div className="App">
               <Headers />
               <div id='page'>
                    <Video />
                    <Videoo />
               </div>
            </div>
            
        );
    }
}

export default App;
