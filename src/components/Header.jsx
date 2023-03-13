import React from 'react'
import profileImg from './pic.jpg'

function Header(props) {
    return (
        <div className='Header'>
            <div className='profileImg'><img src={profileImg} alt="" /></div>
            <div className='section-2'>
                <h1 className='name_1'>{props.name1}</h1>
                <h2 className='name_2'>{props.name2}</h2>
                <p className='description'>To become a successful expert in the  field of Information Technology<br /> by 
                    channelizing my technical knowledge and skills to ensure personal<br /> and professional growth and to 
                    contribute to the prosperity of the <br /> organization.</p>
            </div>

        </div>
    )
}

export default Header;
