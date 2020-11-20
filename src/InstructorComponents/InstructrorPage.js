import React from 'react';
import CreateClass from './Classes.js';
// import EditClasses from './EditClass.js';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 5% 0;
    justify-content: space-evenly;
    background: #242943;
    color: #ffffff;
    font-weight: 300;
    line-height: 1.65;
    `;


// Need backend to Edit/Delete tasks will create Mockdata in it's place.

const InstructorClasses = () => {
    return (
        <Div>
            <h1>Create Classes</h1>
            <CreateClass />
            {/* <h2>Edit Classes</h2>
            <EditClasses /> */}
        </Div>
    )
};

export default InstructorClasses