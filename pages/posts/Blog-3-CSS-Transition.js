import Layout from "../../components/layout";
import Head from "next/head";
import Content from "./content.module.css";
import Blog3 from "./blog3.module.css";
import Blog2 from "./blog2.module.css";
import Code from "../../styles/Code";
import ClipPathCover from "../../public/imageCover/Clippath.png";
import Image from "next/image";

export default function ClipPath() {
  const cssOriginal = `.btnClick {
    background-color: white;
    padding: 15px;
    border: 1px solid #2c2c2e;
    width: 100px;
  }
.btnClick:hover {
    background-color: #2c2c2e;
    color: white;
    width: 300px;
    cursor: pointer
  }`;

  const transitionProperty = `.btnClick {
    background-color: white;
    padding: 15px;
    border: 1px solid #2c2c2e;
    width: 100px;

    // code ที่เพิ่มเข้ามา
    transition-property: background-color, color, width;
  }`;

  const transitionDuration = `.btnClick {
    background-color: white;
    padding: 15px;
    border: 1px solid #2c2c2e;
    width: 100px;

    // code ที่เพิ่มเข้ามา
    transition-property: background-color, color, width;
    transition-duration: 1s, 1s, 1s; 
  }`;

  const insetWithRound = `.custom-clip-path { 
    // code ที่เพิ่มเข้ามา
    clip-path: inset(70px 40px 70px 40px round 20px);
}`;

  const circle = `.custom-clip-path { 
    // code ที่เพิ่มเข้ามา
    clip-path: circle();
}`;

  const circleWithAt = `.custom-clip-path { 
    // code ที่เพิ่มเข้ามา
    clip-path: circle(80px at 100px 50px);
}`;

  const ellipse = `.custom-clip-path { 
    // code ที่เพิ่มเข้ามา
    clip-path: ellipse(100px 50px);
}`;

  const polygon = `.custom-clip-path { 
    // code ที่เพิ่มเข้ามา
    clip-path: polygon(50% 0, 50% 0,100% 100%, 0 100%);
}`;

  return (
    <Layout>
      <>
        <Head>
          <title>nuengStory | CSS Transition</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            property="og:title"
            content="กำหนด element เป็นรูปร่างต่างๆด้วย Clip-path"
            key="title"
          />
          {/* <meta property="og:description" content="ผมจะมี html code ตั้งต้นเพื่อใช้กับแต่ละวิธีนะครับ ตามด้านล่างนี้เลย" key="ogdesc" /> */}
          <meta
            property="og:image"
            content="https://dl.dropboxusercontent.com/s/8ciy7sc5kd9ifwd/Clippath.png?dl=0"
            key="ogimage"
          />
        </Head>
        {/* content */}
        <div className={Content.blogContentContainer}>
          <div>
            <div className={Content.textHeader}>
            Control Animation ได้ง่ายๆ ด้วย CSS Transition
            </div>

            <div className={Content.imageCoverContainer}>
          {/* <Image alt="blog cover" className={Content.contentImageCover} layout="fill" src="https://dl.dropboxusercontent.com/s/owwafmerbzupwyq/blog1-cover.png?dl=0"  /> */}
          <Image
        src={ClipPathCover}
        alt="Element-center"
        width={500}
        height={500}
      />
          </div>

            <div className={Content.textContent}>
             เริ่มแรกผมขอเกลิ่นโดยการสร้างปุ่มขึ้นมาก่อน หลังจากนั้นก็จะใส่ style ให้ปุ่มเพื่อให้ดูสวยงามขึ้น ไม่หมดแค่นั้นเพื่อให้เป็นมิตรกับผู้ใช้ขณะ mouseover  ผมก็เพิ่มลูกเล่นโดยการเปลี่ยน background และ เปลี่ยนสีของปุ่มเข้าไป  ก็จะได้ตามภาพด้านล่าง
            </div>

            <div className={Content.textContent}>
              <Code
                className={Content.Code}
                code={cssOriginal}
                language="css"
              />
              <div>ผลลัพท์</div>
             <button className={Blog3.btnClick}>
                    ลองกดดูสิ!
              </button> 
            </div>

            <div className={Content.textContent}>
               จะสังเกตุได้ว่าตอนเอา mouse ไป hover  นั้น ปุ่มจะเปลียนขนาดความกว้างจากเดิม 100px เป็น 300px จะเปลี่นนแบบกระทันหัน! ไม่มีความ smooth เลย  ฉันต้องการความ Smooth  
               ดังนั้น จึงต้องใช้ CSS property ที่ชื่อว่า transition เข้ามาช่วยในเรื่องนี้
            </div>

            <div className={Content.textContent}>
               CSS Transition เป็น css property ที่ช่วย control ระหว่าง สถานการณ์ A กับ สถานการณ์ B ว่าระหว่างนั้นจะให้เกิดอะไรขึ้นได้บ้าง ในที่นี้ สถานการณ์ A หมายถึงปุ่มที่ยังไม่ถูก mouseover และ สถานการณ์ B หมายถึงปุ่มที่กำลังถูก mouseover อยู่นั่นเอง
            </div>

            <div className={Content.textContent}>
                มาปลี่ยนปุ่มให้ smooth กันด้วย css transition โดยเริ่มจากรู้จักมันให้มากขึ้นกันก่อน
            </div>

            {/* 1 */}
            <div className={Content.textTopic}>1. transition-property</div>
            <div className={Content.textContent}>
              เป็นการกำหนด property ที่ต้องการให้เกิด transition ในที่นี้เราต้องการให้ background-color, color และ width เปลี่ยนอย่าง smooth ก็กำหนดลงไปเลย 
            </div>

            <div className={Content.textContent}>
              <Code className={Content.Code} code={transitionProperty} language="css" />
            </div>

            <div className={Content.textContent}>
                ผลลัพท์จะยังไม่มีอะไรเปลี่ยนแปลงเพราะ เป็นแค่การกำหนด propterty ให้ transition ที่ต้องการจะให้เกิดการเปลี่ยนแปลงเฉยๆ สิ่งที่จะช่วยให้เกิดการ smooth คือ
            </div>

            {/* 2*/}
            <div className={Content.textTopic}>2. transition-duration</div>

            <div className={Content.textContent}>
              คือการกำหนดเวลาที่ให้เกิดการเปลี่ยนแปลงจาก สถานการณ์ A ไปยัง สถานการณ์ B 
            </div>

            <div className={Content.textContent}>
              <Code className={Content.Code} code={transitionDuration} language="css" />
              <div>ผลลัพท์</div>
             <button className={Blog3.btnClickDuration}>
                    ลองกดดูสิ!
              </button> 
            </div>

            <div className={Content.textContent}>
            Wow! เกิดการเปลี่ยนแปลงแบบ smooth แล้วทีนี้มาเข้าใจกันว่าเกิดอะไรขึ้น
            <ul>
                <li>การกำหนด transition-duration มี value เท่ากับ 1s เป็นการกำหนดเวลาการเปลี่ยนแปลงจาก สถานการณ์ A ไปยัง สถานการณ์ B มีเวลาเป็น 1 วินาที</li>
                <li>transition-duration ช่องแรก 1s สัมพันธ์กับ transition-property: background-color</li>
                <li>transition-duration ช่องสอง 1s สัมพันธ์กับ ransition-property: color</li>
                <li>transition-duration ช่องสาม 1s สัมพันธ์กับ ransition-property: width</li>
            </ul>
             
            </div>

           

          

            {/* 3 */}
          
            
           
            {/* 4 */}
            
           
           

         

            <div className={Content["textContent"] + " " + Content["pb50"]}>
            <div>
            <strong>ข้อมูลอ้างอิงจาก:</strong> https://ishadeed.com/article/clip-path/
            </div>
            <div>
            <strong>ข้อมูลอ้างอิงจาก:</strong>  https://www.w3schools.com/cssref/css3_pr_clip-path.asp 
            </div>
            
            
            </div>
          
          
          </div>
        </div>
      </>
    </Layout>
  );
}
