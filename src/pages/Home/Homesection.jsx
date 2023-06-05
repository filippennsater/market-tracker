import React from 'react';
import '../../App.css';
import './HomeSection.scss';
import Shares from '../../components/sharesETC/Shares';


function HomeSection() {
    return (

        <div className='hero-container'>
            
            <p>Home</p>

            <div className='previewContainer'>




            <div className='cards__container'>
                <div className='cards__wrapper'>

                <ul className='cards__items'>
                        <Shares src='images/img-portfolio1.png' text='My Portfolio' label='Bigger Project' path='/' />
                        <Shares src='images/img-GoodGains.png' text='GoodGains' label='Bigger Project' path='https://goodgains-1202d.web.app' />
                        <Shares src='images/loading.gif' text='MarketTracker (Coming soon)' label='Bigger Project' path='/projects' />
                    </ul>

                    <ul className='cards__items'>
                        <Shares src='images/img-8ball.png' text='Magic 8-ball' label='Small project' path='https://magic8ball-50df8.web.app/' />
                        <Shares src='images/img-Apiano.png' text='The Amazing Piano' label='Small project' path='https://theamazingpiano-65a1c.web.app/' />
                    </ul>


                </div>
            </div>        





                
            </div>

        </div>

    )
}

export default HomeSection