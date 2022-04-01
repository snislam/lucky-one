import React from 'react';
import './Work.css';

const Works = () => {
    return (
        <div className='answer-section'>
            <div className="answer">
                <h3>How React Works?</h3>
                <p>React js is a js library which works on the base of <strong>virtual react DOM</strong>. React uses component made by JSX and render it to HTML using Reac package. Then React DOM inject this HTML to inde.html file means Document Object System. React make <strong>virtual DOM and always compare with real DOM</strong> to update or manipulating data which is the best features of React Js.</p>
            </div>
            <div className="answer">
                <h3>Props vs State</h3>
                <p>Props and state are use to pass data. When Props are the short form of properties <strong>pass data</strong> from one component to another component as <strong>object</strong>. But it is immutable and read only which can't modified.</p>
                <p>On the other hand, State are used as a part of a component and it's use always inside those component. It can be changed and mutable.</p>
            </div>
        </div>
    );
};

export default Works;