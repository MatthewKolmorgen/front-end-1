import React from 'react';
import CreateClass from './Classes.js';
import EditClasses from './EditClass.js';


const InstructorClasses = () => {
    return (
        <div>
            <h1>Create Classes</h1>
            <CreateClass />
            {/* <h2>Edit Classes</h2>
            <EditClasses /> */}
        </div>
    )
};

export default InstructorClasses