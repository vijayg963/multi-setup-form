import React from 'react';
import '../../stylesheet/progress.scss'

const ProgressBar = (props) => {
    let { step } = props
    return (
        <div>
            <div className="stepper-wrapper">
                <div className={step >= '1' ? `stepper-item completed` : 'stepper-item'}>
                    <div className="step-counter">1</div>
                </div>
                <div className={step >= '2' ? `stepper-item completed` : 'stepper-item'}>
                    <div className="step-counter">2</div>
                </div>
                <div className={step >= '3' ? `stepper-item completed` : 'stepper-item'}>
                    <div className="step-counter">3</div>
                </div>
                <div className={step >= '4' ? `stepper-item completed` : 'stepper-item'}>
                    <div className="step-counter ">4</div>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;
