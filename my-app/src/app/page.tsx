import TopBar from "@/components/Home/TopNavbar";
import LogoImage from "@/components/Home/Center";
import RewardPanel from "@/components/Home/RewardPanel";
import Products from "@/components/Home/Product";
import ButtonGroup from "@/components/Home/ButtonGroup";
import BasicLayout from "@/components/Layout/Basic";
const bgclass = "     background-position-y: -88px; ";
export default function Home() {
  return (
    <BasicLayout>
      <main
        className="  bg-cover  bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(${"/images/bg2.svg"})`,
        }}
      >
        <div
          className=" py-2  bg-cover  bg-top   bg-no-repeat"
          style={{
            backgroundImage: `url(${"/images/homebg.png"})`,
            backgroundPositionY: "-179px",
          }}
        >
          <TopBar />
          <LogoImage />
          <RewardPanel />
          <ButtonGroup />
          <Products />
        </div>
      </main>
    </BasicLayout>
  );
}
