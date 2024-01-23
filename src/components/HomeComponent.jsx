import { Component } from 'react';
import './HomeComponent.css'

export default class HomeComponent extends Component {
    render() {
        return(
            <>
                <div className='startPage-container'>
                    <div className='quiz-app' >
                        <h1>Quiz App</h1>
                    </div>
                    <div className='play-sec'>
                        <button className='play-btn'>Play</button>
                    </div>
                </div>
            </>
        )
    }
}