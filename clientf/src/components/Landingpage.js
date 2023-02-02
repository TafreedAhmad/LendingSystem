import { Link } from 'react-router-dom';
import buying from '../img/buying.svg';
import selling from '../img/selling.svg';
import Buttonanimated from './Buttonanimated';

function Landingpage() {
  return (
    <div className="flex h-[92vh] bg-blue-400">
      <div className="bg-[#07BB9C] w-1/2 border-b-2 border-r border-black flex-cols">
        <div className="h-3/4 flex justify-center items-center">
          <img src={buying} alt="Buying svg" className="h-3/4" />
        </div>
        <div className="h-1/4 flex justify-center items-center">
          <Link to="/itemlist">
            <Buttonanimated
              text="Start Renting"
              colors={{ first: '#FFD743', second: '#07BB9C' }}
            />
          </Link>
        </div>
      </div>
      <div className="bg-[#FFD743] w-1/2 border-b-2 border-l border-black">
        <div className="h-3/4 flex justify-center items-center">
          <img src={selling} alt="Selling svg" className="h-3/4" />
        </div>
        <div className="h-1/4 flex justify-center items-center">
          <Link to="/upload">
            <Buttonanimated
              text="Start Lending"
              colors={{ first: '#07BB9C', second: '#FFD743' }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
