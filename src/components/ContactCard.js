import React from 'react';

const ContactCard = (props) => {
    console.log(props.info)
    return (
        <div>
            <img src={props.info.imgUrl} alt="No encontrado" />
            <h3>{props.info.name}</h3>
            <p>{props.info.description}</p>
            <p>{props.info.phone}</p>
        </div>
    )
};

export default ContactCard;