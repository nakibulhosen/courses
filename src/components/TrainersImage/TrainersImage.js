import React from 'react';
import './TrainerImage.css';
import trainer from '../../assets/image/trainer.png';

const TrainersImage = () => {
    return (
        <div className="avatars">
            <span className="avatar">
                <img src={trainer} alt="trainer" />
            </span>
            <span className="avatar">
                <img src={trainer} alt="trainer" />
            </span>
            <span className="avatar">
                <img src={trainer} alt="trainer" />
            </span>
            <span className="avatar">
                <img src={trainer} alt="trainer" />
            </span>
        </div>
    );
};

export default TrainersImage;