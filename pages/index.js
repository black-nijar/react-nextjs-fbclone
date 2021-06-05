import { getSession } from "next-auth/client";
import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import Posts from "../components/Posts";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />

      <main className="flex">
        {/* Sidebar */}
        <SideBar />
        <Feed />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get user
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
