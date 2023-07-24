import Footer from './Component/Footer';
import NavBar from './Component/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Style/style.css';
import Home from './Pages/Home';
import BrokenPage from './Pages/BrokenPage';
import Wip from './Pages/Wip';
import Shop from './Pages/Shop';
import ShopDetail from './Pages/ShopDetail';
import AboutUs from './Pages/AboutUs';
import Event from './Pages/Event';
import Services from './Pages/Services';
import Faq from './Pages/Faq';
import Testimonial from './Pages/Testimonial';
import Blogs from './Pages/Blogs';
import BlogDetail from './Pages/BlogDetail';
import Vlogs from './Pages/Vlogs';
import ConsultNowModal from './Modal/ConsultNowModal';
import EventThank from "./Pages/ThankPages/EventThank";
import { useSelector } from "react-redux"
import EventDetail from './Pages/EventDetail';
import Sem from './Pages/Sem';
import RegisterNowModal from './Modal/RegisterNowModal';
import ShopThank from './Pages/ThankPages/ShopThank';
import ConsultNowThank from './Pages/ThankPages/ConsultNowThank';
import { useEffect } from 'react';
import LocalStorage from './Storage/LocalStorage';
import ShopPackage from './Component/ShopPackage';

function App() {

  

  const ModalState = useSelector((state) => state.Modal.value.ModalState)
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/wip" element={<Wip />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopdetail/:product_url" element={<ShopDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/event" element={<Event />} />
          <Route path="/events_details/:event_url" element={<EventDetail />} />
          {/* <Route path="/events/shortlisting-schools-mba-webinar" element={<EventDetail />} /> */}
          <Route path="/events/thank-you-for-registering" element={<EventThank />} />
          <Route path="/shop/thank-you-for-choosing-our-services" element={<ShopThank />} />
          <Route path="/thank-you-for-booking-an-appointment" element={<ConsultNowThank />} />



          <Route path="/service" element={<Services />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/mba-admissions-strategies" element={<Blogs />} />
          <Route path="/mba-admissions-strategies/:categories/:blog_url" element={<BlogDetail />} />
          <Route path="/vlog" element={<Vlogs />} />
          <Route path="/leading-international-mba-consultants" element={<Sem />} />
          <Route path="/shoppackages" element={<ShopPackage />}  />

          



          <Route path="/*" element={<BrokenPage />} />
        </Routes>
        <ConsultNowModal show={ModalState} />
        <Footer />
      </Router>
    </>
  );
}

export default App;


