import React from 'react';
import '../../App.css';
import './HomeSection.scss';
import Shares from '../../components/sharesETC/Shares';


function HomeSection() {
    return (

        <div className='hero-container'>

            <p>Home</p>

            <div className='previewContainer'>

                <ul className='share-list'>

                            <Shares src='images/img-portfolio1.png' text='My ' label='Bigger Project' path='/' />
                            <Shares src='images/img-GoodGains.png' text='Good' label='Bigger Project' path='https://' />
                            <Shares src='images/loading.gif' text='Marke' label='Bigger Project' path='' />
                            <Shares src='images/img-8ball.png' text='Magic' label='Small project' path='' />
                        
                </ul>

            </div>

        </div>

    )
}

export default HomeSection