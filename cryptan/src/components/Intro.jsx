import '../App.css';
import Cards from '../components/Cards'
import ImageCard from './ImageCard';
import pic from './bg2.jpg'
import { useRef } from 'react';

const Hello = (() => {
  const SignUp = useRef();
  return (
    <div>
      <h1>Kiimbo Tours  </h1>


      <div className='btn-container'>

        <button class="button" onClick={() => {
          SignUp.current?.scrollIntoView(
            {
              behavior: 'smooth'
            }
          )
        }} >
          EXPLORE
        </button>
       
     

        <div className="footer-container">
          <div className="columns">
            <ImageCard 
            heading={"Maasai Mara"}
            content={pic}
            />
          </div>
          
          
        </div>

      </div>
      <div ref={SignUp} id='row2'>
        <h2>Create An Account To Book a Tour With Us Today!</h2>
      </div>
    </div>
  )
})

export default Hello;