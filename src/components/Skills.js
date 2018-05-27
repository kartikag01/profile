import React from 'react';
import PropTypes from 'prop-types';
import {Label} from "semantic-ui-react";
import getImageForSkill from "../utils";


function Image({skill}) {
    return <img src={getImageForSkill(skill)}/>
}

function Skill({skill}) {
    return (
        <Label >
            <Image skill={skill}/>
            {skill}
        </Label>
    );
}

function Skills({skills}) {
    return skills.map((skill, index) => <Skill skill={skill}/>)
}

Skills.propTypes = {};
Skills.defaultProps = {};

export default Skills;
