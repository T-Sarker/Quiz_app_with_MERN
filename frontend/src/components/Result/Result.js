import React, { useEffect, useState } from 'react'
import { BsFillXOctagonFill, BsFillPatchCheckFill } from "react-icons/bs";
import './Result.css'

const Result = async () => {

    const [questions, setQuestions] = useState([])
    const [results, setResults] = useState([])

    useEffect(() => {

        const questions = JSON.parse(localStorage.getItem('questions'));
        if (questions) {
            setQuestions(questions);
        }

        const result = JSON.parse(localStorage.getItem('result'));
        if (result) {
            setResults(result);
        }


    }, [results, questions])
    // console.log('questions ' + questions);
    // console.log('results ' + results);
    // console.log('results ' + localStorage.getItem('questions'));
    // console.log('results ' + localStorage.getItem('result'));

    return (
        <div>
            <div className="container">
                <div className="card p-3 my-3">
                    <h4>Applicant Name: Tapos Kumar</h4>
                    <div className="summeryList">
                        <ul class="d-flex justify-content-between p-2">
                            {/* <li class="list-group-item d-flex justify-content-between btn btn-outline"><p className='m-0'>Total Questions: </p> <span class="ms-2 p-2  bg-warning">{results.length}</span></li>
                            <li class="list-group-item d-flex justify-content-between btn btn-outline"><p className='m-0'>Correct Answer: </p> <span class="ms-2 p-2  bg-warning">{ }</span></li>
                            <li class="list-group-item d-flex justify-content-between btn btn-outline"><p className='m-0'>Wrong Answer: </p> <span class="ms-2 p-2  bg-warning">{ }</span></li>
                            <li class="list-group-item d-flex justify-content-between btn btn-outline"><p className='m-0'>Parcentage: </p> <span class="ms-2 p-2  bg-warning">{((questions.length / results.length) * 100)}%</span></li> */}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result