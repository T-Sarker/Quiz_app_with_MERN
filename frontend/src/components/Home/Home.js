import React from 'react'
import { NavLink } from 'react-router-dom'
import Topics from '../Topics/Topics'
import './Home.css'
const Home = () => {
    return (
        <>
            <div className="HomeBanner">
                <div className="bannerDetails">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab tempore quis soluta vel aliquam quisquam vitae quas repellat</p>
                    <div className="d-flex">
                        <NavLink to="" className='btn rounded-pill btn-outline px-5 me-3'>Browse More</NavLink>
                        <NavLink to="" className='btn rounded-pill btn-outline px-5'>Get Started</NavLink>
                    </div>
                </div>
            </div>

            <div className="QuizTopics my-4">
                <div className="container">
                    <h2 className='text-center fw-bolder my-5'>Quiz Topics</h2>
                    <Topics />
                </div>
            </div>
        </>
    )
}

export default Home