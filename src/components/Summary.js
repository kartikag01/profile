import React from 'react';
import PropTypes from 'prop-types';
import KartikImage from '../static/KARTIK_AGARWAL.jpeg';
import {Button, Header, Icon, Image} from 'semantic-ui-react'
import Skills from "./Skills";

const buttonStyle={margin:'10px'};

const HeaderContent = ({display}) => (
    <Header.Subheader  className='info' >
        {display}
    </Header.Subheader>);

function Summary(props) {
    let {name , img, skills, phoneno, email, linkedIn, twitter, about,
        github, medium, stackOverflow, pdf_url, total_exp} = props;
    return (
        <div>
            <Header as='h1' icon textAlign='center' inverted>

                <Image bordered src={KartikImage} style={{width:'162px'}} circular />
                <Header.Content>{name}</Header.Content>
                <HeaderContent  display={about} />
                <Skills  skills={skills} />
                <HeaderContent  display={phoneno} />
                <HeaderContent display={<a style={{color:'#f21a0f', textDecoration:'underline'}}
                                           href={`mailto:${email}`}>{email}</a>} />
            </Header>
            <div style={{textAlign:'center', borderRadius:'80%'}}>
                <Button circular style={buttonStyle} link target='_blank' href={twitter} color='twitter'>
                    <Icon name='twitter' /> Twitter
                </Button>
                <Button circular style={buttonStyle} link  target='_blank' href={github} color='github'>
                    <Icon name='github' /> GitHub
                </Button>
                <Button circular  style={buttonStyle} link  target='_blank' href={linkedIn} color='linkedin'>
                    <Icon name='linkedin' /> LinkedIn
                </Button><br/>
                <Button circular style={Object.assign({},buttonStyle, {backgroundColor : "#09e36f"})} link  target='_blank' href={medium} >
                    <Icon name='medium' /> Medium
                </Button>
                <Button circular style={Object.assign({},buttonStyle, {backgroundColor : "#ffa500"})} link  target='_blank' href={stackOverflow} >
                    <Icon name='stack overflow' /> Stack Overflow
                </Button>
            </div>
        </div>
    );
}

Summary.propTypes = {};
Summary.defaultProps = {};

export default Summary;
