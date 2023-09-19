import { GradientTD } from "@/utils/GradientLine";
import UserDescription from "./UserDescription";
import Facts from "./UserFacts";
import InfoHeader from "./Header";
import Services from "./Services";
import BooksIAmReading from "./Books";

export default function InfoCard() {
  return (
    <div className="bg-white h-4/5 w-6/12 rounded-r flex flex-col snap-smooth overflow-y-auto	">
      <InfoHeader header="About Me" />
      <div className="flex flex-row h-36 text-xs tracking-wide">
        <UserDescription />
        <GradientTD />
        <Facts />
      </div>
      <hr />
      <Services />
      <hr />
      <InfoHeader header="Books I'm Reading" />
      <BooksIAmReading />
    </div >
  )
}
