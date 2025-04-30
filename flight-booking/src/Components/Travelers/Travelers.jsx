import React, {useEffect} from 'react';
import PairsImage from '../../assets/Pairs.png';
import travele1 from '../../assets/user1.png'

// Import Aos =====>
  import Aos from 'aos'
import 'aos/dist/aos.css'

// we are going to use hight order array method called Map to display all the data ===>

  const travelers = [
    {
      id: 1,
      destinationImage: PairsImage,
      travelerImag: travele1,
      travelerName: 'Pranvans',
      socialLink: 'pranavi8'
    },
    {
      id: 2,
      destinationImage: PairsImage,
      travelerImag: travele1,
      travelerName: 'Sudhiksha',
      socialLink: 'sudhiksha2019'
    },
    {
      id: 3,
      destinationImage: PairsImage,
      travelerImag: travele1,
      travelerName: 'Ram',
      socialLink: 'rames2'
    },
    {
      id: 4,
      destinationImage: PairsImage,
      travelerImag: travele1,
      travelerName: 'Hema',
      socialLink: 'hema86'
    },
  
  ]



const Travelers = () => {


  // useEffect to set animation duration ====
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])

  return (
    <div className='travelers container section'>
        <div className="sectionContainer">
          <h2 data-aos='fade-down' data-aos-duration='2500'>Top Travelers of this month!</h2>

          <div className='travelersContainer grid'>
      
            {
              travelers.map(({id, destinationImage, travelerImag, travelerName, socialLink  }) =>{
                return(
                  // {/* Signle passsanger card */}
                  <div data-aos='fade-up' data-aos-duration='3500'  key={id} className="singleTraveler">
                <img src={destinationImage} className='destinationImages' />

                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={travelerImag} className='travelerImag' />
                  </div>
                  <div className="travelerName">
                    <span>{travelerName}</span>
                    <p>{socialLink}</p>
                  </div>
                </div>
            </div>
                )
              })
            }

          </div>

        </div>
    </div>
  )
}

export default Travelers