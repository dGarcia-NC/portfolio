import { DiReact, DiPython, DiCode } from "react-icons/di";
import { BsChatText } from "react-icons/bs";
import { GradientLineLR, GradientTD } from "@/utils/GradientLine";
import styled from "styled-components";
import InfoHeader from "./Header";

const TitleText = styled.div`
  display: flex;
  font-weight: 400;
  height: 1.2rem;
  align-items: center;
  justify-content: center;
`

const Description = styled.div`
  display: flex;
  font-weight: 300;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  text-align: center;
  font-size: small;
`

export default function Services() {
  return (
    <>
      <InfoHeader header="My Services" />
      <GradientLineLR />
      <div className="flex flex-row mt-6">
        <div className="w-1/2 h-44">
          <DiReact className="h-1/3 w-[100%]" />
          <TitleText>Frontend Development</TitleText>
          <Description>
          {`Frontend experience, particularly with React \
            and TypeScript, enabling me to build dynamic and responsive user interfaces. My skill set combines these technologies to deliver robust \
            and engaging front-end solutions.`}
          </Description>
        </div>
        <GradientTD />
        <div className="w-1/2 h-44">
          <DiPython className="flex justify-center items-center h-1/3 w-[100%]" />
          <TitleText>Backend Development</TitleText>
          <Description>
            {`I have backend experience, having worked \
              with languages such as Express.js, Python, and Golang to develop \
              scalable and efficient server-side applications.`}
          </Description>
        </div>
      </div>

      <div className="flex flex-row mt-12 ">
        <div className="w-1/2 h-44">
          <DiCode className="flex justify-center items-center h-1/3 w-[100%]" />
          <TitleText>QA Engineering</TitleText>
          <Description>
            {`I have a solid foundation in QA engineering, having utilized languages like \
            JavaScript, Java, Selenium, and Python to perform thorough testing and ensure \
            the quality and reliability of software applications.`}
          </Description>
        </div>
        <GradientTD />
        <div className="w-1/2 h-44">
          <BsChatText className="flex justify-center items-center h-1/3 w-[100%]" />
          <TitleText>Team Lead</TitleText>
          <Description>
            {`I have a proven track record of successfully managing Agile-based QA teams, \
            ensuring efficient collaboration and delivery of high-quality software.`}
          </Description>
        </div>
      </div>
    </>
  )
}
