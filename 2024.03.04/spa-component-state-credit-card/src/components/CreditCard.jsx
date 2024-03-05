function CreditCard({ card }) {
  // Style Object
  const pStyle = {
    fontSize: "0.9rem",
    letterSpacing: "0.4rem",
    margin: "0.4rem 0",
  };

  // Style Object
  const pStyle2 = {
    fontSize: "1.2rem",
  };

  return (
    <div className="card">
      <h2 className="bank-name">{card.bank}</h2>
      <div className="number">
        <p>{card.number.slice(0, 4)}</p>
        <p>{card.number.slice(4, 8)}</p>
        <p>{card.number.slice(8, 12)}</p>
        <p>{card.number.slice(12)}</p>
      </div>
      <div className="security-and-expiration">
        <p style={pStyle2}>{card.security}</p>
        <div className="valid-and-expiration">
          <div>
            {/* Applying style objects in inline styling */}
            <p style={pStyle}>VALID</p>
            <p style={pStyle}>THRU</p>
          </div>
          {/* Inline styling */}
          <p style={{ letterSpacing: "0.4rem" }}>{card.expirationDate}</p>
        </div>
      </div>
      <h3 className="card-holder">{card.cardHolder}</h3>
    </div>
  );
}

export default CreditCard;
