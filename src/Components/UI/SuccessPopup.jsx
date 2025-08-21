import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SuccessPopup = ( {SuccessOpen}) => {
    return (
        <div className={`success ${SuccessOpen && `success-open`}`}>
            <FontAwesomeIcon icon={faCircleCheck}/>
            <span>Ride Successfully Booked!</span>
        </div>
    );
}

export default SuccessPopup;
