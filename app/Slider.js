'use client'

export default function Slider({handleZoom}) {
    return (
        <div className='slider-div'>
            <input 
                className='slider' 
                type='range' 
                min='0.5' 
                max='4' 
                step='0.01' 
                orient='vertical' 
                onChange={(e) => handleZoom(e)}
            >
            </input>
        </div>
    );
}