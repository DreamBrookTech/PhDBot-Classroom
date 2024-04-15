import Head from "next/head";

const PageHead = ({ title }) => {
  return (
    <>
      <Head>
        <title>PhDBot Classroom || {title} </title>
        <meta name="description" content="Page Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default PageHead;
