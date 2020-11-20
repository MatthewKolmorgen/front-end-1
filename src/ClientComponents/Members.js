import React from 'react';
// import ClassCard from '../InstructorComponents/ClassCard.js';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10%;
    background: #242943;
    color: #ffffff;
    font-weight: 300;
    line-height: 1.65;
    `;

const Members = () => {
    return (
        <Div>
            <h1>Today's Classes</h1> 
            {/* <ClassCard /> Need Backend Data to finish */}
        </Div>
    )
};

export default Members