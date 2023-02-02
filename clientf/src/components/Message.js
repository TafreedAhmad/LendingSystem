import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Buttonanimated2 from './Buttonanimated2';
import axios from 'axios';
import Card3 from './Card3';

function Message() {
  const[senders, setSenders] = useState([]);
  const loc = useLocation();
  const id = loc.state.item_id;

  async function fetchsenders() {
    const response = await axios.post(
      'http://localhost:4000/api/senders',
      {item_id: id},
      {
        withCredentials: true,
      }
    );
    const data = response.data;

    if (response.data.error) {
      console.log(response.data.error);
      return;
    }

    setSenders(data);
  }

  useEffect(() => {
    fetchsenders();
  }, []);

  return (<div className="h-full h-[92vh] bg-[#FFD743]">
  <div className="w-full h-1/4 flex items-center pl-10 text-6xl border-b-2 border-black ">
    <p className="" style={{ fontFamily: "'Aldrich', sans-serif" }}>
      Messages Received
    </p>
  </div>
  
  <div className="bg-red-400 h-3/4 p-5 flex items-center space-x-5 overflow-y-auto">
    {senders.map((item) => {
      item.id = id;
      return(
        <div key={item.name}>
        <Card3
          item={item}
        /></div>)}
      )}
  </div>
</div>)
}

export default Message;