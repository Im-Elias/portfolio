'use client';

import {
   RiLinkedinFill,
   RiGithubFill,
   RiFacebookFill,
   RiInstagramFill,
} from 'react-icons/ri';
import Link from 'next/link';

const icons = [
   {
      path: '/',
      name: <RiLinkedinFill />,
      path: '/',
      name: <RiGithubFill />,
      path: '/',
      name: <RiFacebookFill />,
      path: '/',
      name: <RiInstagramFill />,
   },
];

const Socials = ({ containerStyles, iconsStyles }) => {
   return <>Socials</>;
};

export default Socials;
