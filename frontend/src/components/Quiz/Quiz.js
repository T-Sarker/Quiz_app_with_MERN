import React, { useEffect, useState } from 'react'
import './Quiz.css'
import axios from 'axios'
import { redirect, useNavigate, useParams } from 'react-router-dom'

const Quiz = () => {
    const params = useParams();

    const navigate = useNavigate();
    const [questionShow, setQuestionShow] = useState(false)
    const [questions, setQuestions] = useState([])

    // store the ansers from user
    const [result, setResult] = useState([{ qid: 0, Ganswer: 0, Canswer: 0 }])

    //get the current answer
    const [currentAnswer, setCurrentAnswer] = useState(null)


    /**
    setting a useState to show the individual data
     */
    const [questionNumber, setquestionNumber] = useState(0)

    useEffect(() => {
        const fetchQuestions = async () => {
            console.log(`/question/allQuestions/json/${params.id}`);
            const allQuestions = await axios.get(`/question/allQuestions/json/${params.id}`)
            console.log(typeof (allQuestions.data));
            console.log(allQuestions.data);
            setQuestions(allQuestions.data)

        }

        fetchQuestions();
    }, [])

    const increaseQuestionNumber = () => {
        setCurrentAnswer(null)
        setquestionNumber(questionNumber + 1)

        //getting stored the values
        storeThevaluesIntoObjectArray({ qid: questionNumber, Ganswer: currentAnswer, Canswer: questions[questionNumber].correctIndex })

    }

    const decreaseQuestionNumber = () => {
        setCurrentAnswer(null)
        setquestionNumber(questionNumber - 1)

    }

    const showResult = () => {
        storeThevaluesIntoObjectArray({ qid: questionNumber, Ganswer: currentAnswer, Canswer: questions[questionNumber].correctIndex })
        localStorage.setItem('result', JSON.stringify(result))
        localStorage.setItem('questions', JSON.stringify(questions))
        const url = `/quiz/test/result/show/${params.id}`
        navigate(url)

    }

    function storeThevaluesIntoObjectArray(element) { // (1)

        const i = result.findIndex(_element => _element.qid === element.qid);
        if (i > -1) result[i] = element; // (2)
        else result.push(element);
    }

    return (
        <div className='container vh-100 mt-5'>
            <h3>You can Start Test </h3>
            {!questionShow ? <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button type='button' className="btn btn-primary" onClick={() => { setQuestionShow(true) }}>Start</button>
                </div>
            </div> : ''
            }

            {questionShow ? <div className="container">
                <div className="row w-50 m-auto">

                    <div className="col-12 py-2 rounded-pill btn btn-outline my-3"><span className='badge text-bg-warning'>Q{questionNumber + 1}</span> {questions[questionNumber].question}</div>

                    <div className="col-12">
                        <div className="container text-center my-3">

                            <div className="col-12 col-sm-12 col-md-5 btn btn-outline my-4 mx-2 answers">
                                <input type='radio'
                                    id={questions[questionNumber].answers[0]}
                                    name='answer' value={questions[questionNumber].answers[0]}
                                    onClick={() => { setCurrentAnswer(0) }} />

                                <label htmlFor={questions[questionNumber].answers[0]}>{questions[questionNumber].answers[0]}</label>
                            </div>


                            <div className="col-12 col-sm-12 col-md-5 btn btn-outline my-4 mx-2 answers">
                                <input type='radio'
                                    id={questions[questionNumber].answers[1]}
                                    name='answer' value={questions[questionNumber].answers[1]}
                                    onClick={() => { setCurrentAnswer(1) }} />

                                <label htmlFor={questions[questionNumber].answers[1]}>{questions[questionNumber].answers[1]}</label>
                            </div>


                            <div className="col-12 col-sm-12 col-md-5 btn btn-outline my-4 mx-2 answers">
                                <input type='radio'
                                    id={questions[questionNumber].answers[2]}
                                    name='answer'
                                    value={questions[questionNumber].answers[2]}
                                    onClick={() => { setCurrentAnswer(2) }} />

                                <label htmlFor={questions[questionNumber].answers[2]}>{questions[questionNumber].answers[2]}</label>
                            </div>


                            <div className="col-12 col-sm-12 col-md-5 btn btn-outline my-4 mx-2 answers">
                                <input type='radio'
                                    id={questions[questionNumber].answers[3]}
                                    name='answer'
                                    value={questions[questionNumber].answers[3]}
                                    onClick={() => { setCurrentAnswer(3) }} />

                                <label htmlFor={questions[questionNumber].answers[3]}>{questions[questionNumber].answers[3]}</label>
                            </div>

                        </div>
                    </div>

                    <div className="col-12">
                        {questionNumber >= questions.length - 1 ? <div className="d-flex justify-content-center"><button className=' rounded-pill btn btn-outline my-3 d-block mx-1 answers' onClick={showResult}>Result</button></div> :
                            <div className="d-flex justify-content-center">
                                <button className=' rounded-pill btn btn-outline my-3 d-block mx-1 answers' onClick={decreaseQuestionNumber}>Prev</button>
                                <button className=' rounded-pill btn btn-outline my-3 d-block mx-1 answers' disabled={currentAnswer === null ? true : false} onClick={increaseQuestionNumber}>Next</button>
                            </div>}
                    </div>
                </div>

            </div> : ''}
        </div>
    )
}

export default Quiz