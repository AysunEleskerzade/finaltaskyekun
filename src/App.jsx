import { useState } from 'react'
import './App.css'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='navbar'>
      <div className='navbar_logo'>
        <h1>Aranoz.</h1>
        </div>
      <div className='navbar_lists'>
        <ul className='item'>
          <li>Home</li>
          <li>Shop</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Add</li>
        </ul>
      </div>
    <div className='icons'>
    <CiSearch />
    <CiHeart />
    <SlBasket />
</div>
</div>
<div className='container'>
  <div className='row'>
    <div className='col-lg-4'>
      <div className='left'>
        <h1>Cloth & Wood Sofa</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <button>BUY NOW</button>
      </div>
    </div>
    </div>
    <div className='col-lg-8'>
      <div className='right'>
        <img src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png" alt="" />
      </div>
    </div>
  </div>
  <div className='ikinciqutu'>
    <div className='qutu1'>
      <p>Premium Quality</p>
      <h1>Latest foam Sofa</h1>
      <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_1.png" alt="" />
    </div>
    <div className='qutu2'>
      <p>Premium Quality</p>
      <h1>Latest foam Sofa</h1>
      <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png" alt="" />
    </div>
    </div>
    <div className='ucuncuqutu'>
    <div className='qutu3'>
      <p>Premium Quality</p>
      <h1>Latest foam Sofa</h1>
      <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_3.png" alt="" />
    </div>
    <div className='qutu4'>
      <p>Premium Quality</p>
      <h1>Latest foam Sofa</h1>
      <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_4.png" alt="" />
    </div>
  </div>
  <div className='info'>
    <div className='soz2'>
      <h1>Awesome </h1>
      <p>Shop</p>
    </div>
    <div className='arxafon'>
    <div className='card1'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png" alt="" />
      <h1>Quartz Belt Watch</h1>
      <p>$150.00</p>
    </div>
    <div className='card2'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_2.png" alt="" />
      <h1>Quartz Belt Watch</h1>
      <p>$150.00</p>
    </div>
    <div className='card3'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_3.png" alt="" />
      <h1>Quartz Belt Watch</h1>
      <p>$150.00</p>
    </div>
    <div className='card4'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_4.png" alt="" />
      <h1>Quartz Belt Watch</h1>
      <p>$150.00</p>
    </div>
    </div>
  </div>

  <div className='arxafon2'>
    <div className='card11'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_5.png" alt="" />
      <h1>Quartz Belt Watch</h1>
      <p>$150.00</p>
    </div>
    <div className='card12'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_6.png" alt="" />
      <h1>Quartz Belt Watch</h1>
      <p>$150.00</p>
    </div>
    <div className='card13'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_7.png" alt="" />
      <h1>Quartz Belt Watch</h1>
      <p>$150.00</p>
    </div>
    <div className='card14'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_8.png" alt="" />
      <h1>Quartz Belt Watch</h1>
      <p>$150.00</p>
    </div>
    </div>
    <div className='dorduncuqutu'>
      <div className='sol'>
        <img src="https://preview.colorlib.com/theme/aranoz/img/offer_img.png" alt="" />
      </div>
      <div className='sag'>
        <h1>Weekly Sale on 60% Off All Products</h1>
        <div className='sag1'>
          <div className='bir'>
            <p>Days</p>
            <h2>-1704</h2>
          </div>
          <div className='iki'>
            <p>Hours</p>
            <h2>05</h2>
          </div>
          <div className='uc'>
            <p>Minutes</p>
            <h2>10</h2>
          </div>
          <div className='dord'>
            <p>Seconds</p>
            <h2>12</h2>
            </div>
        </div>
      </div>
    </div>

    <div className='info5'>
    <div className='soz2'>
      <h1>Best Sellers </h1>
      <p>Shop</p>
    </div>
    <div className='arxafon'>
    <div className='card1'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png" alt="" />
      <h1>Quartz Belt Watch</h1>
      <p>$150.00</p>
    </div>
    <div className='card2'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_2.png" alt="" />
      <h1>Quartz Belt Watch</h1>
      <p>$150.00</p>
    </div>
    <div className='card3'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_3.png" alt="" />
      <h1>Quartz Belt Watch</h1>
      <p>$150.00</p>
    </div>
    <div className='card4'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_4.png" alt="" />
      <h1>Quartz Belt Watch</h1>
      <p>$150.00</p>
    </div>
    </div>
  </div>

  <div className='besinciqutu'>
    <p>JOIN OUR NEWSLETTER</p>
    <h1>Subscribe to get Updated with new offers</h1>
    <input type='text'></input>
    <button>SUBSCRIBE NOW</button>
  </div>

  <div className='altinciqutu'>
    <div className='sekil1'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png" alt="" />
    </div>
    <div className='sekil2'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png" alt="" />
    </div>
    <div className='sekil3'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png" alt="" />
    </div>
    <div className='sekil4'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_4.png" alt="" />
    </div>
    <div className='sekil5'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_5.png" alt="" />
    </div>
  </div>
  
  <div className='yeddinciqutu'>
    <div className='sekil6'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png" alt="" />
    </div>
    <div className='sekil7'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png" alt="" />
    </div>
    <div className='sekil8'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png" alt="" />
    </div>
    <div className='sekil9'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png" alt="" />
    </div>
    <div className='sekil10'>
      <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_4.png" alt="" />
    </div>
  </div>

  <div className='sekkizinciqutu'>
    <div className='yazi1'>
      <h1>Top Products</h1>
      <p>Managed Website</p>
      <p>Manage Reputation</p>
      <p>Power Tools</p>
      <p>Marketing Service</p>   
       </div>
       <div className='yazi2'>
      <h1>Quick Links</h1>
      <p>Jobs</p>
      <p>Brand Assets</p>
      <p>Investor Relations</p>
      <p>Terms of Service</p>   
       </div>
       <div className='yazi3'>
      <h1>Features</h1>
      <p>Jobs</p>
      <p>Brand Assets</p>
      <p>Investor Relations</p>
      <p>Terms of Service</p>   
       </div>
       <div className='yazi4'>
      <h1>Resources</h1>
      <p>Guides</p>
      <p>Research</p>
      <p>Experts</p>
      <p>Agencies</p>   
       </div>
       <div className='yazi5'>
      <h1>Newsletter</h1>
      <p>Heaven fruitful doesn't over lesser in days.</p>
      <p>Appear creeping</p>
      <input type='text'></input>
      <botton>Subscribe</botton> 
       </div>
  </div>

  <div className='sonuncu'>
    <p>Copyright ©2024 All rights reserved | This template is made with</p>
    <CiHeart />
    <p> by Colorlib</p>
    <div className='icon2'>
    <FaFacebookF />
    <FaTwitter />
    <IoLogoWhatsapp />
    <FaInstagramSquare />
  </div>
  </div>
  </>
  )
}

export default App
