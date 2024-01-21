import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Test from "./components/Test2";
// import Favourites from './components/favourites';
// import Cart from './components/cart';

function App() {
  return (
    <>
      <Navbar />
      <div className="hero_img_container">
        <div className="hero_img"></div>
        <section className="container-fulid main_page">
          <div className="row block">
            <div className="col left_col_block">
              <div className="hotel_name">
                <h1 className="tw">享樂酒店</h1>
                <h1 className="en">Enjoyment Luxury Hotel</h1>
              </div>
            </div>
            <div className="col right_col_block">
              <div className="bg"></div>
              <div className="main_block">
                <div className="main_title">
                  <div>
                    <h1>高雄</h1>
                    <h1>豪華住宿之選</h1>
                  </div>
                  <p>我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
                </div>
                <div className="big_btn">
                  <p className="title">立即訂房</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="news"></section>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
