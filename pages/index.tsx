
import BodyFrameSection1 from "@/components/bodyFrame/bodyFrame_section1/bodyFrame_section1";
import BodyFrameSection2 from "@/components/bodyFrame/bodyFrame_section2/bodyFrame_section2";
import BodyFrameSection3 from "@/components/bodyFrame/bodyFrame_section3/bodyFrame_section3";
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";
import styles from "../components/bodyFrame/bodyFrame.module.css";

export default function Home() {

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <BodyFrameSection1></BodyFrameSection1>
        <BodyFrameSection2></BodyFrameSection2>
        <BodyFrameSection3></BodyFrameSection3>
        <BodyFrameFooter src="https://www.youtube.com/embed/2wS-x1li7QQ"></BodyFrameFooter>
      </div>
    </>
  );
}
