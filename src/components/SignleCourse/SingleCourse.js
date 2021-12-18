import React from 'react';
import TrainersImage from '../TrainersImage/TrainersImage';
import trainer from '../../assets/image/trainer.png';
import { useHistory } from 'react-router-dom';
import pointerIcon from '../../assets/image/pointer.svg';


const SingleCourse = ({collapseId}) => {
    const history = useHistory();

    const gotoSessions = ()=>{
        history.push('/sessions')
    }
    return (
        <div className="course-item-container bg-white px-3 pt-1 mt-5" >
            <div className="course-top-titles d-flex justify-content-around align-items-center cursor-pointer" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} aria-expanded="false" aria-controls={`${collapseId}`} id="collapse-trigger">
                <span className='course-top-title primary-color'> <img src={pointerIcon} style={{paddingRight:'10px'}} alt="icon" /> 3</span>
                <span className='course-top-title '> <span className="dot"></span> Live </span>
                <span className='course-top-title primary-color cursor-pointer' onClick={gotoSessions}> Nagotiation </span>
                <span className='course-top-title'> 25/09/20 </span>
                <span className='course-top-title'> 25/09/21 </span>
                <span className='course-top-title'> 60 </span>
                <div className='course-top-title'> <TrainersImage /> </div>
                <span className='course-top-title' style={{minWidth:'90px'}}> <span>Yes</span> <i className="fas fa-exclamation-triangle text-warning px-2"></i> <i className="fas fa-ellipsis-v"></i> </span>
            </div>

            <div className="course-events mt-4 collapse" id={`${collapseId}`}>
                <div className="course-event">
                    <table className="table table-borderless" id="event-table">
                        <thead>
                            <tr>
                                <th scope="col">Session Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Registants</th>
                                <th scope="col">Trainer</th>
                                <th scope="col">Location</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='primary-color' >Conflicts</td>
                                <td>25-12-21</td>
                                <td>9:30 - 10:30</td>
                                <td>25</td>
                                <td className='pt-0'>
                                    <img src={trainer} alt="trainer" />
                                    <i className="fas fa-plus-circle ps-2 primary-color"></i>
                                </td>
                                <td>
                                    <span className='primary-color'>
                                        <i className="fas fa-map-marker-alt pe-2"></i>
                                        Address
                                    </span>
                                </td>
                                <td>
                                    <span>
                                        <i className="fas fa-exclamation-triangle pe-3 text-warning"></i>
                                        <i className="fas fa-ellipsis-v"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className='primary-color' >Discussion</td>
                                <td>25-12-21</td>
                                <td>9:30 - 10:30</td>
                                <td>25</td>
                                <td className='pt-0'>
                                    <img src={trainer} alt="trainer" />
                                    <i className="fas fa-plus-circle ps-2 primary-color"></i>
                                </td>
                                <td>
                                    <span className='primary-color'>
                                        <i className="fas fa-map-marker-alt pe-2"></i>
                                        Address
                                    </span>
                                </td>
                                <td>
                                    <span>
                                        <i className="fas fa-exclamation-triangle pe-3 text-warning"></i>
                                        <i className="fas fa-ellipsis-v"></i>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default SingleCourse;