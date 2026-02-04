'use client'
import React, { useState } from 'react';
import { Plus, Minus, Heart } from 'lucide-react';
import Image from 'next/image';

const Quickview = () => {
  const [quantity, setQuantity] = useState(1);
  const [accordionOpen, setAccordionOpen] = useState({
    Description: false,
    Details: false,
    'Delivery Time': false
  });
  const [mainImage, setMainImage] = useState('/cart1.jpg');

  const toggleAccordion = (section) => {
    setAccordionOpen(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const accordionContent = {
    'Description': 'This premium lawn suit offers comfort and style, perfect for casual and semi-formal occasions.',
    'Details': 'Includes shirt, trouser, and dupatta. Machine washable and colorfast. Fabric: Lawn & Cambric.',
    'Delivery Time': 'Orders are delivered within 3-5 business days. Express delivery options available at checkout.'
  };

  const productPrice = 'Rs. 11,900';

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-6 font-sans text-[#222]">
      {/* max-w-1000px aur gap-0 se gap khatam ho jayega */}
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-0">

        {/* LEFT: MAIN IMAGE + THUMBNAILS */}
        {/* Padding right hata di (pr-0) taake content sath jud jaye */}
        <div className="w-full md:w-[60%] flex gap-4 bg-gray-100 p-4 pr-0 rounded-sm">
          
          {/* Vertical Thumbnails */}
          <div className="hidden md:flex flex-col gap-2 min-w-[60px]">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className={`border ${mainImage === `/cart${i}.jpg` ? 'border-black' : 'border-gray-300'} cursor-pointer transition-all overflow-hidden rounded-sm`}
                onClick={() => setMainImage(`/cart${i}.jpg`)}
              >
                <Image 
                  src={`/cart.jpg`} 
                  alt={`thumb${i}`} 
                  width={60} 
                  height={60} 
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Image - justify-start kiya taake gap na rahe */}
          <div className="flex-1 flex justify-start items-start overflow-hidden bg-gray-100 rounded-sm" style={{ height: '500px' }}>
            <Image 
              src={'/cart.jpg'} 
              alt="Main Product" 
              width={450} 
              height={500} 
              className="object-cover h-full"
            />
          </div>

        </div>

        {/* RIGHT: PRODUCT DETAILS */}
        {/* pl-2 se right side ka gap control kiya */}
        <div className="w-full md:w-[40%] flex flex-col p-4 md:p-6 pl-2 bg-gray-100 rounded-sm">
          {/* Header */}
          <div className="mb-4">
            <h1 className="text-[16px] tracking-[3px] uppercase font-bold italic">Thorfin<span className='text-gray-400'>Store</span></h1>
          </div>

          <hr className="border-gray-300 mb-4" />

          {/* Fabric Details */}
          <div className="space-y-2 mb-3">
            <h3 className="text-[12px] font-bold uppercase tracking-wider mb-2">Fabric Details</h3>
            <div className="grid grid-cols-1 gap-1 text-[12px] text-gray-700">
              <p><span className="font-bold">Shirt:</span> Lawn</p>
              <p><span className="font-bold">Trouser:</span> Cambric</p>
              <p><span className="font-bold">Dupatta:</span> Swiss Voil</p>
              <p className="font-bold italic">Color: <span className="font-normal not-italic">Ivory</span></p>
            </div>
          </div>

          {/* Product Price */}
          <p className="text-[14px] text-gray-700 mt-1 mb-4 font-semibold">{productPrice}</p>

          {/* Quantity & Wishlist */}
          <div className="flex gap-2 mb-4">
            <div className="flex border border-gray-300 items-center h-[35px]">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-2 py-1 text-gray-600">
                <Minus size={12} />
              </button>
              <span className="px-3 text-[13px] font-medium w-8 text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-2 py-1 text-gray-600">
                <Plus size={12} />
              </button>
            </div>
            <button className="flex-1 md:flex-none border border-gray-300 px-3 flex items-center justify-center transition-colors h-[35px]">
              <Heart size={16} className="text-gray-600" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 mb-6">
            <button  className="w-full border border-gray-300 py-2.5 text-[11px] font-bold uppercase tracking-[1.5px] hover:bg-black hover:text-white transition-all">
              Add to Bag
            </button>
            <button className="w-full bg-[#1c1c1c] text-white py-2.5 text-[11px] font-bold uppercase tracking-[1.5px] hover:bg-black transition-all">
              Buy It Now
            </button>
          </div>

          {/* Accordion Sections */}
          <div className="border-t border-gray-300">
            {Object.keys(accordionContent).map((item) => (
              <div key={item} className="border-b border-gray-300 py-2.5 cursor-pointer group" onClick={() => toggleAccordion(item)}>
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-gray-500 group-hover:text-black">{item}</span>
                  <Plus size={14} className={`text-gray-400 transition-transform ${accordionOpen[item] ? 'rotate-45' : ''}`} />
                </div>
                {accordionOpen[item] && (
                  <p className="text-[11px] text-gray-700 mt-1">{accordionContent[item]}</p>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Quickview;