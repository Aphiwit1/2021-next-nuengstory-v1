import Layout from "../../components/layout";
import Head from "next/head";
import Content from "./content.module.css";
import Blog3 from "./blog3.module.css";
import Code from "../../styles/Code";
import ClipPathCover from "../../public/imageCover/Clippath.png";
import TransitionCover from "../../public/imageCover/TransitionCover.png";
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

    const transitionDelay = `.btnClick {
    background-color: white;
    padding: 15px;
    border: 1px solid #2c2c2e;
    width: 100px;

    // code ที่เพิ่มเข้ามา
    transition-property: background-color, color, width;
    transition-duration: 1s, 1s, 1s; 
    transition-delay: 0s, 0s, 1s;
  }`;

    const transitionFunction = `.btnClick {
        background-color: white;
        padding: 15px;
        border: 1px solid #2c2c2e;
        width: 100px;

        // code ที่เพิ่มเข้ามา
        transition-property: background-color, color, width;
        transition-duration: 1s, 1s, 1s;
        transition-delay: 0s, 0s, 1s;
        transition-timing-function: ease-in;
    }
    .btnClick:hover {
        background-color: #2c2c2e;
        width: 400px;
        color: white;
        cursor: pointer
    }`;

    const transitionShortHand = `.btnClick {
        background-color: white;
        padding: 15px;
        border: 1px solid #2c2c2e;
        width: 100px;

        // code ที่เพิ่มเข้ามา
        transition: background-color 1s 0s ease-in, color 1s 0s ease-in, width 1s 1s ease-in;
    }`;
    return (
        <Layout>
            <>
                <Head>
                    <title>nuengStory | BEM method</title>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                    <meta
                        property="og:title"
                        content="Control Animation ได้ง่ายๆ ด้วย CSS Transition"
                        key="title"
                    />

                    <meta
                        property="og:image"
                        content="https://dl.dropboxusercontent.com/s/2e6tlrbnuvxp1ff/TransitionCover.jpg?dl=0"
                        key="ogimage"
                    />
                </Head>
                {/* content */}
                <div className={Content.blogContentContainer}>
                    {/* toptic */}
                    <div>
                        <div className={Content.textHeader}>
                            ตั้งชื่อ SCSS Class ให้เข้าใจง่าย<br></br>ด้วย BEM Method
                     </div>

                        {/* Content */}
                        <div className={Content.textTopicProblem}>ปัญหาที่เจอตอน Coding</div>



                        <div className={Content.textContent}>
                            <ul>
                                <li>ตั้งชื่อ class ตามที่คิดเอง ไม่มี pattern ทำให้บางครั้งตั้งชื่อซ้ำหรือชื่อคล้ายชื่อ class อื่น</li>
                                <li>กลับมาอ่าน code แล้วสับสนว่า class นี้ใช้ที่ไหนได้บ้าง</li>
                                <li>ไม่กล้าใส่ style เพิ่ม ใน class นั้นเนื่องจากกลัวกระทบจุดอื่น</li>
                                <li>อ่านไฟล์ .scss แล้ว style ซ้อนกันหลายชั้นเกินไป ทำให้อ่านยาก</li>
                            </ul>
                        </div>

                        <div className={Content.textTopic}>ลองหาวิธีแก้ไขปัญหา</div>


                        <div className={Content.textContent}>
                            บังเอิญได้เรียน course SCSS จาก Udemy  ผู้สอนได้นำ BEM method มาใช้เขียนทำให้รู้สึกว่าเริ่มแรก อาจจะดู งงๆ แต่พอเข้าใจ ทำให้การเขียน SCSS ดูมีระเบียบ
                            และอ่านง่ายขึ้น จึงลองนำมาปรับใช้กับการทำงาน
            </div>


                        <div className={Content.textTopic}>รู้จักกับ BEM method</div>
                        <div className={Content.textContent}>
                            BEM ย่อมาจากคำว่า <b>B</b>lock <b>E</b>lement <b>M</b>odifier ซึ่งเป็นรูปแบบ pattern การเขียน SCSS รูปแบบหนึ่ง
                        </div>

                        {/* B */}
                        <div className={Content.textTopic}>Block</div>
                        <div className={Content.textContent}>
                            เป็นการตั้งชื่อ class แบบ standalone สื่อความหมายด้วยตัวมันเอง (สั้นๆได้ใจความ) เช่น .btn .card .box เป็นต้น
                        </div>

                        <div className={Content.textTopic}>Element</div>
                        <div className={Content.textContent}>
                            เป็นการตั้งชื่อ class ที่อยู่ภายใน Block นั้นๆ ซึ่งสามารถใช้ซ้ำได้ เพราะใน block นั้นอ่านมี Element ที่ใช้เหมือนกันอยู่หลายที่
                            เช่น .card__item, box__item เป็นต้น
                        </div>

                        <div className={Content.textContent}>
                            การตั้งชื่อจะเป็น block name + double underscore + element name
                        </div>

                        <div className={Content.textTopic}>Modifier</div>
                        <div className={Content.textContent}>
                            เป็นการตั้งชื่อ class ที่ระบุเจาะจงในการใช้งาน โดยเขียนต่อจากชื่อ class ของ  block หรือ element เช่น
                            <ul>
                                <li>
                                    card block มีสีเทา = .card  .card--gray
                                </li>
                                <li>
                                    card element แรกเป็นสีเขียว = .card__item .card__item--green
                                </li>

                                <li>
                                    card element ที่สองเป็นสีชมพู = .card__item .card__item--pink
                                </li>
                            </ul>

                        </div>

                        <div className={Content.textContent}>
                            การตั้งชื่อจะเป็น block name หรือ element name + double dash + modifier name
                        </div>

                        <div className={Content.textTopic}>การใช้งานจริง</div>
                        <div className={Content.textContent}>
                            .....
                        </div>


                        <div className={Content["textContent"] + " " + Content["pt50"]}>
                            <div className={Content["textSource"]}>
                                <strong>ข้อมูลอ้างอิงจาก: </strong>
                https://www.w3schools.com/css/css3_transitions.asp
              </div>
                            <div className={Content["textSource"]}>
                                <strong>ข้อมูลอ้างอิงจาก: </strong>
                https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
              </div>
                        </div>
                    </div>
                </div>
            </>
        </Layout>
    );
}
