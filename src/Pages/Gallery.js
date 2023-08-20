import React, { useState } from 'react';
import Footer from '../components/Footer';
import bg from "../ClubLogos/bg3.jpg"
export default function Gallery() {
  const [selectedClub, setSelectedClub] = useState('All');

  const handleClubChange = (club) => {
    setSelectedClub(club);
  };
  const imagesAll = [];
  const imagesAlfaaz = [];
const imagesFilmski = [];

for (let i = 1; i <= 24; i++) {
  imagesAlfaaz.push(i.toString());
 
  imagesAll.push(`Alfaaz/${i.toString()}.jpg`);
}
console.log(imagesAlfaaz);
const imagesEnarrators = [];
const imagesAlpha = [];
for (let i = 1; i <= 11; i++) {
  imagesAlpha.push(i.toString());
  imagesAll.push(`Alpha Productions/${i.toString()}.png`);
  if(i <= 9)
  {
    imagesFilmski.push(i.toString());
    imagesAll.push(`Filmski/${i.toString()}.jpg`);
  }
}

const imagesDebSoc = [];
for (let i = 1; i <= 18; i ++)
{if(i<=5)
  {
    imagesDebSoc.push(i.toString());
    imagesAll.push(`Debsoc/${i.toString()}.png`);
  }
  
  imagesEnarrators.push(i.toString());
  
  imagesAll.push(`Enarrators/${i.toString()}.jpg`);
}
const imagesMUN = [];
const imagesEnigma = [];
for (let i = 1; i <= 10; i ++)
{
  imagesEnigma.push(i.toString());
  imagesAll.push(`Enigma/${i.toString()}.jpg`);
  if(i <= 4)
  {
    imagesMUN.push(i.toString());
    imagesAll.push(`MUN/${i.toString()}.png`);
  }
 
}

  const renderImages = () => {

    switch (selectedClub) {
      case 'Alfaaz':
        return imagesAlfaaz.map((image, index) => (
          <img
            key={index}
            src={require(`../Alfaaz/${image}.jpg`)}
            alt={`gallery of filmski ${index + 1}`}
            className="lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150"
          />
        ));
        

      case 'Alpha Productions':
        return imagesAlpha.map((image, index) => (
            <img
              key={index}
              src={require(`../Alpha Productions/${image}.png`)}
              alt={`gallery of alpha ${index + 1}`}
              className="lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150"
            />
          ));
      case 'DebSoc':
        return imagesDebSoc.map((image, index) => (
          <img
            key={index}
            src={require(`../Debsoc/${image}.png`)}
            alt={`gallery of debsoc ${index + 1}`}
            className="lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150"
          />
        ));
      case 'Enarrators':
        return imagesEnarrators.map((image, index) => (
          <img
            key={index}
            src={require(`../Enarrators/${image}.jpg`)}
            alt={`gallery of enarrators ${index + 1}`}
            className="lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150"
          />
        ));
      case 'Enigma':
        return  imagesEnigma.map((image, index) => (
          <img
            key={index}
            src={require(`../Enigma/${image}.jpg`)}
            alt={`gallery of enigma ${index + 1}`}
            className="lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150"
          />
        ));
      case 'Filmski':
        return imagesFilmski.map((image, index) => (
          <img
            key={index}
            src={require(`../Filmski/${image}.jpg`)}
            alt={`gallery of filmski ${index + 1}`}
            className="lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150"
          />
        ));
      case 'MUN':
        return imagesMUN.map((image, index) => (
          <img
            key={index}
            src={require(`../MUN/${image}.png`)}
            alt={`gallery of MUN ${index + 1}`}
            className="lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150"
          />
        ));
        default:
          return imagesAll.map((image, index) => (
            <img
              key={index}
              src={require(`../${image}`)}
              alt={`gallery of MUN ${index + 1}`}
              className="lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150"
            />
          ));
        
      
    }
  };

  return (
    <div className="relative min-h-screen text-black">
      <div className="absolute inset-0 overflow-hidden">
      <img src={bg} className="object-cover w-full h-full fixed opacity-[80%]" alt="background"></img>
      <div className="bg-black opacity-70 absolute inset-0"></div>
      </div>
      <div className="relative z-50 text-center pt-20 text-white p-4 text-5xl font-bold">Gallery</div>
      <div className="relative z-50 lg:flex justify-center mb-8 space-x-4">
        <button
          className={`lg:ml-0 ml-4 lg:mb-0 mb-2 ${
            selectedClub === 'All' ? 'bg-[#c5eaf4] text-black' : 'bg-gray-600 text-[#c5eaf4]'
          } hover:bg-[#c5eaf4] hover:text-black transition duration-300 ease-in-out rounded-full py-2 px-4`}
          onClick={() => handleClubChange('All')}
        >
          All
        </button>
        <button
          className={` ${
            selectedClub === 'Alfaaz' ? 'bg-[#c5eaf4] text-black' : 'bg-gray-600 text-[#c5eaf4]'
          } hover:bg-[#c5eaf4] hover:text-black transition duration-300 ease-in-out rounded-full py-2 px-4`}
          onClick={() => handleClubChange('Alfaaz')}
        >
          Alfaaz
        </button>
        <button
          className={` ${
            selectedClub === 'Alpha Productions' ? 'bg-[#c5eaf4] text-black' : 'bg-gray-600 text-[#c5eaf4]'
          } hover:bg-[#c5eaf4] hover:text-black transition duration-300 ease-in-out rounded-full py-2 px-4`}
          onClick={() => handleClubChange('Alpha Productions')}
        >
          Alpha Productions
        </button>
        <button
          className={` mb-2 lg:mb-0 ${
            selectedClub === 'DebSoc' ? 'bg-[#c5eaf4] text-black' : 'bg-gray-600 text-[#c5eaf4]'
          } hover:bg-[#c5eaf4] hover:text-black transition duration-300 ease-in-out rounded-full py-2 px-4`}
          onClick={() => handleClubChange('DebSoc')}
        >
          DebSoc
        </button>
        <button
          className={` ${
            selectedClub === 'MUN' ? 'bg-[#c5eaf4] text-black' : 'bg-gray-600 text-[#c5eaf4]'
          } hover:bg-[#c5eaf4] hover:text-black transition duration-300 ease-in-out rounded-full py-2 px-4`}
          onClick={() => handleClubChange('MUN')}
        >
          MUN
        </button>
        <button
          className={` ${
            selectedClub === 'Enarrators' ? 'bg-[#c5eaf4] text-black' : 'bg-gray-600 text-[#c5eaf4]'
          } hover:bg-[#c5eaf4] hover:text-black transition duration-300 ease-in-out rounded-full py-2 px-4`}
          onClick={() => handleClubChange('Enarrators')}
        >
          Enarrators
        </button>

        <button
          className={` ${
            selectedClub === 'Enigma' ? 'bg-[#c5eaf4] text-black' : 'bg-gray-600 text-[#c5eaf4]'
          } hover:bg-[#c5eaf4] transition hover:text-black duration-300 ease-in-out rounded-full py-2 px-4`}
          onClick={() => handleClubChange('Enigma')}
        >
          Enigma
        </button>
        <button
          className={` ${
            selectedClub === 'Filmski' ? 'bg-[#c5eaf4] text-black' : 'bg-gray-600 text-[#c5eaf4]'
          } hover:bg-[#c5eaf4] hover:text-black transition duration-300 ease-in-out rounded-full py-2 px-4`}
          onClick={() => handleClubChange('Filmski')}
        >
          Filmski
        </button>
        
      </div>
      <div className='flex relative z-50 flex-col space-y-10'>
      
      <div className="mx-auto grid lg:grid-cols-4 grid-cols-2 gap-6 px-6 ">
        {renderImages()}
        
      </div>
      <Footer className="relative z-50" />
      </div>
      
     
    </div>
  );
}

