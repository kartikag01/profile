import React from './static/react.png';
import Node from './static/node.png';
import Java from './static/java.png';


export default function getImageForSkill(skill){
    if(skill === "ReactJs")
        return React;
    else if(skill === "NodeJS")
        return Node ;
    else if(skill === "Java")
        return Java;
    else
        return  "";
}