import React from 'react';

function ShoppingAbout() {
 

  return (

     <div className='container mx-auto p-6'>
     <div className='text-center mb-8'>

      <h1 className='text-3xl font-bold text-gray-800'>About us</h1>
     </div>

     <div className="text-gray-700 space-y-4">
        <div className="text-center mb-6">
          
        </div>
        <p>
          Welcome to <strong>Customized Ecommerce</strong>, your go-to destination for customized t-shirts that reflect your unique style and personality.
        </p>
        <p>
          We believe in creating high-quality, personalized apparel that allows you to express yourself effortlessly. Whether you're designing a shirt for a special event, showcasing your artwork, or simply adding a personal touch to your wardrobe, we've got you covered.
        </p>
        <p>
          At <strong>Customized Ecommerce</strong>, we combine creativity, innovation, and sustainability to offer you premium custom t-shirts made from eco-friendly materials. Our goal is to ensure that every design you create is printed with precision and care.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Why Choose Us?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>High-Quality Prints:</strong> We use advanced printing techniques to ensure your designs look vibrant and last long.</li>
          <li><strong>Eco-Friendly Materials:</strong> Our shirts are made from sustainable fabrics, so you can feel good about your purchase.</li>
          <li><strong>Customization Made Easy:</strong> Choose from a variety of styles, colors, and designs to create something truly unique.</li>
          <li><strong>Fast Delivery:</strong> We strive to get your customized t-shirt to you as quickly as possible, without compromising on quality.</li>
        </ul>
        <p className="mt-4">
          Join the <strong>Customized Ecommerce</strong> community and wear your creativity with pride! Thank you for choosing us to bring your ideas to life.
        </p>

        <div className="bg-gray-100 p-4 mt-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800">Our Address:</h3>
          <p className="text-gray-600">128-C Jagjiwam Ram Nagar,Patnipura Circle ,Indore(MP)</p>
          <h3 className="text-xl font-semibold text-gray-800"> Our Contact No.</h3>
          
          <a href="tel:+11234567890" className="underline decoration-blue-500 text-blue-500">
    123-456-7890
  </a>.
        </div>
      </div>

     </div>
     
  
  );
}

export default ShoppingAbout;






