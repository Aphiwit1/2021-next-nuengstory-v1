import Layout from "../../components/layout";
import Link from "next/link";
import Head from "next/head";
import Content from "./content.module.css";
import Code from "../../styles/Code";
export default function Test() {
    const cssOriginal = `.center-element { 
        height: 100px;
        background-color: #f5f5f5;
        border: 1px solid black;
    }`;
    
    const cssFlex = `.center-element {
        height: 100px;
        background-color: #f5f5f5;
        border: 1px solid black;
    
        // code ที่เพิ่มเข้ามา
        display: flex;
        justify-content: center;
        align-items: center;
    }`;
    
    const cssPaddingWithTextAlign = `.center-element {
      // height: 100px;
      background-color: #f5f5f5;
      border: 1px solid black;
    
      // code ที่เพิ่มเข้ามา
      padding: 50px 0px;
      text-align:center;
    }`;
    
    const cssPositionWithRranslate = `.center-element {
      height: 100px;
      background-color: #f5f5f5;
      border: 1px solid black;
    
      // code ที่เพิ่มเข้ามา
      position:relative;
    }
    .center-element > span {
      // code ที่เพิ่มเข้ามา
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }`;

  return (
    <Layout>
      <>
        <Head>
          <title> XXXXX TEST XXXXXX </title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:title" content="My page title" key="title" />
          <meta property="og:description" content="Hello tag description" key="ogdesc" />
          <meta property="og:image" content="https://source.unsplash.com/collection/190727/1600x900" key="ogimage" />
        </Head>
        {/* content */}
        <div className={Content.blogContentContainer}>
          <div>
            <div className={Content.textHeader}>
              
            #CSS Trick: วิธีจัด Element ไว้ตรงกลางของหน้าจอเว็บไซต์
            </div>
            <div className={Content.textContent}>
            ผมจะมี html code ตั้งต้นเพื่อใช้กับแต่ละวิธีนะครับ ตามด้านล่างนี้เลย
            </div>
            <div className={Content.textContent}>
              <Code code={cssFlex} language="html" />
            </div>
            <div className={Content.textContent}>
              <Code code={cssOriginal} language="css" />
            </div>
            <div className={Content.textContent}> ผลลัพท์ในตอนแรก </div>
            <div className={Content.textContent}>
              <div className={Content.centerElement}>
                <span> HelloWorld </span>
              </div>
            </div>
            <div className={Content.textContent}> ลลัพท์ที่คาดหวัง </div>
            <div className={Content.textContent}>
              <div className={Content.centerElementCenter}>
                <span> HelloWorld </span>
              </div>
            </div>
            <div className={Content.textContent}>
            จะสังเหตุว่าคำว่า HelloWorld นั้น มี "ผลลัพท์ในตอนแรก"
          แสดงอยู่ที่มุมบนซ้ายของกล่อง แล้วถ้าเราอยากจะให้
          ย้ายมาอยู่ตรงกลางของกล่องแบบ "ผลลัพท์ที่คาดหวัง" จะต้องทำอย่างไร
          มีวิธีอยู่หลายวิธีครับ มาติดตามกันเลย
            </div>
            <div className={Content.textTopic}> 1. ใช้ display:flex </div>
            <div className={Content.textContent}>
              <Code code={cssFlex} language="css" />
            </div>
            <div className={Content.textContent}>
              <div className={Content.mb10}>
                
                -กำหนด css ของกล่องให้เป็น display:flex
              </div>
              <div className={Content.mb10}>
              - ใช้ justify-content ให้เป็น center
            เพื่อกำหนดให้อยู่ตรงกลางในแนวนอน
              </div>
              <div>
              - ใช้ align-items เป็น center เพื่อกำหนดให้อยู่ตรงกลางในแนวตั้ง
              </div>
            </div>
            <div className={Content.textTopic}>
            2. ใช้ padding คู่กับ text-align
            </div>
            <div className={Content.textContent}>
              <Code code={cssPaddingWithTextAlign} language="css" />
            </div>
            <div className={Content.textContent}>
              <div className={Content.mb10}> - comment height ของกล่องออกไปก่อน</div>
              <div className={Content.mb10}>
              - กำหนด padding ด้านบน-ล่าง เท่ากับ 50px และ ซ้าย-ขวา เท่ากับ 0px
            เพื่อให้คำอยู่ตรงกลางในแนวตั้ง **แต่คำยังชิดซ้ายในแนวนอนอยู่**
              </div>
              <div>
              - ใช้ text-align เท่ากับ center เข้ามาช่วยให้คำอยู่ตรงกลางในแนวนอน
              </div>
            </div>
            <div className={Content.textTopic}>
              
            3. ใช้ position คู่กับ transform
            </div>
            <div className={Content.textContent}>
              <Code className={Content.Code} code={cssPositionWithRranslate} language="css" />
            </div>
            <div className={Content["textContent"] + " " + Content["pb50"]}>
              <div className={Content.mb10}>
              - สำหรับ class center-element ให้กำหนด position เท่ากับ relative
              </div>
              <div className={Content.mb10}>
              - สำหรับ span ที่อยู่ใน class center-element ในที่นี้หมายถึงคำว่า
            HelloWorld ให้กำหนด position เท่ากับ absolute
            เพื่อให้มันสามารถย้ายตำแหน่งโลดแล่นไปตรงไหนก็ได้ภายในกล่อง (scope
            ที่ถูกกำหนดโดยใช้ position: relative)
              </div>
              <div className={Content.mb10}>
              - กำหนด top และ left เท่ากับ 50%
            ผลลัพท์จะสังเหตุว่าย้ายตำแหน่งแล้วแต่ก็ยังไม่ใช่กึ่งกลาง
            เหตุเพราะตัวคำว่า Helloworld ก็มีความยาวและความสูง
              </div>
              <div>
              - ดังนั้นจึงต้องกำหนด transform เท่ากับ translate เพื่อเลื่อนตำแหน่ง
            มีค่าเท่ากับ (-50%) อันแรกคือเลื่อนไปทางซ้าย(แกน x) (-50%)
            และอันต่อมาคือ เลื่อนขึ้นข้างบน(แกน y) (-50%)
              </div>
            </div>
            <div className={Content["textContent"] + " " + Content["pb50"]}>
            <strong>ข้อมูลอ้างอิงจาก:</strong> https://www.w3schools.com
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
