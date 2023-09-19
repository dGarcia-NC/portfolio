import Image from "next/image";
import styled from "styled-components";
import profile_photo from '../../../public/images/me.png'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import Name from "./Name";


const Card = styled.div`
  /* display: flex; */
  height: 100%;
  max-width: 480px;
  background-color: white;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  box-shadow: 3px 3px 6px 6px rgba(0,0,0,0.06);
`

export default function Person() {
  return (
    <Card>
      <div>
        <Image
          src={profile_photo}
          style={{
            height: '30%',
            width: '100%',

          }}
          priority={true}
          alt="Picture of the Person"
        />
      </div>
      <Name />
      <div className="font-serif h-1/7 mt-5 text-xl flex justify-center text-[#78CC6D]">Full Stack Web Developer</div>
      <div className="flex justify-center items-center h-1/9 mt-5 text-[#646464]">
        <AiFillGithub className='h-10 w-10' />
        <AiFillLinkedin className='ml-3 h-10 w-10' />
        <FaHashnode className='ml-3 h-10 w-8' />
      </div>
      <div className="flex mt-3 h-1/5 items-stretch text-lg text-[#323232]">
        <div className="flex justify-center w-1/2 items-end">DOWNLOAD CV</div>
        <div className="flex justify-center w-1/2 items-end ">CONTACT ME</div>
      </div>
    </Card>
  )
}
