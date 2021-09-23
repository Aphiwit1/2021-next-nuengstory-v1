import Layout from "../../components/layout";
import Head from "next/head";
import Content from "./content.module.css";
import Blog3 from "./blog3.module.css";
import Code from "../../styles/Code";

import TransitionCover from "../../public/imageCover/TransitionCover.png";
import img1 from "../../public/imageCover/Junior_blog.png";
import img2 from "../../public/imageCover/Team.png";
import imgCover from "../../public/imageCover/blog4_cover.png";
import Image from "next/image";

export default function ClipPath() {
    const htmlOriginal = `<div class="card card--junior">
    <div class="card__theme  card__theme--junior"> J </div>
    <div class="card__name"> Jouior Developer </div>
</div>`;

    const cssOriginal = `.card {
        & {
        max-width: 250px;
        padding:20px;
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Ubuntu', sans-serif;
        border-radius: 5px;
        }
        
        &--junior {
          border:2px solid #f95738; //สีส้ม
        }
      
        &__theme {
          width:40px;
          height:40px;
          font-size: 30px; 
          border-radius: 5px;
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          &--junior {
            background-color: #f95738;
          }
        }
      }`;

    const seniorPoHTML = `<div class="card card--senior" >
      <div class="card__theme  card__theme--senior"> S </div>
    <div class="card__name"> Senior Developer
    </div>
</div>
  
<div class="card card--product-owner" >
      <div class="card__theme card__theme--product-owner"> P </div>
    <div class="card__name"> Product Owner
    </div>
</div>`

    const seniorPoCSS = `.card {
    /*  code ที่เพิ่มเข้ามา */
    &--senior {
        border:2px solid #0091ad; //สีน้ำเงิน
       }

      &--product-owner {
        border:2px solid #90be6d; //สีเขียว
    }

    &__theme { 
        /*  code ที่เพิ่มเข้ามา */
        &--senior {
            background-color: #0091ad; //สีน้ำเงิน
          }
          &--product-owner {
            background-color: #90be6d; //สีเขียว
          }
    }
}`
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
                        content=" ตั้งชื่อ SCSS Class ให้เข้าใจง่ายด้วย BEM Method"
                        key="title"
                    />

                    <meta
                        property="og:image"
                        content="https://dl.dropboxusercontent.com/s/q3hx6gho30ulgzf/blog4_cover.png?dl=0"
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

                        <div className={Content.imgBlogContainer}>
                            {/* <Image alt="blog cover" className={Content.contentImageCover} layout="fill" src="https://dl.dropboxusercontent.com/s/owwafmerbzupwyq/blog1-cover.png?dl=0"  /> */}
                            <Image
                                src={imgCover}
                                alt="BEM Cover Image"
                                width={1200}
                                height={600}
                            />
                        </div>

                        {/* Content */}
                        <div className={Content.textTopicProblem}>
                            เริ่มจากปัญหาที่เจอระหว่าง Coding
            </div>

                        <div className={Content.textContent}>
                            <ul>
                                <li>
                                    ตั้งชื่อ class ตามที่คิดเอง ไม่มี pattern
                                    ทำให้บางครั้งตั้งชื่อซ้ำหรือชื่อคล้ายชื่อ class อื่น
                </li>
                                <li>กลับมาอ่าน code แล้วสับสนว่า class นี้ใช้ที่ไหนได้บ้าง</li>
                                <li>
                                    ไม่กล้าใส่ style เพิ่ม ใน class นั้นเนื่องจากกลัวกระทบจุดอื่น
                </li>
                                <li>
                                    อ่านไฟล์ .scss แล้ว style ซ้อนกันหลายชั้นเกินไป ทำให้อ่านยาก
                </li>
                            </ul>
                        </div>

                        <div className={Content.textTopic}>ลองหาวิธีแก้ไขปัญหา</div>

                        <div className={Content.textContent}>
                            บังเอิญได้เรียน course SCSS จาก Udemy ผู้สอนได้นำ BEM method
                            มาใช้เขียนทำให้รู้สึกว่าเริ่มแรก อาจจะดู งงๆ แต่พอเข้าใจ
                            ทำให้การเขียน SCSS ดูมีระเบียบ และอ่านง่ายขึ้น
                            จึงลองนำมาปรับใช้กับการทำงาน
            </div>

                        <div className={Content.textTopic}>รู้จักกับ BEM method</div>
                        <div className={Content.textContent}>
                            BEM ย่อมาจากคำว่า <b>B</b>lock <b>E</b>lement <b>M</b>odifier
              ซึ่งเป็นรูปแบบ pattern การเขียน SCSS รูปแบบหนึ่ง
            </div>

                        {/* B */}
                        <div className={Content.textTopic}>Block</div>
                        <div className={Content.textContent}>
                            เป็นการตั้งชื่อ class แบบ standalone สื่อความหมายด้วยตัวมันเอง
                            (สั้นๆได้ใจความ) เช่น .btn .card .box เป็นต้น
            </div>

                        <div className={Content.textTopic}>Element</div>
                        <div className={Content.textContent}>
                            เป็นการตั้งชื่อ class ที่อยู่ภายใน Block นั้นๆ ซึ่งสามารถใช้ซ้ำได้
                            เพราะใน block นั้นอ่านมี Element ที่ใช้เหมือนกันอยู่หลายที่ เช่น
                            .card__item, box__item เป็นต้น
            </div>

                        <div className={Content.textContent}>
                            การตั้งชื่อจะเป็น block name + double underscore + element name
            </div>

                        <div className={Content.textTopic}>Modifier</div>
                        <div className={Content.textContent}>
                            เป็นการตั้งชื่อ class ที่ระบุเจาะจงในการใช้งาน โดยเขียนต่อจากชื่อ
                            class ของ block หรือ element เช่น
              <ul>
                                <li>card block มีสีเทา = .card .card--gray</li>
                                <li>
                                    card element แรกเป็นสีเขียว = .card__item .card__item--green
                </li>

                                <li>
                                    card element ที่สองเป็นสีชมพู = .card__item .card__item--pink
                </li>
                            </ul>
                        </div>

                        <div className={Content.textContent}>
                            การตั้งชื่อจะเป็น block name หรือ element name + double dash +
                            modifier name
            </div>

                        <div className={Content.textTopic}>การใช้งานจริง</div>
                        <div className={Content.textContent}>
                            <Code
                                className={Content.Code}
                                code={htmlOriginal}
                                language="html"
                            />
                        </div>

                        <div className={Content.textContent}>
                            <Code
                                className={Content.Code}
                                code={cssOriginal}
                                language="css"
                            />
                        </div>

                        <div className={Content.textContent}>ผลลัพท์</div>

                        <div className={Content.imgBlogContainer}>

                            <Image
                                src={img1}
                                alt="Junior Card Image"
                                width={1200}
                                height={600}
                            />
                        </div>

                        <div className={Content.textTopic}>มี Requirement เพิ่มเติม</div>
                        <div className={Content.textContent}>
                            <ul>
                                <li>ต้องการให้เพิ่ม card สำหรับ Senior และ Product Owner ด้วย</li>
                                <li>โดย card ของ Senior มี theme สีน้ำเงิน</li>
                                <li>และ card ของ Product Owner มี theme สีเขียว</li>
                            </ul>
                        </div>

                        <div className={Content.textContent}>
                            <Code
                                className={Content.Code}
                                code={seniorPoHTML}
                                language="html"
                            />
                        </div>

                        <div className={Content.textContent}>
                            <Code
                                className={Content.Code}
                                code={seniorPoCSS}
                                language="css"
                            />
                        </div>

                        <div className={Content.textContent}>ผลลัพท์</div>

                        <div className={Content.imgBlogContainer}>

                            <Image
                                src={img2}
                                alt="Team Card Image"
                                width={1200}
                                height={500}
                            />
                        </div>



                        <div className={Content.textContent}>
                            เพียงแค่เพิ่ม class ที่เป็น แบบ modifier สำหรับ card อื่นๆ ก็สามารถทำได้แล้ว
                        </div>

                        <div className={Content.textContent}>
                            ทั้งหมดนี้ก็เป็นเรื่องของการใช้งาน BEM method เบื้องต้น ไว้เจอกันใหม่ Blog หน้าครับ
                        </div>




                    </div>
                </div>
            </>
        </Layout>
    );
}
