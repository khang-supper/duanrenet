import { HeaderType } from "./headerType/headerType";
import { Hotdeal } from "./hotdeal/hotdeal";
import { Products } from "./product/product";
import { ProductType } from "./productType/produType";
import { Slide } from "./slide/slide";
import { Upforder } from "./upForder/upforder";

const MaterLayout = () => {
  return (
    <>
      {/* /HEADER */}
      {/* NAVIGATION */}
     <HeaderType/>
      {/* /NAVIGATION */}
      {/* SECTION */}
      {/* /SECTION */}
      {/* SECTION */}
     <Slide/>
      {/* /SECTION */}
      {/* HOT DEAL SECTION */}
      <Hotdeal />
      {/* /HOT DEAL SECTION */}
      {/* SECTION */}
      <Products/>
      {/* /SECTION */}
      {/* SECTION */}
     <ProductType/>
      {/* /SECTION */}
      {/* NEWSLETTER */}
      <Upforder/>
      {/* /NEWSLETTER */}
      {/* FOOTER */}
    </>
  );
};
export default MaterLayout;
