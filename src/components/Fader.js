import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../index.css'

const Fader = ({ text }) => {

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in',
    });

    useEffect(() => {
        const timeout = setInterval(() => {
            if (fadeProp.fade === 'fade-in') {
                setFadeProp({
                    fade: 'fade-out'
                })
            } else {
                setFadeProp({
                    fade: 'fade-in'
                })
            }
        }, 3000);

        return () => clearInterval(timeout)
    }, [fadeProp])

    return (
        <div>
            <h1 className={fadeProp.fade}> 
            <h2 className="title">
                Welcome to your <br />
                <span className="I">Savings.</span>
            </h2></h1>
        </div>
    )
}

// Fader.defaultProps = {
//     text: 'Welcome to your Savings.'
// }

Fader.propTypes = {
    text: PropTypes.string,
}

export default Fader