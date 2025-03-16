import SwiperBox from "../components/Swiper.jsx";
import Ratings from "../components/Ratings.jsx";
import productItems from "../api/productItems.json";
import Button from "../components/Button.jsx";
import Order from "../components/Order.jsx";
import { FaCartShopping } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import video1 from "../../public/assets/combovideo1.mp4";
import video2 from "../../public/assets/combovideo2.mp4";
import axios from "axios";
import { useEffect } from "react";
import Video from "../components/Video.jsx";
const Home = () => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(0);
  const handleClick = name => {
    document.getElementById("my_modal_3").showModal();

    if (name == "p1") {
      setProduct("প্যাকেজ ১: ১৯টি প্রোডাক্ট");
      setPrice(1499);
    }
    if (name == "p2") {
      setProduct("প্যাকেজ ২: ১২টি প্রোডাক্ট");
      setPrice(799);
    }
  };

  
  return (
    <div className="relative py-2 pb-20 px-4 font-bangla font-bold w-full min-h-screen flex flex-col gap-5">
      <div className="fixed bottom-4 right-4 z-10 p-2 bg-green-500 text-white  rounded-full text-5xl">
        <Link target="_blank" to="https://wa.me/qr/EQTBQJZCSJA3B1">
          {<FaWhatsapp />}
        </Link>
      </div>
      <div>
        <SwiperBox
          packageNumber="প্যাকেজ: ১"
          title="১৮ টির ও বেশি প্রোডাক্ট পাচ্ছেন আমাদের এই অফারে"
          ratings="১২০০+ কাস্টমার দের ভরসা"
          images={productItems[0].images}
          list={productItems[0].combo1lists}
          originalPrice="১৭০০"
          discountPrice="১৪৯৯/"
          discountParcent="১৫%"
        />
        <Button style="w-full" onClick={() => handleClick("p1")}>
          অর্ডার প্যাকেজ ১{<FaCartShopping />}
        </Button>
        <Order price={price} product={product} />
      </div>

      <div>
        <SwiperBox
          packageNumber="প্যাকেজ: ২"
          title="১০ টির ও বেশি প্রোডাক্ট পাচ্ছেন আমাদের এই অফারে"
          ratings="২০০০+ কাস্টমার দের ভরসা"
          images={productItems[0].images2}
          list={productItems[0].combo2lists}
          originalPrice="১০০০"
          discountPrice="৭৯৯/"
          discountParcent="২০%"
        />
        <Button style="w-full" onClick={() => handleClick("p2")}>
          অর্ডার প্যাকেজ ২{<FaCartShopping />}
        </Button>
      </div>
      <Order price={price} product={"10 color shadow"} />
      <div>
        <h1 className="text-center text-2xl">প্যাকেজ ১</h1>
        <Video link={video1} />
      </div>
      <div>
        <h1 className="text-center text-2xl">প্যাকেজ ২</h1>
        <Video link={video2} />
      </div>
    </div>
  );
};

export default Home;
