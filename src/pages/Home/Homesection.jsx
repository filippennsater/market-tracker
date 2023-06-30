import React from 'react';
import '../../App.css';
import './HomeSection.scss';
import Shares from '../../components/sharesETC/Shares';


function HomeSection() {
    return (

        <div className='hero-container'>

            <p>Home</p>

            <div className='previewContainer'>



                            <Shares src='images/img-portfolio1.png' text='My Portfolio' label='Bigger Project' path='/' />
                            <Shares src='images/img-GoodGains.png' text='GoodGains' label='Bigger Project' path='https://goodgains-1202d.web.app' />
                            <Shares src='images/loading.gif' text='MarketTracker (Coming soon)' label='Bigger Project' path='/projects' />
                            <Shares src='images/img-8ball.png' text='Magic 8-ball' label='Small project' path='https://magic8ball-50df8.web.app/' />
                        


            </div>

        </div>

    )
}

export default HomeSection