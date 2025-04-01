import { useTranslation } from "react-i18next";
import Booking from "./booking";
//import Images from "../../../../../assets/Images/Images";
import ImgSlider from "./img-slider";
import "./banner-section.scss";

const BannerSection = () => {
  const { t } = useTranslation();

  return (
    <div id="banner_section">
      <div className="container_bx pt-12 md:pt-6 lg:pt-12">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 lg:col-span-7">
            <div className="max-w-[80%]">
              <h1 className="text-[#152C5B] text-5xl font-bold">
                {t("home_page.banner_title_1")}
              </h1>
              <h1 className="text-[#152C5B] text-5xl font-bold mt-4">
                {t("home_page.banner_title_2")}
              </h1>

              <div className="mt-7 flex flex-col gap-1">
                <p className="text-[#B0B0B0]">{t("home_page.banner_text_1")}</p>
                <p className="text-[#B0B0B0]">{t("home_page.banner_text_2")}</p>
              </div>

              {/* select date */}
              <div className="text-[#152C5B] text-lg font-semibold mt-8">
                <h3>{t("home_page.start_booking")}</h3>

                <Booking buttonText={t("home_page.explore")} payment={false} />
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 lg:col-span-5 hidden md:block lg:block py-3 ps-3">
            <div className="w-full slider_holder">
                <ImgSlider />
                {/* <img className="w-full rounded-tl-[100px] rounded-[15px] relative z-50 max-h-[480px] object-cover object-center" src={Images.slide_1} alt="pic" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
