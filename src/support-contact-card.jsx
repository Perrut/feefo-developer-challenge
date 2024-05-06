import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './support-contact-card.css';

export const SupportContactCard = ({ data }) => {
    return (
        <div className='support-contact'>
            <h4>YOUR FEEFO SUPORT CONTACT</h4>
            <div className='support-contact-item'>
                <div className='support-contact-item-initial'>
                    <p>{data.supportContact.name[0]}</p>
                </div>
                <div className='support-contact-item-info'>
                    <p>{data.supportContact.name}</p>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>{data.supportContact.email}</p>
                    <p>{data.supportContact.phone}</p>
                </div>
            </div>
        </div>
    )
}

export default SupportContactCard;