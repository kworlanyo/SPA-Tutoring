import CreditCard from "./components/CreditCard";

const cardData = [
  {
    bank: "Blastercard",
    number: "3424309424730221",
    security: 851,
    expirationDate: "1/25",
    cardHolder: "Christiana Cabrara",
  },
  {
    bank: "Pfannerstill",
    number: "5010127323605442",
    security: 971,
    expirationDate: "12/25",
    cardHolder: "Casey Clingan",
  },
  {
    bank: "N99",
    number: "5602211500020957",
    security: 318,
    expirationDate: "9/25",
    cardHolder: "Montague Sands-Allan",
  },
  {
    bank: "Blastercard",
    number: "5264939690937718",
    security: 521,
    expirationDate: "3/25",
    cardHolder: "Phip Espadate",
  },
  { bank: "Credit XYZ", number: "4913127477323785", security: 377, expirationDate: "2/25", cardHolder: "Howey Frail" },
  {
    bank: "Pfannerstill",
    number: "4381582680334453",
    security: 976,
    expirationDate: "1/25",
    cardHolder: "Jeri Broomhall",
  },
  {
    bank: "Durga Inc.",
    number: "4017950503409412",
    security: 111,
    expirationDate: "3/25",
    cardHolder: "Aeriela Boddymead",
  },
  {
    bank: "Glover Group",
    number: "4913483071674697",
    security: 263,
    expirationDate: "8/25",
    cardHolder: "Rainer Hinckes",
  },
  {
    bank: "Durga Inc.",
    number: "3784329793724821",
    security: 207,
    expirationDate: "11/25",
    cardHolder: "Fitzgerald Sansbury",
  },
  { bank: "Viba", number: "4913571483628945", security: 245, expirationDate: "12/25", cardHolder: "Hendrik Milkin" },
  {
    bank: "Blastercard",
    number: "4260369782822222",
    security: 289,
    expirationDate: "12/25",
    cardHolder: "Julianne Willbourne",
  },
  {
    bank: "Ledner LLC",
    number: "5048371056777855",
    security: 951,
    expirationDate: "8/25",
    cardHolder: "Cletis Blaydes ",
  },
];

function App() {
  return (
    <div className="cards-container">
      {/* Card objects are sent as a prop to the CreditCard Component */}
      {cardData.map((card) => {
        return <CreditCard card={card} key={card.security} />;
      })}
    </div>
  );
}

export default App;
