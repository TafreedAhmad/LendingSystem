import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Buttonanimated2 from '../components/Buttonanimated2'

function Card3({item}) {
  const [mes, setMes] = useState([]);
  const [newm, setNewm] = useState('');
  // const {item} = a;
  // const {id} = b;
  const nav = useNavigate();


  async function sendMessage(event) {
    event.preventDefault();
    const body = { to: item.sender_id, item_id: item.id, message: newm };
    console.log('body', body);
    const response = await axios.post(
      'http://localhost:4000/api/messages',
      body,
      {
        withCredentials: true,
      }
    );
    const data = response.data;

    if (response.data.error) {
      console.log(response.data.error);
      return;
    }
    else
    {
      console.log('red')
      window.location.reload();
    }
    console.log(response.data);
  }

  async function fetchmessages() {
    console.log('item', item);
    const response = await axios.post(
      'http://localhost:4000/api/filtmessages',
      {item_id: item.id, from_id:item.sender_id},
      {
        withCredentials: true,
      }
    );
    const data = response.data;

    if (response.data.error) {
      console.log(response.data.error);
      return;
    }

    setMes(data);
    console.log('mes', data);
  }

  async function goToItem()
  {
    
  }

  useEffect(() => {
    fetchmessages();
  }, []);



  return (
    <div className="h-[60vh] w-[25vw] rounded-lg flex relative" onClick={goToItem}>
      <div className="bg-black h-full w-full absolute rounded-lg z-0"></div>
      <div className="bg-[#FFD743] p-5 h-full absolute z-10 hover:-translate-x-5 hover:-translate-y-5 transition ease-in-out duration-500 w-full border-2 border-black rounded-lg">
        
        <div
          className="text-2xl h-1/6 flex items-center font-bold"
          style={{ fontFamily: "'Aldrich', sans-serif" }}
        >
          <p>Name: {item.name}</p>
        </div>
        <div
          className="text-2xl h-1/6 flex items-center font-bold"
          style={{ fontFamily: "'Aldrich', sans-serif" }}
        >
          <p>Reg Number: {item.sender_id}</p>
        </div>

        <div className="flex-cols bg-white h-1/2 overflow-auto-x">
          {mes.map((mess) => {
            if (mess.sender_id !== item.sender_id) {
              return (
                <div key={mess.date} className="bg-blue-200">
                  <p>{mess.message}</p>
                </div>
              );
            } else {
              return (
                <div key={mess.date}>
                  <p>{mess.message}</p>
                </div>
              );
            }
          })}
        </div>

        <div className="h-[5vh] relative w-full flex-cols mt-[1.5rem]">
            <input
              className="w-full flex h-[4vh] mb-1"
              type="text"
              value={newm}
              onChange={(e) => {
                setNewm(e.target.value);
              }}
            />
            <button type="submit" className="h-full w-full" onClick={sendMessage}>
              <Buttonanimated2 text="Send Message" colors="#FFD743" />
            </button>
        </div>

      </div>
    </div>
  );
}

export default Card3;
