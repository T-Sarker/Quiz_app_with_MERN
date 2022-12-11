import React, { useEffect, useState } from 'react'
import { BsFillXOctagonFill, BsFillPatchCheckFill } from "react-icons/bs";
// import jwt from "jsonwebtoken";
import './Result.css'

const Result = () => {
    let rightans = 0;
    let wrongans = 0;


    const results = JSON.parse(localStorage.getItem('result'))
    const questions = JSON.parse(localStorage.getItem('questions'))

    // const token = jwt.sign('tapos')
    // console.log(jwt.decode(token));


    results.forEach(ans => {
        if (ans.Ganswer === ans.Canswer) {
            rightans = rightans + 1;
        } else {
            wrongans = wrongans + 1;
        }
    });
    const percent = (rightans / questions.length) * 100

    return (
        <div>
            <div className="container">
                <div className="card p-3 my-3">
                    <h4>Applicant Name: Tapos Kumar</h4>
                    <div className="summeryList">
                        <ul class="d-flex justify-content-between p-2">
                            <li class="list-group-item d-flex justify-content-between btn btn-outline"><p className='m-0'>Total Questions: </p> <span class="ms-2 p-2  bg-warning">{results.length}</span></li>
                            <li class="list-group-item d-flex justify-content-between btn btn-outline"><p className='m-0'>Correct Answer: </p> <span class="ms-2 p-2  bg-warning">{rightans}</span></li>
                            <li class="list-group-item d-flex justify-content-between btn btn-outline"><p className='m-0'>Wrong Answer: </p> <span class="ms-2 p-2  bg-warning">{wrongans}</span></li>
                            <li class="list-group-item d-flex justify-content-between btn btn-outline"><p className='m-0'>Parcentage: </p> <span class="ms-2 p-2  bg-warning">{percent}%</span></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3 className='my-4 fw-bolder'>Questions & Answers</h3>
                    </div>

                    {
                        questions.map((item, index) => {
                            console.log(item.answers[item.correctIndex] + ' ------------- ' + item.answers[results[index].Ganswer])
                            return (
                                <div className="col-12">
                                    <div class="card">
                                        <div class="card-header fw-bolder">
                                            {item.question}
                                            <span className='mx-4'>{item.answers[results[index].Ganswer] == item.answers[results[index].Canswer] ? <BsFillPatchCheckFill className='text-success fs-3' /> : <BsFillXOctagonFill className='text-danger fs-3' />}</span>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title my-4">Yor Answered: <span className='fw-bolder'>{item.answers[results[index].Ganswer]}</span></h5>
                                            <h5 class="card-title">Correct Answers: </h5>
                                            <p class={`btn btn-${item.answers[item.correctIndex] === item.answers[0] ? 'success' : 'primary'} mx-2 my-3`}>{item.answers[0]}</p>
                                            <p class={`btn btn-${item.answers[item.correctIndex] === item.answers[1] ? 'success' : 'primary'} mx-2 my-3`}>{item.answers[1]}</p>
                                            <p class={`btn btn-${item.answers[item.correctIndex] === item.answers[2] ? 'success' : 'primary'} mx-2 my-3`}>{item.answers[2]}</p>
                                            <p class={`btn btn-${item.answers[item.correctIndex] === item.answers[3] ? 'success' : 'primary'} mx-2 my-3`}>{item.answers[3]}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default Result