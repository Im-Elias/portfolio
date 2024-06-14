import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
   return (
      <div className={`${containerStyles}`}>
         <Image src={imgSrc} fill priority sizes="auto" alt="Yo" />
      </div>
   );
};

export default DevImg;
