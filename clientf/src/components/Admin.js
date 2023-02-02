import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import CardDel from './CardDel';
import Buttonanimated2 from '../components/Buttonanimated2';

function Admin() {
  const [items, setItems] = useState([]);


  const nav = useNavigate();
  async function fetchUsers() {
    const response = await axios.get('http://localhost:4000/api/users', {
      withCredentials: true,
    });
    const data = response.data;

    if (response.data.error) {
      console.log(response.data.error)
      return;
    }

    setItems(data);
    console.log(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="h-full h-[92vh] bg-[#FFD743]">
      <div className="w-full h-1/4 flex items-center pl-10 text-6xl border-b-2 border-black ">
        <p className="" style={{ fontFamily: "'Aldrich', sans-serif" }}>
          Current Users
        </p>
        
      </div>

      <div className="bg-red-400 h-3/4 p-5 flex items-center space-x-5 overflow-y-auto">
        {items.map((item) => {
          return (
            <div key={item.item_id}>
              <CardDel item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Admin;