import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Buttonanimated2 from './Buttonanimated2';
import axios from 'axios';
function Item() {
  const nav = useNavigate();
  const [item, setItem] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newm, setNewm] = useState('');

  const loc = useLocation();
  const id = loc.state.item_id;
  console.log(id);
  const body = { item_id: id };

  async function fetchItem() {
    const response = await axios.post('http://localhost:4000/api/item', body, {
      withCredentials: true,
    });
    const data = response.data;

    if (response.data.error) {
      console.log(response.data.error);
      return;
    }

    setItem(data);
  }

  async function fetchmessages() {
    const response = await axios.post(
      'http://localhost:4000/api/getmessages',
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

    setMessages(data);
    console.log('mes', data);
  }

  async function sendMessage(event) {
    event.preventDefault();
    const body = { to: item.owner_id, item_id: id, message: newm };
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

  useEffect(() => {
    fetchmessages();
    fetchItem();
  }, []);

  return (
    <div className="flex h-[92vh] bg-[#FFD743]">
      <div className="h-full w-3/4 text-2xl border-r-2 border-black flex">
        <div className="h-full w-full flex-cols">
          <div className="w-full h-[10vh] flex items-center pl-10">
            <p className="" style={{ fontFamily: "'Aldrich', sans-serif" }}>
              Name: {item.item_name}
            </p>
          </div>

          <div className="w-full h-[10vh] flex items-center pl-10">
            <p className="" style={{ fontFamily: "'Aldrich', sans-serif" }}>
              Price(PerWeek): {item.price}
            </p>
          </div>
          <div className="w-full h-[10vh] flex items-center pl-10">
            <p className="" style={{ fontFamily: "'Aldrich', sans-serif" }}>
              Description: {item.description}
            </p>
          </div>
          <div className="w-full h-[10vh] flex items-center pl-10">
            <p className="" style={{ fontFamily: "'Aldrich', sans-serif" }}>
              Category: {item.category}
            </p>
          </div>
          <div className="w-full h-[10vh] flex items-center pl-10">
            <p className="" style={{ fontFamily: "'Aldrich', sans-serif" }}>
              Owner Name: {item.owner_name}
            </p>
          </div>
          <div className="w-full h-[10vh] flex items-center pl-10">
            <p className="" style={{ fontFamily: "'Aldrich', sans-serif" }}>
              Hostel Number: {item.hostel_number}
            </p>
          </div>
          <div className="w-full h-[10vh] flex items-center pl-10">
            <p className="" style={{ fontFamily: "'Aldrich', sans-serif" }}>
              Phone Number: {item.phone_number}
            </p>
          </div>
        </div>
        <div className="h-1/2 w-full rounded-lg pd-2 flex items-center justify-center bg-blue-300">
          <img
            className="h-5/6 rounded-lg"
            src={`http://localhost:4000/images/${item.image}`}
          ></img>
        </div>
      </div>

      <div className="bg-red-400 w-1/4">
        <div className="w-full h-1/4 flex items-center pl-10 text-6xl">
          <p className="" style={{ fontFamily: "'Aldrich', sans-serif" }}>
            Contact the Owner
          </p>
        </div>

        <div className="flex-cols bg-white h-[50vh] overflow-auto-x">
          {messages.map((mess) => {
            if (mess.sender_id !== item.owner_id) {
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
        <div className="h-[5vh] px-10 relative flex-cols mt-[1.5rem]">
            <input
              className="w-full h-[3vh] mb-3"
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

export default Item;
