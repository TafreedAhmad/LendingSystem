import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Buttonanimated2 from './Buttonanimated2';
import Card from './CardUpload';

function Upload() {
  const [source, setSource] = useState();
  const [name, setName] = useState('');
  const [des, setDes] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [cat, setCat] = useState('');
  const [items, setItems] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    async function fetchuitems() {
      const res = await axios.get('http://localhost:4000/api/uploadeditems', {
        withCredentials: true,
      });
      if (res.data.error) {
        nav('/signin')
      }
      setItems(res.data);
    }
    fetchuitems();
  }, []);

  function onUploadHandler(event) {
    setImage(event.target.files[0]);

    if (event.target.files.length !== 0) {
      setSource(URL.createObjectURL(event.target.files[0]));
    } else {
      setSource();
    }
   }

  async function onSubmitHandler(event) {
    event.preventDefault();

    if (image === undefined || name === '' || des === '') {
      console.log('Form incomplete');
      return;
    }

    const fd = new FormData();

    fd.append('name', name);
    fd.append('description', des);
    fd.append('image', image);
    fd.append('price', price);
    fd.append('category', cat);

    await axios.post('http://localhost:4000/api/uploaditem', fd, {
      withCredentials: true,
    });

    setCat('');
    setName('');
    setImage('');
    setDes('');
    setPrice('');
    setSource();

    console.log('Form submitted');
    window.location.reload();
  }

  return (
    <div className="flex h-[92vh] bg-[#FFD743]">
      <div className="h-full w-3/4 text-6xl border-r-2 border-black flex-cols">
        <div className="w-full h-1/4 flex items-center pl-10">
          <p className="" style={{ fontFamily: "'Aldrich', sans-serif" }}>
            Your Items.
          </p>
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

      <form
        className="bg-red-400 w-1/4 overflow-y-auto"
        onSubmit={onSubmitHandler}
      >
        <div className="w-full h-1/4 flex items-center pl-10 text-6xl">
          <p className="" style={{ fontFamily: "'Aldrich', sans-serif" }}>
            Post an item.
          </p>
        </div>

        <div
          className="flex-cols h-[30vh] px-10 text-lg font-semibold"
          style={{ fontFamily: "'Biryani', sans-serif" }}
        >
          <div className="flex bg-gray-400 border-2 border-black rounded-lg w-full h-3/4 justify-center items-center">
            <img className="h-5/6 w-auto" src={source} />
          </div>
          <div className="flex w-full h-1/4 relative items-center">
            <input
              className="w-[0.1px] h-[0.1px] -z-10 absolute overflow-hidden"
              type="file"
              name="file"
              id="file"
              onChange={onUploadHandler}
              accept="image/jpeg, image/png, image/jpg"
            />
            <label
              htmlFor="file"
              className="flex bg-blue-400 w-full h-[5vh]"
              style={{ fontFamily: "'Biryani', sans-serif" }}
            >
              <Buttonanimated2 text="Upload Image" colors="#FFD743" />
            </label>
          </div>
        </div>
        <div
          className="flex-cols h-[10vh] px-10 text-lg font-semibold"
          style={{ fontFamily: "'Biryani', sans-serif" }}
        >
          <label className="">Name</label>
          <input
            className="border-black border-2 rounded h-[5vh] w-full"
            value={name}
            type="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div
          className="flex-cols h-[10vh] px-10 text-lg font-semibold"
          style={{ fontFamily: "'Biryani', sans-serif" }}
        >
          <label className="">Description</label>
          <input
            className="border-black border-2 rounded h-[5vh] w-full"
            value={des}
            type="name"
            onChange={(e) => setDes(e.target.value)}
          />
        </div>
        <div
          className="flex-cols h-[10vh] px-10 text-lg font-semibold"
          style={{ fontFamily: "'Biryani', sans-serif" }}
        >
          <label className="">Price(Per Week)</label>
          <input
            className="border-black border-2 rounded h-[5vh] w-full"
            value={price}
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div
          className="flex-cols h-[10vh] px-10 text-lg font-semibold"
          style={{ fontFamily: "'Biryani', sans-serif" }}
        >
          <label className="">Category</label>
          <input
            className="border-black border-2 rounded h-[5vh] w-full"
            value={cat}
            type="name"
            onChange={(e) => setCat(e.target.value)}
          />
        </div>
        <div className="h-[5vh] px-10 relative flex mt-[1.5rem]">
          <button type="submit" className="h-full w-full">
            <Buttonanimated2 text="Post Item" colors="#FFD743" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Upload;
