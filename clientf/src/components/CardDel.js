import { useNavigate } from "react-router-dom";
import Buttonanimated2 from "./Buttonanimated2";
import axios from 'axios';

function Card({ item }) {
  const nav = useNavigate();

  async function handleDel() {
    const response = await axios.post('http://localhost:4000/api/users', {regno:item.registration_number}, {
      withCredentials: true,
    });
    const data = response.data;

    if (response.data.error) {
      console.log(response.data.error)
      return;
    }
    window.location.reload();

  }



  return (
    <div className="h-[60vh] w-[25vw] rounded-lg flex relative">
      <div className="bg-black h-full w-full absolute rounded-lg z-0"></div>
      <div className="bg-[#FFD743] p-5 h-full absolute z-10 hover:-translate-x-5 hover:-translate-y-5 transition ease-in-out duration-500 w-full border-2 border-black rounded-lg">

        <div
          className="text-2xl h-1/8 flex items-center font-bold"
          style={{ fontFamily: "'Aldrich', sans-serif" }}
        >
          <p>Reg No: {item.registration_number}</p>
        </div>

        <div
          className="text-2xl h-1/8 flex items-center font-bold"
          style={{ fontFamily: "'Aldrich', sans-serif" }}
        >
          <p>Name: {item.first_name}</p>
        </div>
        <div
          className="text-2xl h-1/8 flex items-center font-bold"
          style={{ fontFamily: "'Aldrich', sans-serif" }}
        >
          <p>Phone Number: {item.phone_number}</p>
        </div>
        <div
          className="text-2xl h-1/8 flex items-center font-bold"
          style={{ fontFamily: "'Aldrich', sans-serif" }}
        >
          <p>Hostel Number: {item.hostel_number}</p>
        </div>
        
          <button type='submit' className='flex h-[5vh] w-full my-10' onClick={handleDel}>
            <Buttonanimated2 text="Delete" colors="#D773A2" />
          </button>
        
        
        
      </div>
    </div>
  );
}

export default Card;
