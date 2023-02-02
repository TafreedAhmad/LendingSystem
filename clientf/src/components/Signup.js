import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Loginsvg from './svg/Loginsvg';
import Buttonanimated2 from './Buttonanimated2';

function Signup() {
  const nav = useNavigate();

  const [regno, setRegno] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [hostelno, setHostelno] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    let user = {  email, password, fname, lname, hostelno, phoneno, regno };

    const res = await axios.post('http://localhost:4000/api/signup', user, {
      withCredentials: true,
    });
    console.log(res.data);
    if (res.data.message) {
      nav('/');
    }
  };

  return (
    <div className=" h-[92vh] flex">
      <form 
        onSubmit={handleSubmit}
        className="bg-[#FFD743] h-full w-1/2 border-black border-r-2 flex-cols"
      >
        <div className="h-1/5 text-6xl flex items-center px-10">
          <h1 className="" style={{ fontFamily: "'Aldrich', sans-serif" }}>
            Sign up for an account.
          </h1>
        </div>
        <div
          className="flex-cols h-[8vh] px-10 text-lg font-semibold"
          style={{ fontFamily: "'Biryani', sans-serif" }}
        >
          <label className="">Registration Number</label>
          <input
            className="border-black border-2 rounded h-[4vh] w-full"
            value={regno}
            type="number"
            onChange={(e) => setRegno(e.target.value)}
          />
        </div>
        <div
          className="flex-cols h-[8vh] px-10 text-lg font-semibold"
          style={{ fontFamily: "'Biryani', sans-serif" }}
        >
          <label className="">First Name</label>
          <input
            className="border-black border-2 rounded h-[4vh] w-full"
            value={fname}
            type="name"
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div
          className="flex-cols h-[8vh] px-10 text-lg font-semibold"
          style={{ fontFamily: "'Biryani', sans-serif" }}
        >
          <label className="">Last Name</label>
          <input
            className="border-black border-2 rounded h-[4vh] w-full"
            value={lname}
            type="name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div
          className="flex-cols h-[8vh] px-10 text-lg font-semibold"
          style={{ fontFamily: "'Biryani', sans-serif" }}
        >
          <label className="">Phone Number</label>
          <input
            className="border-black border-2 rounded h-[4vh] w-full"
            value={phoneno}
            type="number"
            onChange={(e) => setPhoneno(e.target.value)}
          />
        </div>
        <div
          className="flex-cols h-[8vh] px-10 text-lg font-semibold"
          style={{ fontFamily: "'Biryani', sans-serif" }}
        >
          <label className="">Hostel Number</label>
          <input
            className="border-black border-2 rounded h-[4vh] w-full"
            value={hostelno}
            type="number"
            onChange={(e) => setHostelno(e.target.value)}
          />
        </div>
        <div
          className="flex-cols h-[8vh] px-10 text-lg font-semibold"
          style={{ fontFamily: "'Biryani', sans-serif" }}
        >
          <label className="">Email</label>
          <input
            className="border-black border-2 rounded h-[4vh] w-full"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div
          className="flex-cols h-[8vh] px-10 text-lg font-semibold"
          style={{ fontFamily: "'Biryani', sans-serif" }}
        >
          <label className="">Password</label>
          <input
            className="border-black border-2 rounded h-[4vh] w-full"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="h-[5vh] px-10 relative flex mt-[1.5rem]">
          <button type="submit" className="h-full w-full">
            <Buttonanimated2 text="Create Account" colors="#D773A2" />
          </button>
        </div>
      </form>
      <div className="bg-[#D773A2] w-1/2 h-full flex justify-center items-center">
        <Loginsvg />
      </div>
    </div>
  );
}

export default Signup;
