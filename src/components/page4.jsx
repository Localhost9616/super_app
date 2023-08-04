import React from 'react'
import Img from '../assets/images/loggedIn.png'
import Img2 from '../assets/images/settings.png'
import Card2 from './card2'
import { useNavigate } from 'react-router-dom'

const Page4 = () => {

    const navigate = useNavigate();
    const goToCategory = ()=> navigate('/categories');

  return (
    <div className='page4'>
        <div className="header">
            <div className="logo-4">
                <div className="heading-2 Logo">Super app</div>
                <div className="subLogoDiv">
                    <img src={Img} alt="Error" />
                    <img title='Edit genre' onClick={goToCategory} className='edit' src={Img2} alt="Error" />
                </div>
            </div>
            <h3>Entertainment according to your choice</h3>
        </div>
        <div className="mainSection">
            <div className="category1">
                <h4>{JSON.parse(localStorage.getItem('selectedTags'))[0] || 'Action'}</h4>
                <div className="cardsdiv">
                    <Card2/>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                </div>
            </div>
            <div className="category2">
                <h4>{JSON.parse(localStorage.getItem('selectedTags'))[1] || 'Thriller'}</h4>
                <div className="cardsdiv">
                    <Card2/>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                </div>
            </div>
            <div className="category3">
                <h4>{JSON.parse(localStorage.getItem('selectedTags'))[2] || 'Western'}</h4>
                <div className="cardsdiv">
                    <Card2/>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                </div>
            </div>
            <div className="category4">
                <h4>Trending</h4>
                <div className="cardsdiv">
                    <Card2/>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page4