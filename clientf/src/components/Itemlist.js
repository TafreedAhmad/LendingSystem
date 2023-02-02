import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Card from './Card';
import Buttonanimated2 from '../components/Buttonanimated2';

function Itemlist() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

  const nav = useNavigate();
  async function fetchShops() {
    const response = await axios.get('http://localhost:4000/api/items', {
      withCredentials: true,
    });
    const data = response.data;

    if (response.data.error) {
      nav('/signin');
      return;
    }

    setItems(data);
    console.log(data);
  }

  async function searchitems(event) {
    event.preventDefault();
    const response = await axios.post('http://localhost:4000/api/items/filtered',
    {name: search} ,
    {
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
    fetchShops();
  }, []);

  return (
    <div className="h-full h-[92vh] bg-[#FFD743]">
      <div className="w-full h-1/4 flex items-center pl-10 text-6xl border-b-2 border-black ">
        <p className="" style={{ fontFamily: "'Aldrich', sans-serif" }}>
          Items currently available.
        </p>
        <form
          onSubmit={searchitems}
          className="bg-[#FFD743] h-full w-1/2 border-black border-r-2 items-center justify-center "
        >
          <div
            className="flex-cols h-full px-10 text-lg font-semibold py-10"
            style={{ fontFamily: "'Biryani', sans-serif" }}
          >
            <input
              className="border-black border-2 rounded h-[4vh] w-full"
              value={search}
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="h-[5vh]  relative flex mt-[1.5rem]">
            <button type='submit' className='h-full w-full'>
                <Buttonanimated2 text="Search" colors="#D773A2" />
            </button>
            </div>
          </div>
        </form>
      </div>

      <div className="bg-red-400 h-3/4 p-5 flex items-center space-x-5 overflow-y-auto">
        {items.map((item) => {
          return (
            <div key={item.item_id}>
              <Card item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Itemlist;
