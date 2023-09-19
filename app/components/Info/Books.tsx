import styled from "styled-components"
import Image from "next/image"
import SoftwareArchitecture from '../../../public/images/Software Architecture.jpeg'
import DDD from '../../../public/images/DDD.jpeg'
import SD from '../../../public/images/SD.jpg'
import EQ from '../../../public/images/EQ.jpg'
import JSGP from '../../../public/images/JSGP.jpg'
import APIA from '../../../public/images/APIA.jpg'
import IAPI from '../../../public/images/IAPI.jpg'

const SpaceEvenly = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
`

const ImageStyle = {
  marginTop: '10px'
}

export default function BooksIAmReading() {
  return (
    <SpaceEvenly>
        <Image
          src={SoftwareArchitecture}
          width={200}
          height={200}
          alt='Picture of the book'
        />
        <Image
          src={DDD}
          width={200}
          height={200}
          alt="Picture of the book"
        />
        <Image
          src={SD}
          width={200}
          height={200}
          alt="Picture of the book"
        />
        <Image
          src={APIA}
          width={200}
          height={200}
          alt="Picture of the book"
          style={ImageStyle}
        />
        <Image
          src={IAPI}
          width={200}
          height={200}
          alt="Picture of the book"
          style={ImageStyle}
        />
        <Image
          src={EQ}
          width={200}
          height={200}
          alt="Picture of the book"
          style={ImageStyle}
        />
        <Image
          src={JSGP}
          width={200}
          height={200}
          alt="Picture of the book"
          style={ImageStyle}
        />
    </ SpaceEvenly>
  )
}
