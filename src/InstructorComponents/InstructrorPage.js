import React from 'react';
import CreateClass from './Classes.js';
// import EditClasses from './EditClass.js';
import SampleClasses from './classData.js'

// Need backend to Edit/Delete tasks will create Mockdata in it's place.

const InstructorClasses = () => {
    return (
        <div>
            <h1>Create Classes</h1>
            <CreateClass />
            <h3>Todays Classes</h3>
            <SampleClasses />
            {/* <h2>Edit Classes</h2>
            <EditClasses /> */}
        </div>
    )
};

export default InstructorClasses