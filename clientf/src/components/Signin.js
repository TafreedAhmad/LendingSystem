import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loginsvg from './svg/Loginsvg';
import Buttonanimated2 from './Buttonanimated2';

function Signin() {
  const nav = useNavigate();
  const [regno, setRegno] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    let user = { regno, password };

    const res = await axios.post('http://localhost:4000/api/signin', user, {
      withCredentials: true,
    });
    console.log(res.data);
    if(res.data.message == 'admin')
    {
      nav('/admin');
    }
    else if (res.data.message) {
      nav('/');
    }
  };

  return (
    <div className=" h-[92vh] flex">
      <form
        onSubmit={handleSubmit}
        className="bg-[#FFD743] h-full w-1/2 border-black border-r-2 flex-cols"
      >
        <div className="h-1/3 text-6xl flex items-center px-10">
          <h1 className="" style={{ fontFamily: "'Aldrich', sans-serif" }}>
            Welcome Back.
          </h1>
        </div>
        <div
          className="flex-cols h-[10vh] px-10 text-lg font-semibold"
          style={{ fontFamily: "'Biryani', sans-serif" }}
        >
          <label className="">Registration Number</label>
          <input
            className="border-black border-2 rounded h-[5vh] w-full"
            value={regno}
            type="number"
            onChange={(e) => setRegno(e.target.value)}
          />
        </div>
        <div
          className="flex-cols h-[10vh] px-10 text-lg font-semibold"
          style={{ fontFamily: "'Biryani', sans-serif" }}
        >
          <label className="">Password</label>
          <input
            className="border-black border-2 rounded h-[5vh] w-full"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="h-[5vh] px-10 relative flex mt-10">
          <button className="h-full w-full" type="submit">
            <Buttonanimated2 text="Sign In" colors="#D773A2" />
          </button>
        </div>
        <div className="h-[5vh] px-10 relative flex mt-[1.5rem]">
          <Link to="/signup" className="h-full w-full">
            <Buttonanimated2 text="Sign Up" colors="#D773A2" />
          </Link>
        </div>
      </form>
      <div className="bg-[#D773A2] w-1/2 h-full flex justify-center items-center">
        <Loginsvg />
      </div>
    </div>
  );
}

export default Signin;
