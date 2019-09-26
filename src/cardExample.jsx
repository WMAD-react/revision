import React from 'react';

const CardExpamle = ({ title, text, image }) => {
  return (
    <div className="card" style={{ width: "300px", padding: "20px", border: '1px solid #333' }}>
      
      {image ? <img src={image} style={{ width: '100%'}} alt=""/>
        : <div style={{ background: 'gray', width: '100%', height: '200px' }}>No image</div>
      }
      <div className="cardInner">
        <div className="cardTitle" style={{ marginBottom: '20px', fontSize: '20px', fontWeight: 'bold' }}>{title}</div>
        <div className="cardText">{text}</div>
      </div>
    </div>
  )
}

export default CardExpamle;