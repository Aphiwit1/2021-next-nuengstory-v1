import Layout from "../../components/layout";
import Head from "next/head";
import Content from "./content.module.css";
import Blog2 from "./blog2.module.css";
import Code from "../../styles/Code";
import ClipPathCover from "../../public/Clippath.png";
import Image from "next/image";
import ClipPathWebsite from "../../public/clip-path-website.jpg";

export default function ClipPath() {
  const cssOriginal = `.custom-clip-path { 
    background-color: #50E190;
    height: 100px;
    width: 200px;
    margin: auto;
    justify-content: center;
    align-items: center;
    display: flex;
}`;

  const inset = `.custom-clip-path { 
    // code ที่เพิ่มเข้ามา
    clip-path: inset(70px 40px 70px 40px);
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
          <title>nuengStory | CSS Trick: Element in center</title>
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
              CSS: กำหนด element เป็นรูปร่างต่างๆด้วย Clip-path
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
              <strong className={Content.Highlight}>Clip-path</strong>เป็น css
              selector ตัวนึงที่น่าสนใจ ความสามารถคือ
              <ul>
                <li>
                  ช่วยตัดแต่ง element หรือ ปรับเปลี่ยน element
                  ให้เป็นรูปร่าง(shape) ต่างๆ ตามแบบที่เราต้องการได้
                </li>
              </ul>
              โดยบทความนี้จะอธิบายเกี่ยวกับพื้นฐานคุณสมบัติ clip-path
              แต่ละแบบว่าใช้งานอย่างไร
            </div>

            <div className={Content.textContent}>
              แต่ก่อนอื่นผมขอใช้ code ส่วนนี้เป็น code
              ตั้งต้นสำหรับใช้งานในบทความ
            </div>

            <div className={Content.textContent}>
              <Code
                className={Content.Code}
                code={cssOriginal}
                language="css"
              />
              <div className={Blog2.OriginalCode}>
                <div>ไล่แล้ว ออกไป!</div>
              </div>
            </div>

            {/* 1 */}
            <div className={Content.textTopic}>Clip-path: Inset()</div>
            <div className={Content.textContent}>
              จะเป็นการซ่อนบางส่วนหรือ crop element
              เข้าไปข้างในรูปภาพตามที่เรากำหนด
            </div>

            <div className={Content.textContent}>
              <Code className={Content.Code} code={inset} language="css" />

              <div className={Blog2.Inset}>
                <div>ไล่แล้ว ออกไป!</div>
              </div>
            </div>

            <div className={Content.textContent}>
              อธิบายได้ว่า มีการกำหนด{" "}
              <strong className={Content.Highlight}>
                clip-path: inset(บน=70px ขวา=40px ล่าง=70px ซ้าย=40px);
              </strong>
              <ul>
                <li>ด้านบนให้ ซ่อน พื้นที่มา 70px</li>
                <li>ด้านขวาให้ ซ่อน พื้นที่มา 40px</li>
                <li>ด้านล่างให้ ซ่อน พื้นที่มา 70px</li>
                <li>ด้านซ้ายให้ ซ่อน พื้นที่มา 40px</li>
              </ul>
              การใช้{" "}
              <strong className={Content.Highlight}>clip-path: inset;</strong>{" "}
              นั้น ไม่ใช่เป็นการ Crop หรือตัดพื้นที่
              แต่เป็นการซ่อน(Hidden)ส่วนที่ต้องการโดย Element
              นั้นยังมีขนาดเท่าเดิม
            </div>

            <div className={Content.textContent}>
              #Trickเล็กน้อย เราสามารถกำหนดขอบมนของ element ได้ด้วยโดยการเพิ่ม
              <Code
                className={Content.Code}
                code={insetWithRound}
                language="css"
              />
              <div className={Blog2.InsetWithRound}>
                <div>ไล่แล้ว ออกไป!</div>
              </div>
              อธิบายได้ว่า มีการกำหนด ขอบมน 20px ให้กับขอบแต่ละด้าน
            </div>

            {/* 2 */}
            <div className={Content.textTopic}>Clip-path: circle()</div>
            <div className={Content.textContent}>
              เป็นการกำหนด clip-path ให้เป็นวงกลม
              <Code className={Content.Code} code={circle} language="css" />
              <div className={Blog2.Circle}>
                <div>ไล่แล้ว ออกไป!</div>
              </div>
            </div>

            <div className={Content.textContent}>
              แต่เราสามารถกำหนดคุณสมบัติเพิ่มเติมได้
              <Code
                className={Content.Code}
                code={circleWithAt}
                language="css"
              />
              <div className={Blog2.CircleWithAt}>
                <div>ไล่แล้ว ออกไป!</div>
              </div>
              อธิยายได้ว่า
              <ul>
                <li>มีการกำหนด clip-path ให้เป็นวงกลมให้มีขนาด 80px</li>
                <li>
                  ส่วนหลัง at …คือให้กำหนดตำแหน่งวงกลมโดย default
                  จะมีตำแหน่งเริ่มต้นอยู่ที่ 0 0 หรือ มุมบนซ้าย
                </li>
                <li>ห่างจากตำแหน่งแกน x มา 100px </li>
                <li>ห่างจากตำแหน่งแกน y มา 50px </li>
              </ul>
            </div>

            {/* 3 */}
            <div className={Content.textTopic}>Clip-path: ellipse()</div>
            <div className={Content.textContent}>
              เราสามารถกำหนดความกว้างและความสูงของ element
              ได้เพื่อให้ผลลัพท์ออกมาเป็นรูปวงรี
              <Code className={Content.Code} code={ellipse} language="css" />
              <div className={Blog2.Ellipse}>
                <div>ไล่แล้ว ออกไป!</div>
              </div>
            </div>
            <div className={Content.textContent}>
                อธิบายได้ว่า
                <ul>
                    <li>กำหนดวงรี ให้ความกว้างเท่ากับ 100px;</li>
                    <li>กำหนดวงรี ให้ความสูงเท่ากับ 50px;</li>
                </ul>
            </div>

            {/* 4 */}
            <div className={Content.textTopic}>Clip-path: polygon()</div>
            <div className={Content.textContent}>
              กำหนดรูปทรงแบบตามใจชอบ หรือจะกำหนดเป็นหลายเหลี่ยมก็ได้
              <Code className={Content.Code} code={polygon} language="css" />
              <div className={Blog2.Polygon}>
                <div>ไล่แล้ว ออกไป!</div>
              </div>
            </div>
            <div className={Content.textContent}>
              อธิบายได้ว่า
              <ul>
                <li>
                  เนื่องจากรูปตั้งต้นเป็นสี่เหลี่ยมก็จะมีจุดมุมอยู่ 4 จุด บนซ้าย
                  บนขวา ล่างซ้าย ล่างขวา จะยึดลำดับตามนี้เมื่อใส่ค่าลงไป
                </li>
                <li>
                  มุมบนซ้าย (50% 0) หมายความว่า เลื่อนแกน x มา 50% (ซ้าย -> ขวา)
                  และ เลื่อนแกน y 0% (บน -> ล่าง)
                </li>
                <li>
                  มุมบนขวา (50% 0) หมายความว่า เลื่อนแกน x มา 50% (ซ้าย -> ขวา)
                  และ เลื่อนแกน y 0% (บน -> ล่าง)
                </li>
                <li>
                  มุมล่างขวา (100% 100%) หมายความว่า เลื่อนแกน x มา 100% (ซ้าย
                  -> ขวา) และ เลื่อนแกน y 100% (บน -> ล่าง)
                </li>
                <li>
                  มุมล่างขวา (100% 100%) หมายความว่า เลื่อนแกน x มา 100% (ซ้าย
                  -> ขวา) และ เลื่อนแกน y 100% (บน -> ล่าง)
                </li>
              </ul>
            </div>

            <div className={Content.textContent}>
                ถ้าต้องการให้ element มีรูปร่าง shape 9k,ตามใจนึกที่ซับซ้อนมากขึ้น ก็จะยิ่งปวดหัวตรงช่อง value ที่ใส่ไป
                แต่อย่างไรก็ตาม ปัญหานั้นจะหมดไป (ไม่ได้ขายตรง!!)  มีเว็บมาแนะนำชื่อว่า 
            <a  className={Content.LinkTag}  href="https://bennettfeely.com/clippy">bennettfeely.com/clipp</a>เราสามารถเข้าไปเลือก clip-path แบบที่เราต้องการได้เลย
            </div>

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
