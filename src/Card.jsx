import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    return ( 
        <div className='card-container rounded-4'>            
            <div className='card-bg position-relative'>
                <Link to="/edit" className='edit position-absolute'>
                    <i class="bi bi-pencil-square fs-5"></i>
                </Link>
                <img src="ridwan.jfif" className='rounded-circle position-absolute'/>
            </div>
            <div className="content">
                <h2 className='content-name'>Ridwan Alfarezi</h2>
                <h6 className='Address'>Jakarta, Indonesia</h6>
                <h3 className='content-job'>Front-End Engineer</h3>
                <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim cumque vel iure sequi delectus obcaecati illo nemo, itaque fugit.</p>
                <div className='d-flex justify-content-around mt-5 fs-2 socials'>
                    <a href="" target="_blank">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="" target="_blank">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="" target="_blank">
                        <i class="bi bi-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Card;