import React from 'react';
import Card from './card';
import Label from './label';
import image1 from "../assets/images/image1.png"
import image2 from "../assets/images/image2.png"
import image3 from "../assets/images/image3.png"
import image4 from "../assets/images/image4.png"
import image5 from "../assets/images/image5.png"
import image6 from "../assets/images/image6.png"
import image7 from "../assets/images/image7.png"
import image8 from "../assets/images/image8.png"
import image9 from "../assets/images/image9.png"
import { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";


const Page2 = ()=>{
    const [selectedTag, setselectedTag] = useState(JSON.parse(localStorage.getItem('selectedTags')) || []);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('selectedTags', JSON.stringify(selectedTag));
    }, [selectedTag]);
    
    const handleTagClick = (tag)=>{
        if(!selectedTag.includes(tag)){
            if(selectedTag.length < 3){
                setselectedTag([...selectedTag, tag]);
                // document.getElementById('err').style.display = 'none';
            }else{
                document.getElementById('err').style.display = 'block';
                setTimeout(() => {
                    document.getElementById('err').style.display = 'none'
                }, 2000);
            }
        }
    }
    const removeSelectedTag = (tag)=>{
        const updatedTags = selectedTag.filter((selectedTag) =>(selectedTag !== tag));
        setselectedTag(updatedTags);
        if(document.getElementById('err').style.display === 'block'){
            document.getElementById('err').style.display = 'none';
        }
    }
    const checkLabels = ()=>{
        if(selectedTag.length < 3){
            document.getElementById('err2').style.display = 'block'
            setTimeout(() => {
                document.getElementById('err2').style.display = 'none'
            }, 2000);
        }
        if(selectedTag.length === 3){
            navigate('/dashboard');
        }
    }
    // console.log(selectedTag);
    return (
        <div className="page2">
            <div className="leftSection">
                <div className="heading-2">Super app</div>
                <div className="subHeading-2">Choose your entertainment category</div>
                <div className="labels">
                    {selectedTag.map((tag) => (
                        <Label category={tag} remove={()=> removeSelectedTag(tag)} />
                    ))}
                </div>
                <div className="error-2" id='err'>&#9888; Maximum 3 category required</div>
                <div className="error-3" id='err2'>&#9888; Minimum 3 category required</div>
            </div>
            <div className="rightSection">
                <Card category='Action' src={image1} color='#FF5209' onClick={()=> handleTagClick('Action')}/>
                <Card category='Drama' src={image2} color='#D7A4FF' onClick={()=> handleTagClick('Drama')}/>
                <Card category='Romance' src={image3} color='#148A08' onClick={()=> handleTagClick('Romance')}/>
                <Card category='Thriller' src={image4} color='#84C2FF' onClick={()=> handleTagClick('Thriller')}/>
                <Card category='Western' src={image5} color='#902500' onClick={()=> handleTagClick('Western')}/>
                <Card category='Horror' src={image6} color='#7358FF' onClick={()=> handleTagClick('Horror')}/>
                <Card category='Fantasy' src={image7} color='#FF4ADE' onClick={()=> handleTagClick('Fantasy')}/>
                <Card category='Music' src={image8} color='#E61E32' onClick={()=> handleTagClick('Music')}/>
                <Card category='Fiction' src={image9} color='#6CD061' onClick={()=> handleTagClick('Fiction')}/>
                <button onClick={checkLabels} className='btn-3'>Next Page</button>
            </div>
        </div>
    )
}

export default Page2;