import { useNavigate } from 'react-router-dom';
import Buttonanimated2 from './Buttonanimated2';
import axios from 'axios';

function CardUpLoad({ item }) {
  const nav = useNavigate();
  console.log(item);

  async function toggleUser() {
    const res = await axios.post('http://localhost:4000/api/toggle', {item_id: item.item_id},{
      withCredentials: true,
    });
    if (res.data.error) {
      console.log(res.data.error)
    }
    window.location.reload();
  };


  async function goToItem() {
    nav('/message', { state: { item_id: item.item_id } });
  }

  return (
    <div className="h-[60vh] w-[25vw] rounded-lg flex relative ">
      <div className="bg-black h-full w-full absolute rounded-lg z-0"></div>
      <div className="bg-[#FFD743] p-5 h-full absolute z-10 hover:-translate-x-5 hover:-translate-y-5 transition ease-in-out duration-500 w-full border-2 border-black rounded-lg">
        <div
          onClick={goToItem}
          className="text-2xl h-1/6 flex items-center font-bold"
          style={{ fontFamily: "'Aldrich', sans-serif" }}
        >
          <p>{item.name}</p>
        </div>

        <div
          onClick={goToItem}
          className="h-1/6 text-base font-semibold"
          style={{ fontFamily: "'Biryani', sans-serif" }}
        >
          <p>{item.description}</p>
        </div>
        <div
          className="text-xl h-1/6 flex items-center font-semibold my-10" 
          style={{ fontFamily: "'Aldrich', sans-serif" }} onClick={goToItem}
        >
          <p>
            Owner: {item.first_name}
            <br />
            Phone Number: {item.phone_number}
            <br />
            Price (Per Week): {item.price}
            <br />
            Availabity: {String(item.availability)}
          </p>
        </div>
        <div className="h-[5vh] px-10 bottom-10 mt-[1.5rem]">
          <button type="submit" className="h-full w-full" onClick={toggleUser}>
            <Buttonanimated2 text="Toggle Availabity" colors="#FFD743" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardUpLoad;
