import React from 'react';
import PropTypes from 'prop-types';
import {Card, Header, Icon, Label, List} from "semantic-ui-react";

function Description({appreciations, details}) {
    let description= details.map((list, index) =>(
        <List.Item key={`description${index}`}>
            <List.Icon name='code' />
            <List.Content>{list}</List.Content>
        </List.Item>));

    if(appreciations&&appreciations.length>0){
        description.push(
            <List.Item key={'appreciations'}>
                <List.Icon name='thumbs up' />
                <List.Content>{appreciations}</List.Content>
            </List.Item>)
    }
    return description;
}

function TechnologyUsed({technologyUsed = []}) {
    return technologyUsed.map(tech => <Label as='a' tag>{tech}</Label>);
}

function Experience(experience) {
    let { company, profile, duration, technologyUsed = [],projects = [],details = [], appreciations} = experience;
    return (
        <Card fluid >
            <Card.Content>
                <Label  ribbon='right' color='orange'>{duration}</Label>
                <Card.Header className='company'>{company}</Card.Header>
                <Card.Meta className='role'>{profile}</Card.Meta>
                <TechnologyUsed technologyUsed={technologyUsed}/>
                <Card.Description className='description'>
                    <List>
                        {<Description details={details} appreciations={appreciations}/>}
                    </List>
                </Card.Description>
            </Card.Content>
        </Card>
    );
}


function Experiences(props) {
    let {experiences = []} = props;
    let renderExp =  experiences.map((experience , index)=> <Experience {...experience} key={index}/>);
    return (
        <div className='content'  >
            <Header as='h2' inverted textAlign='left'>
                <Icon name='code' textAlign='center' />
                <Header.Content>
                    Work Experience
                </Header.Content>
            </Header>
            <Card.Group stackable centered  itemsPerRow={2}>
                {renderExp}
            </Card.Group>
        </div>
    );
}

Experiences.propTypes = {};
Experiences.defaultProps = {};

export default Experiences;
