import React from 'react';

const CardExpamle = ({ title, text }) => {
  return (
    <div className="card" style={{ width: "300px", padding: "20px", border: '1px solid #333' }}>
      <img src="https://ichef.bbci.co.uk/news/660/cpsprodpb/3DAD/production/_104898751_gettyimages-844466808.jpg" style={{ width: "100%" }} alt=""/>
      <div className="cardInner">
        <div className="cardTitle" style={{ marginBottom: '20px', fontSize: '20px', fontWeight: 'bold' }}>{title}</div>
        <div className="cardText">{text}</div>
      </div>
    </div>
  )
}

export default CardExpamle;