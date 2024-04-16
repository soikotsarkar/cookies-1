// //import Image from "next/image";
// import Link from "next/link";
// export default function Home() {
//   return (
//    <div>
//      <Link href='login'>Login</Link>
//       <br/>
//        <Link href='dashboard'>Dashboard</Link>
//    </div>
//   );
// }
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
      <Link href='/login'>Login</Link>
      <br/>
      <Link href='/dashboard'>Dashboard</Link>
    </div>
  );
};

export default page;
