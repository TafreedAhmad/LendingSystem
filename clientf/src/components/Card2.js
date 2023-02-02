import { useNavigate } from "react-router-dom";

function Card({ item }) {
  const nav = useNavigate();

  async function goToItem()
  {
    nav('/item', {state: {item_id: item.item_id}})
  }



  return (
    <div className="h-[60vh] w-[25vw] rounded-lg flex relative" onClick={goToItem}>
      <div className="bg-black h-full w-full absolute rounded-lg z-0"></div>
      <div className="bg-[#FFD743] p-5 h-full absolute z-10 hover:-translate-x-5 hover:-translate-y-5 transition ease-in-out duration-500 w-full border-2 border-black rounded-lg">
        <div className="h-1/2 w-full rounded-lg pd-2 flex items-center justify-center">
          <img
            className="h-5/6 rounded-lg"
            src={`http://localhost:4000/images/${item.image}`}
          ></img>
        </div>

        <div
          className="text-2xl h-1/6 flex items-center font-bold"
          style={{ fontFamily: "'Aldrich', sans-serif" }}
        >
          <p>{item.item_name}</p>
        </div>

        <div
          className="h-1/6 text-base font-semibold"
          style={{ fontFamily: "'Biryani', sans-serif" }}
        >
          <p>{item.description}</p>
        </div>
        <div
          className="text-xl h-1/6 flex items-center font-semibold"
          style={{ fontFamily: "'Aldrich', sans-serif" }}
        >
          <p>
            Owner: {item.owner_name}
            <br />
            Phone Number: {item.phone_number}
            <br />
            Price(Per Week): {item.price}
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Card;
