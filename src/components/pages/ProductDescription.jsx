import { React, useEffect, useState } from "react";
import Navigation from "../layouts/Navigation";
import VECTOR from "../images/Vector.png";
import { StarIcon } from "@heroicons/react/solid";
import ButtonIcon from "../images/Button_with_icon.png";
import love_vector from "../images/love_vector.png";
import share_vector from '../images/share_vector.png'
import furniture from '../images/furnitures/slide2.png'
import unsplash from '../images/unsplash__c.png'
import unsplash_k from '../images/unsplash_kq.png'
import unsplash_lr5 from '../images/unsplash_lr5.png'
import unsplash_FV from '../images/unsplash_FV.png'
import unsplash_7t from '../images/unsplash_7t.png'
import unsplash_ex from '../images/unsplash_ex.png'
import dudu_osun from '../images/dudu_osun.png'
import dudu_2 from '../images/dudu_2.png'

const product = {
  rating: 3.9,
  reviewCount: 20,
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductDescription = () => {
  return (
    <>
     <div className="container ">
      <div className="md:	max-width shrink-0">
        <Navigation />
      </div>
      <div className="rectangle shrink-0 ">
        <img
          className="vectorImage"
          style={{ marginLeft: "24%" }}
          src={VECTOR}
          alt="vector"
        />
        <div style={{ marginLeft: "40%" }}>
          <h6 className="item">Item has been added to basket</h6>
        </div>
      </div>
     
        <div className="flex flex-wrap md:flex-wrap-reverse ">
          <div class="flex columns-4 ml-5 mt-5 gap-4 md:gap-6">
         
            <img className="unsplashLr" />
            
            <div className="">
              <h1 className=" thumbnail_header shrink-0">Arts And Craft</h1>
              <br />
              <p className="product_name shrink-0">Product name here</p>
              <p className="heading3 shrink-0">
                by <strong style={{ color: "#E11493" }}>Fairmall</strong>
              </p>

              <div className="mt-10">
                <div className="flex">
                  <img class=" thumbnail2 " />
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "h-5 w-5"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                  <a
                    href="#"
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    ({product.reviewCount}) submit a review
                  </a>
                </div>

                <div className="mt-5">
                  <h1 className="product_name">100,000 NGN</h1>
                  <img className="thumbnail3" />
                  <p className="heading3">Product-no: GH-23451</p>
                </div>

                <div className="mt-5">
                <button className="cart_button">
     <img src={ButtonIcon}
     />
    </button>
                  <img className="thumbnail3" />
                </div>
              </div>
            </div>

            <img class=" thumbnail" />
            <div className="mt-5 ml-28">
                <button className="cart_button">
     <img src={love_vector} className='love_vector'
     />
    </button>
                 
                </div>
                <div className="mt-5 ml-2">
                <button className="cart_button">
     <img src={share_vector} className='love_vector'
     />
    </button>
                 
                </div>
            {/* <p>Maybe we can live without libraries, people like you and me. ...</p> */}
          </div>
        </div>
        <div className="pt-6 ml-5">
          <h1 className="font-bold">Description:</h1>
          <p class="text-left typo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in ipsum
            auctor hendrerit neque, in. Neque, cursus dui elementum id. Egestas
            malesuada eu magna neque, amet tellus adipiscing. Eu adipiscing
            pretium nunc potenti id dui. Egestas eu ut quam venenatis rhoncus
            orci duis eu diam. Pharetra, consequat arcu ut fermentum tortor
            imperdiet lorem cursus. At et mi feugiat quisque sapien nisi sit.
            Elit aliquet sem risus lacus viverra. Amet, adipiscing aliquet sed
            quis vulputate consectetur dui rhoncus magna. Sed amet nulla nisi,
            pretium, lectus. Eget sed aliquet vestibulum aliquam condimentum dui
            placerat urna sit. Adipiscing arcu neque, blandit enim. Viverra in
            faucibus faucibus vitae, interdum a. Nunc, urna, amet ipsum ante
            faucibus a fames eget. Hendrerit tellus, mauris congue blandit eu
            orci. Phasellus eu eget viverra aenean. Egestas sit aliquet nibh
            nunc viverra. Nunc id euismod mattis diam. Lacus elit, duis rhoncus,
            commodo vel arcu. Cursus sit tincidunt fames aliquam, quis aliquam
            turpis ultrices consequat. Mi nisi, cum dictum felis aenean tellus.
            Id nulla vitae non turpis. Praesent blandit lobortis cras nisi
            egestas at leo, sed. Est vitae in neque, amet. Nulla arcu, aenean
            eget sed justo, euismod. Lacinia massa nulla orci, at donec sed
            faucibus integer sit. Sed adipiscing ultricies sapien, sed ut.
            Feugiat nibh id placerat justo, nulla lobortis facilisi gravida
            dictum. In mauris duis ut non, augue mattis. Et enim nam arcu nec.
            Turpis.
          </p>
          <div className="py-0">
        <h1 className="font-bold">In Stock: <span className="thumbnail_header2">Yes</span></h1>
        <h1 className="pt-2 font-bold">Category: <span className="thumbnail_header2">Arts And Crafts</span></h1>
        <h1 className="pt-2 font-bold">SKU: <span className="thumbnail_header2">SKU_DL3ETnJYDyr7QcaJ6</span></h1>
        <div className="pt-2">
        <h1 className="font-bold">Specications:</h1>
          <p class="text-left typo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in ipsum
            auctor hendrerit neque, in. Neque, cursus dui elementum id. Egestas
            malesuada eu magna neque, amet tellus adipiscing. Eu adipiscing
            pretium nunc potenti id dui. Egestas eu ut quam venenatis rhoncus
            orci duis eu diam. Pharetra, consequat arcu ut fermentum tortor
            imperdiet lorem cursus. At et mi feugiat quisque sapien nisi sit.
            Elit aliquet sem risus lacus viverra. Amet, adipiscing aliquet sed
            quis vulputate consectetur dui rhoncus magna. Sed amet nulla nisi,
            pretium, lectus. Eget sed aliquet vestibulum aliquam condimentum dui
            placerat urna sit. Adipiscing arcu neque, blandit enim. Viverra in
            faucibus faucibus vitae, interdum a. Nunc, urna, amet ipsum ante
            faucibus a fames eget. Hendrerit tellus, mauris congue blandit eu
            orci. Phasellus eu eget viverra aenean. Egestas sit aliquet nibh
            nunc viverra. Nunc id euismod mattis diam. Lacus elit, duis rhoncus,
            commodo vel arcu. Cursus sit tincidunt fames aliquam, quis aliquam
            turpis ultrices consequat. Mi nisi, cum dictum felis aenean tellus.
            Id nulla vitae non turpis. Praesent blandit lobortis cras nisi
            egestas at leo, sed. Est vitae in neque, amet. Nulla arcu, aenean
            eget sed justo, euismod. Lacinia massa nulla orci, at donec sed
            faucibus integer sit. Sed adipiscing ultricies sapien, sed ut.
            Feugiat nibh id placerat justo, nulla lobortis facilisi gravida
            dictum. In mauris duis ut non, augue mattis. Et enim nam arcu nec.
            Turpis.
          </p>
        </div>
        </div>
        </div>
    
    <h1 className="heading">You Might Also Like</h1>

          <div className="mt-10 py-2 ml-5 grid grid-cols-4 gap-4">
        <div>

        <img src={furniture} className="keto " alt="keto"/>
        <h3 className="mt-2 mr-10 text-center">Hand-Made Vase</h3>
        <h5 className="mt-2 mr-10 text-center  thumbnail_header2">100,000 NGN</h5>
       
        </div>
 <div>
 <img className="keto" src={unsplash} />
 <h3 className="mt-2 mr-10 text-center">Hand-Made Vase</h3>
        <h5 className="mt-2 mr-10 text-center  thumbnail_header2">100,000 NGN</h5>
 </div>

<div>
<img className="keto" src={unsplash_k} />
<h3 className="mt-2 mr-10 text-center">Hand-Made Vase</h3>
        <h5 className="mt-2 mr-10 text-center  thumbnail_header2">100,000 NGN</h5>
</div>

<div>
<img class="keto" src={unsplash_lr5}/>
<h3 className="mt-2 mr-10 text-center">Hand-Made Vase</h3>
        <h5 className="mt-2 mr-10 text-center  thumbnail_header2">100,000 NGN</h5>
</div>

 


 </div>
      </div>



 <h1 className="mt-10 text-center inspiration">Inspirations</h1>
 {/* <div class="columns-3">
   <div className="fv3">
   <img class=" w-full aspect-square" src={unsplash_FV}/>
   <img class="w-full aspect-square" src={unsplash_lr5} />
  <img class="w-full aspect-square" src={unsplash_lr5} />
  <img class="w-full aspect-square" src={unsplash_lr5} />
  <img class="w-full aspect-square" src={unsplash_lr5} />
   </div>
  
   </div> */}

<div className="container">
<div class="flex gap-4 columns-3 mt-2">
  <div className="ml-5">
  <img class=" w-full aspect-square" src={unsplash_FV}/>
  </div>
<div className="mr-10">
<img class="fv3" src={unsplash_7t}/>
</div>
<div>
<img className="ex" src={unsplash_ex}/>
</div>

</div>
<div class="flex mt-2">
  <div className="ml-5">
  <img class="dudu_osun w-full aspect-square" src={dudu_osun}/>
  </div>
<div className="ml-20">
<img class="dudu_2" src={dudu_2}/>
</div>
</div>
</div>



    </>
  );
};

export default ProductDescription;
