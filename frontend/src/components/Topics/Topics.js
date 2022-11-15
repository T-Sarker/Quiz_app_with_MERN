import React, { useEffect, useState } from 'react'
import { FaEarlybirds } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
const Topics = () => {
    // const allTopics = [{ id: 1, topic: 'Science', details: 'This is a long paragraph written to show how the line-height of an element is affected by our utilities.', status: true }, { id: 2, topic: 'Biology', details: 'This is a long paragraph written to show how the line-height of an element is affected by our utilities.', status: true }, { id: 3, topic: 'Science3', details: 'This is a long paragraph written to show how the line-height of an element is affected by our utilities.', status: true }, { id: 4, topic: 'Science4', details: 'This is a long paragraph written to show how the line-height of an element is affected by our utilities.', status: true }, { id: 5, topic: 'Science5', details: 'This is a long paragraph written to show how the line-height of an element is affected by our utilities.', status: true }, { id: 6, topic: 'Science6', details: 'This is a long paragraph written to show how the line-height of an element is affected by our utilities.', status: true }, { id: 7, topic: 'Science7', details: 'This is a long paragraph written to show how the line-height of an element is affected by our utilities.', status: true },];
    // const allTopics = axios.get('/topics/show/json/topics')
    // console.log(allTopics + ' is the topics');
    const [topics, setTopics] = useState([])

    useEffect(() => {
        const fetchTopics = async () => {
            const allTopics = await axios.get('/topics/show/json/topics')
            setTopics(allTopics.data)

        }

        fetchTopics();
    }, [])


    return (
        <div>
            <div className="single-quiz-topic">
                <div className="row">
                    {topics.map((topic) => {
                        return (
                            <div className="col-3 my-3" key={topic.id}>
                                <div className="card align-items-center p-3 text-center">
                                    <FaEarlybirds className='fs-1' />
                                    <div className="card-body">
                                        <h5 className="card-title">{topic.topic}</h5>
                                        <p className="card-text">Try This Test Now</p>
                                        <NavLink to={`/quiz/test/${topic._id}`} className="btn rounded-pill btn-outline">Start</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Topics