import React from 'react';
import PropTypes from 'prop-types';


function Education(education) {
    let { college, univ, duration, degree, major, marks} = education;
    return (
        <div>
            {college}
        </div>
    );
}


function Educations(props) {
    let {educations = []} = props;
    return educations.map((education, index) => <Education {...education} key={index}/>);
}

Educations.propTypes = {};
Educations.defaultProps = {};

export default Educations;
