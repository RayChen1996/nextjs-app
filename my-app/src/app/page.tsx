import TopBar from "@/components/Home/TopNavbar";
import TopNavbarMobile from "@/components/Home/TopNavbarMobile";
import LogoImage from "@/components/Home/Center";
import RewardPanel from "@/components/Home/RewardPanel";
import RewardPanelMobile from "@/components/Home/RewardPanelMobile";
import Products from "@/components/Home/Product";
import ButtonGroup from "@/components/Home/ButtonGroup";
import ButtonGroupMobile from "@/components/Home/ButtonGroupMobile";
import BasicLayout from "@/components/Layout/Basic";
import {
  DesktopContainer,
  TabletAndBelowContainer,
} from "@/components/MediaContainer/MediaContainer";
import MobileHeaderNav from "@/components/Layout/MobileHeaderNav";

export default function Home() {
  return (
    <BasicLayout>
      <main
        className="  bg-cover  bg-center bg-no-repeat  "
        style={{
          backgroundImage: `url(${"/images/bg2.svg"})`,
        }}
      >
        <div
          className=" bg-cover  bg-top   bg-no-repeat bg-[url('/images/bg3.svg')] md:bg-[url('/images/bg2.svg')] lg:bg-[url('/images/bg2.svg')] xl:bg-[url('/images/bg2.svg')]"
          style={{
            // backgroundImage: `url(${"/images/homebg.png"})`,
            backgroundPositionY: "-179px",
          }}
        >
          {/* NOTE Header */}
          <DesktopContainer>
            <TopBar showBackgroundColor={false} />
          </DesktopContainer>
          <TabletAndBelowContainer>
            <TopNavbarMobile showBackgroundColor={false} />
          </TabletAndBelowContainer>

          {/* NOTE Logo */}

          <LogoImage />

          {/* NOTE Swipper */}

          <DesktopContainer>
            <RewardPanel />
          </DesktopContainer>
          <TabletAndBelowContainer>
            <RewardPanelMobile />
          </TabletAndBelowContainer>

          {/* NOTE 按鈕選單 */}
          <DesktopContainer>
            <ButtonGroup />
          </DesktopContainer>
          <TabletAndBelowContainer>
            <ButtonGroupMobile />
          </TabletAndBelowContainer>

          {/* NOTE Produces Grid */}
          <Products />
        </div>
      </main>
    </BasicLayout>
  );
}
