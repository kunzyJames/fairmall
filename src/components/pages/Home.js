
import React, { useEffect, useState } from 'react';
import {
    ArrowCircleDownIcon,
  } from "@heroicons/react/outline";
import unsplash1 from '../images/unsplash1.png'
import unsplash2 from '../images/unsplash2.png'
import unsplash3 from '../images/unsplash3.png'
import unsplash4 from '../images/unsplash4.png'
import slide from '../images/furnitures/slide.png'
import slide1 from '../images/furnitures/slide1.png'
import slide2 from '../images/furnitures/slide2.png'
import slide3 from '../images/furnitures/slide3.png'
import slide4 from '../images/furnitures/slide4.png'
import slide5 from '../images/furnitures/slide5.png'
import ImageModal from '../modals/ImageModal';
import compound from '../images/compound.png'

const Home = () => {

    const [visible, setVisible] = useState(false)
    
const toggleVisible = () => {

      setVisible(true)

  };


  const scrollToBottom = () =>{
    window.scroll({
        top: document.body.offsetHeight,
        left: 0, 
        behavior: 'smooth',
      });
  };
  
  useEffect(() => {
    toggleVisible()
  }, [visible]);


  return (
   <>
   
   <div class="md:container md:mx-auto">
      <div className="bg-pink-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="fairmall_header">
              Welcome to <span className="text-pink-500">Fairmall</span>
            </h2>
<br/>
            <div class="grid grid-cols-4 gap-4">
              <div className="unsplashed">
           
                <p>3 Sisters of Owu</p>
                <img
                  src={unsplash1}
                  alt="sisters of owu"
                  className="w-full h-full object-center object-cover"
                />
                {/* <ImageGallery items={images} showPlayButton={false} originalTitle="3 sisters of owu"/> */}
              </div>

              <div className="splash">
                <p>Swahili Decor</p>
                <img
                        src={unsplash2}
                  alt="swahili decor"
                  className="w-full h-full object-center object-cover"
                />
                {/* <ImageGallery items={images} showPlayButton={false}/> */}
              </div>
              <div className="splosh">
                <p>Kunuri Water Gourd</p>
                <img
                      src={unsplash3}
                  alt="Kunuri water Gourd"
                  className="w-full h-full object-center object-cover"
                />
                {/* <ImageGallery items={images} showPlayButton={false}/> */}
              </div>
              <div className="split">
                <p>Reddington Armless Chair</p>
                <img
                         src={unsplash4}
                  alt="Reddington Armless Chair"
                  className="w-full h-full object-center object-cover"
                />
                {/* <ImageGallery items={images} showPlayButton={false} thumbnailPosition="left"/> */}
              </div>
         
            </div>
        
        
          </div>
          <button className="arrowButton">
     <ArrowCircleDownIcon onClick={scrollToBottom} 
     style={{display: visible ? 'inline' : 'none'}} />
    </button>
        </div>
     
      </div>

      <div className="py-12 bg-white">
     <div className='compound_watermark'>
                <img
                  src={compound}
                  alt=""
                  className=""
          style={{height:"100px"}}
                />
                </div>
                <div className='compound_watermark2'>
                <img
                  src={compound}
                  alt=""
                  style={{height:"150px"}}
                />
                </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-pink-500 sm:text-4xl">
              Fairmall
            </p>
            <p className="mt-4 max-w-2xl text-xl text-black-500 lg:mx-auto">
              Fairmall is your one stop e-commerce platform dedicated to
              providing a wide variety of locally made products ranging from
              household items, furniture, food, arts, crafts, fashion and
              agricultural products to urbanized working-age customers in
              Nigeria and diasporan markets who are interested in sustainable,
              eco-friendly consumerism and environmentally concious.
            </p>
            <br />
            <br />
            <p className="italic text-pink-500">
              “It makes sense ethically, it should make sense financially”
            </p>
          </div>
        </div>
    
      </div>

      <div className="bg-white">
  
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

   
        <div className="grid grid-cols-6 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-8">

            <a href="#" className="group">
            <h1 className="heading">World Class furniture</h1>
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                  src={slide}
                  alt=""
                  className="slide__"
                />
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
            </a>
            <a href="#" className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                  src={slide1}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
            </a>
            <a href="#" className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                  src={slide2}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
            </a>
            <a href="#" className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                  src={slide3}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
            </a>
            <a href="#" className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                  src={slide4}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
            </a>
            <a href="#" className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                  src={slide5}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
            </a>
        </div>
    
    <br/><br/>
    <div className="grid grid-cols-6 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-8">

            <a href="#" className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                  src={slide1}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
            </a>
            <a href="#" className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                  src={slide3}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
            </a>
            <a href="#" className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                  src={slide4}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
            </a>
            <a href="#" className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                  src={slide}
                  alt=""
                  className="slide__"
                />
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
            </a>
            <a href="#" className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                  src={slide2}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
            </a>
            <a href="#" className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                  src={slide5}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
            </a>
        </div>
      </div>

      <h1 className="craft">Art And Craft From All Over</h1>
      <div>
      {/* <ImageModal /> */}
      </div>
    
    </div>
    
</div>

   </>
  )
}

export default Home 