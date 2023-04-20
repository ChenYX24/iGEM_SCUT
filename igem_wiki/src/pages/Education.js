import NavBar from "../components/NavBar"
import SideNav from "../components/SideNav"
import Swiper from "../components/Swiper"
import EducationCss from "../css/Education.module.css"

function Education () {
  let NavData = [{ id: 0, text: 'Overview', isActive: true }, { id: 1, text: 'syntheticBiology', isActive: false }, { id: 2, text: 'questionnaireAnalysis', isActive: false },]

  return (
    <>
      <NavBar />
      <div className={EducationCss.container}>
        <div className={EducationCss.backgroundImg}></div>
        <h1 className={EducationCss.title}>Education</h1>
        <div className={EducationCss.waveContainer}>
          {/*海浪*/}
          <svg className={EducationCss.waves} viewBox="0 24 150 28" preserveAspectRatio="none"
            shape-rendering="auto">
            <defs>
              <path id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className={EducationCss.parallax}>
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
          <div className={EducationCss.filling}>
          </div>
        </div>
        <div className={EducationCss.articleContainer}>
          <div className={EducationCss.topContainer} id="Overview">
            <h2 >Overview</h2>
            <p>{overviewContent}</p>
          </div>
          <div className={EducationCss.midContainer} id="syntheticBiology">
            <div className={EducationCss.leftBox1} >
              <h2 >Synthetic biology</h2>
              <p>{syntheticBiologyContent1}</p>
              <br></br>
              <p>{syntheticBiologyContent2}</p>
            </div>
            <div className={EducationCss.rightBox1}>
              <Swiper images={[
                require('../assets/education/edu1.jpg'),
                require('../assets/education/edu2.jpg'),
                require('../assets/education/edu3.jpg'),
                require('../assets/education/edu4.jpg'),
                require('../assets/education/edu5.jpg')
              ]} />
            </div>
            <div className={EducationCss.leftBox2}>
              <Swiper images={[
                require('../assets/education/edu6.jpg'),
                require('../assets/education/edu7.jpg'),
                require('../assets/education/edu8.jpg'),
                require('../assets/education/edu9.jpg'),
                require('../assets/education/edu10.jpg')
              ]} />
            </div>
            <div className={EducationCss.rightBox2}>
              <p>{syntheticBiologyContent3}</p>
            </div>
            <div className={EducationCss.leftBox3}>
              <p>{syntheticBiologyContent4}</p>
              <br></br>
              <p>{syntheticBiologyContent5}</p>
              <br></br>
              <p>{syntheticBiologyContent6}</p>
            </div>
            <div className={EducationCss.rightBox3}>
              <Swiper images={[
                require('../assets/education/edu11.jpg'),
                require('../assets/education/edu12.jpg'),
                require('../assets/education/edu13.jpg'),
                require('../assets/education/edu14.jpg'),
                require('../assets/education/edu15.jpg')
              ]} />
            </div>
          </div>
          <div className={EducationCss.bottomContainer} id="questionnaireAnalysis">
            <h2>Questionnaire analysis</h2>
            <div className={EducationCss.box}>
              <p>{questionnaireAnalysis1}</p><br />
              <p>{questionnaireAnalysis2}</p><br />
              <p>{questionnaireAnalysis3}</p><br />
            </div>
            <div className={EducationCss.box}>
              <p>{questionnaireAnalysis4}</p><br />
              <p>{questionnaireAnalysis5}</p><br />
              <p>{questionnaireAnalysis6}</p><br />
            </div>
            <div className={EducationCss.box}>
              <p>{questionnaireAnalysis7}</p><br />
              <p>{questionnaireAnalysis8}</p><br />
              <p>{questionnaireAnalysis9}</p><br />
            </div>
          </div>
        </div>
        <SideNav data={NavData} />
      </div>
    </>
  )
}
export default Education


const overviewContent = 'In the education system of most Chinese schools, the concept of synthetic biology is not familiar to high\n' +
  'school students. The best way to promote this concept is to attach it to existing research and present the\n' +
  'genetics editing bit by bit. Based on this hypothesis, SCUT-China consulted some biology teachers in high\n' +
  'school and middle school and decided to mainly focus on education in senior high school. At the same\n' +
  'time, wet lab members collected some educational material from our laboratory (such as plasmid maps,\n' +
  'photos, and videos) to better display the real research in labs. At the end of every lecture, we handed out\n' +
  'a questionnaire to collect feedback for further optimization of our education part and our research. The\n' +
  'details are presented as follows.'

const syntheticBiologyContent1 = 'After poring over the high school biology textbook and interviewing high school\n' +
  'teachers, we decided to design a class focused on introducing genetic engineering.\n' +
  'This field would be perfect for students preparing for the biology exam in the\n' +
  'College Entrance Examination (Chinese Gao Kao) and is also closely related to our\n' +
  'experiments in molecular biology and the initial stages of our project. After gaining\n' +
  'permission from The High School Affiliated to Zhejiang University (Hangzhou,\n' +
  'China) and The No.1 High School of Jiangyong County (Jiangyong, China), we\n' +
  'conducted the lecture on January 12, 2023, for five classes in grades 3 and 2\n' +
  '(equivalent to K12 and K11 in the United States).'

const syntheticBiologyContent2 = 'Our class was designed as a step-by-step exploration of our project. We presented\n' +
  'the general background of our project and guided students to think about how to\n' +
  'choose bacteria, insert the gene of interest, and optimize the outcome. Through\n' +
  'this process, students developed a general impression of our project.'

const syntheticBiologyContent3 = 'During the introduction of our project, we also explained the technology and\n' +
  'protocols involved in our real research, such as PCR, Gibson Assembly, and\n' +
  'transmission. This not only showcased our real wet lab work as iGEMers but also\n' +
  'expanded their high school learning beyond the limited knowledge and\n' +
  'experiments of molecular biology and lab work they were exposed to. We\n' +
  'introduced scientific instruments and how they work, as well as the protocols we\n' +
  'applied in our lab. We also presented the necessary parts of our plasmid, guiding\n' +
  'them to draw an integrative plasmid and leading to a discussion of "synthetic\n' +
  'biology." Students were curious and delighted to receive this knowledge and\n' +
  'engaged in frequent interaction with the narrator, coming up with related\n' +
  'questions afterwards.'

const syntheticBiologyContent4 = 'We also introduced the iGEM competition and the major of biotechnology to them,\n' +
  'as they were at the stage of picking colleges and majors of their interests. We\n' +
  'explained the iGEM engineering cycle to illustrate how to conduct scientific\n' +
  'research. In the feedback, many students found that this helped them a lot in\n' +
  'understanding scientific research and progress.'

const syntheticBiologyContent5 = 'Finally, we played a video made by one of our team members, showing the real\n' +
  'daily routine of students majoring in biology as iGEMers. This video had been\n' +
  'previously praised by the teachers at that school, and some students were inspired\n' +
  'to learn more about the competition and biology major.'

const syntheticBiologyContent6 = 'At the end of the lecture, we handed out our questionnaire and answered their\n' +
  'questions. For other classes that were happening simultaneously and that we\n' +
  'couldn\'t attend in person, we made a recording in advance. All pictures were taken\n' +
  'by random students and teachers who volunteered, and we really appreciate their\n' +
  'support.'

const questionnaireAnalysis1 = 'We set questions about the public knowledge, public concern, public expectations over synthetic biology and biotechnology. The\n' +
  'questionnaires are handed out after the lecture, and we receive 175 sheets in total. Here are the results.'

const questionnaireAnalysis2 = 'The first question is ‘do you hear about the concept of “synthetic biology” for the\n' +
  'first time?’. According to the answer we collected, most students do not\n' +
  'understand the concept of synthetic biology (synbio), but they do know about\n' +
  'some applications of synbio. There are about 18% students who know about\n' +
  'synthetic biology, and internet contributes to most of them.'

const questionnaireAnalysis3 = 'Among all the fields we had listed, vaccine and pharmaceutics gathers most of\n' +
  'the interest here (above 20% of students). The environment and manufacture\n' +
  'attracts approximately 13% of those students.'

const questionnaireAnalysis4 = 'Though most of the students lacks of some knowledge about synthetic biology before, the lecture aroused their thinking over this\n' +
  'topic. When asked ‘What is the most important factor to be focused on in developing synthetic biology?’, students consider\n' +
  'biosafety the greatest factor among what we listed, followed by technology and application prospects. This consensus fits our\n' +
  'initial concern when we chose our project.'

const questionnaireAnalysis5 = 'However, during understanding the concept, students have their thinking over the potential obstacles. More than 38% of students\n' +
  'think that the biotechnology still has long way to be developed to cope with existing problems. At the same time, they are\n' +
  'concerned about the high cost of developing synthetic biology and the biosafety issue in it. There’re still 12% of students think\n' +
  'that the practicability of some technology is still unclear. That corresponds with the uncertainty of utilizing micromanufacturing at\n' +
  'industrial level nowadays. If we want to solve existing problem on earth, simply doing fermentation in labs is not enough, it\n' +
  'requires further research over both mechanism and applications. Their thinking inspired us a lot.'

const questionnaireAnalysis6 = 'Though they do have concern about synthetic biology and biotechnology, they are still convinced that synthetic biology and\n' +
  'related products will one day become popular and change our lives.'

const questionnaireAnalysis7 = 'Our final question is about their personal opinions over synthetic biology. We are really delighted to see there are about 12% of\n' +
  'those students get inspired to consider biology as their potential future career. Meanwhile, there are approximately 62% of those\n' +
  'students want to discover more about biotechnology and synthetic biology. These statistics generally announced the success of\n' +
  'our educational lecture in 2023.1.12.'

const questionnaireAnalysis8 = 'We also provided a blank space for the students to share any specific ideas, feelings, or advice with us regarding our project and\n' +
  'educational efforts. Most of the comments were appreciation and encouragement. We also received some genuine suggestions,\n' +
  'such as the need to address technical issues in the recorded video and the requirement for further explanation of some academic\n' +
  'concepts for high school students.'

const questionnaireAnalysis9 = 'We will incorporate every valuable feedback we received in our future activities. In general, we consider this educational activity a\n' +
  'success and a foundation for our education part.'