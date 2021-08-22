import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";


export default function Header({  ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Salbi Mohamed- Software Engineer, Creator ",
    description: `I'm currently Studying at ENSIAS. Get in touch with me to know more.`,
    image: "/VulTure.png",
    type: "http://salbi.me",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        
        <meta
          property="og:url"
          content={`https://salbi.me${router.asPath}`}
        />
{/*           
        <link
         rel='icon' href='VulTure.png' sizes="50x50" type="image/png"
         />         */}
         <link rel="apple-touch-icon" sizes="180x180" href="VulTure.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="VulTure.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="VulTure.png" />
        <link
          rel="canonical"
          href={`https://salbi.me${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Salbi Mohamed " />
        <meta name="robots" content="follow, index" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:site" content="@MohamedSalbi" />
        <meta name="github:site" content="vulture990" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {/* {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )} */}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        {/* <Navbar /> */}
        {/* <div>{children}</div> */}
        {/* <Footer /> */}
      </main>
    </div>
  );
}