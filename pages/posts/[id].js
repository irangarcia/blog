import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';

const Post = ({ post }) => {
  console.log(post);
  return (
    <>
      <Head>
        <title>{post.title} | Iran Garcia</title>
      </Head>
      <div className="mt-6">
        <div className="max-w-4xl mx-auto px-10 py-6 bg-white rounded-lg shadow-md">
          <Link href="/">
            <a className="flex justify-between items-center mb-7">← voltar</a>
          </Link>
          <h1 className="leading-10">{post.title}</h1>
          <p className="text-gray-400">
            {post.readable_publish_date} — {post.user.name}
          </p>
          <div>
            <div
              className="pt-1"
              dangerouslySetInnerHTML={{ __html: post.body_html }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const post = await axios
    .get(`https://dev.to/api/articles/${id}`)
    .then((res) => res.data);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return { props: { post } };
}

export default Post;
