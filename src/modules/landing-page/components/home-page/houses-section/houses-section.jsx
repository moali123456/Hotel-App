import { useTranslation } from "react-i18next";
import ItemCard from "../../../shared/item-card/item-card";
import Images from "../../../../../assets/Images/Images";
import "./houses-section.scss";

const HousesSection = () => {
  const { t } = useTranslation();

  return (
    <div id="houses_section">
      <div className="container_bx pt-6 pb-5">
        <h1 className="text-[#152C5B] text-2xl font-medium mb-4">
          {t("home_page.houses_section_title")}
        </h1>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <ItemCard
              cardImg={Images.popular_1}
              imgClass="h-[200px]"
              itemPrice="45"
              cardLabel={true}
              insideData={false}
              outsideData={true}
              itemName="item name"
              itemLocation="item location"
            />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <ItemCard
              cardImg={Images.popular_2}
              imgClass="h-[200px]"
              itemPrice="45"
              cardLabel={false}
              insideData={false}
              outsideData={true}
              itemName="item name"
              itemLocation="item location"
            />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <ItemCard
              cardImg={Images.popular_3}
              imgClass="h-[200px]"
              itemPrice="45"
              cardLabel={false}
              insideData={false}
              outsideData={true}
              itemName="item name"
              itemLocation="item location"
            />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <ItemCard
              cardImg={Images.popular_4}
              imgClass="h-[200px]"
              itemPrice="45"
              cardLabel={false}
              insideData={false}
              outsideData={true}
              itemName="item name"
              itemLocation="item location"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousesSection;
