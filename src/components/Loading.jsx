import React from 'react'

import '../loading.css';

export default function Loading() {
  return (
    <div className="loading-container">
        <div className="loading-circles">
            <div className="loading-circle circle-one">
                <div className="loading-ball"></div>
            </div>
            <div className="loading-circle circle-two">
                <div className="loading-ball"></div>
            </div>
            <div className="circle-middle"></div>
        </div>
        <div className="loading-text">ခဏစောင့်ဦးဟ...</div>
    </div>
  )
}
