// import Heading from "./components/Heading"
// import List from "./components/List"

//  import Image from "./components/image"
// import Logo from "../src/assets/logo.png"
// import Flex from "./components/Flex"
// import Container from "./components/Container"
// import Bars from "./components/icons/Bars"
import Header from "./components/layouts/Header"
import Category from "./components/layouts/Category"
import Banner from "./components/layouts/Banner"
import Product from "./components/Product"
import { Label } from "./components/layouts/Label"
import Input from "./components/Input"
import Container from "./components/Container"
import Contact from "./components/layouts/Contact"
import Phone from "./components/Phone"
import Year from "./components/Year"
 import Special from "./components/Special"
import Footer from "./components/Footer"
 

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { HiMiniBars3CenterLeft, HiMiniBars3BottomRight} from "react-icons/hi2"
 
function App() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1
  // };
  return (
    <>
     
      {/* <Container>
    
      </Container>
      <Heading text=" ami goo"/>
 
 <Image src={Logo}/>
 <HiMiniBars3CenterLeft />
 <HiMiniBars3BottomRight />
 <Bars/> */}
 <Container>
 <Header/>
 <Category/>
 <Banner/>
 <Phone/>
 <Product/>
 <Year/>
 <Special/>
 <Footer/>

 {/* 
 <Input inType='text' inPH='your name'/> */}
 <Contact/>

 </Container>
 
 {/* <Slider {...settings}>
          <div>
             <Product/>
          </div>
          <div>
             <Product/>
          </div>
           
        </Slider> */}

    </>
  )
}

export default App
