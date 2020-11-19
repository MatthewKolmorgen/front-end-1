import React from 'react';
// import ClassCard from '../InstructorComponents/ClassCard.js';
import SampleClasses from '../InstructorComponents/classData.js'

const Members = () => {
    return (
        <div>
            <h1>Today's Classes</h1> 
            {/* <ClassCard /> Need Backend Data to finish */}
            <SampleClasses />
            
        </div>
    )
};

export default Members