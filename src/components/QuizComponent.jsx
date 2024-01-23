import { Component } from 'react'
import './QuizComponent.css'

export default class QuizComponent extends Component {
    render() {
        return(
            <>

                <div className='quiz-container'>

                    <div className='question-text'>
                        <h2>Question</h2>
                    </div>

                    <div className='page'>
                        <h4>1 of 15</h4>
                    </div>

                    <div className='question'>
                        <h3>Which is the only animal that can jump?</h3>
                    </div>

                    <div className='options'>
                        <div className='option-1'>
                            <button className='opt-btn'>Dog</button>
                        </div>

                        <div className='option-2'>
                            <button className='opt-btn'>Elephant</button>
                        </div>

                        <div className='option-3'>
                            <button className='opt-btn'>Goat</button>
                        </div>

                        <div className='option-4'>
                            <button className='opt-btn'>Lion</button>
                        </div>
                    </div>
                    
                    <div className='actions'>
                        <div className='prev'>
                            <button className='prev-btn'>Previous</button>
                        </div>

                        <div className='next'>
                            <button className='next-btn'>Next</button>
                        </div>

                        <div className='quit'>
                            <button className='quit-btn'>Quit</button>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}