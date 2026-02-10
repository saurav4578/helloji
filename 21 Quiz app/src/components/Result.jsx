import React from 'react';

const Result = ({ score }) => {
  return (
    <>
      <div>Result</div>
      <h2>Your score is {score}</h2>

      {score >=1 && (
        <div style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#d4edda",
          border: "2px solid green",
          borderRadius: "10px",
          fontSize: "18px"
        }}>
          🎉🎉 Mubarak ho! 🎉🎉 <br />
          Aap jeet chuke ho <b>₹5,00,000</b> 💰 <br />
        </div>
      )}
    </>
  );
};

export default Result;
