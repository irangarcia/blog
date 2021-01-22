import Link from 'next/link';
import axios from 'axios';

const HomePage = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id} className="mt-6">
            <div className="max-w-4xl mx-auto px-10 py-6 bg-white dark: rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <span className="font-light dark:text-white text-gray-600">
                  {post.readable_publish_date}
                </span>
              </div>
              <div className="mt-2">
                <Link href={`/posts/${post.id}`}>
                  <a className="text-2xl text-gray-700 dark:text-white font-bold hover:underline">
                    {post.title}
                  </a>
                </Link>
                <p className="my-2 text-gray-600">{post.description}</p>
              </div>
              {/* {post.tag_list.map((tag) => {
                return (
                  <a
                    href="#"
                    className="text-xs mr-1 px-2 py-1 bg-gray-600 text-gray-100 rounded inline hover:bg-gray-500"
                  >
                    {tag}
                  </a>
                );
              })} */}

              <div className="flex justify-between items-center mt-4">
                <Link href={`/posts/${post.id}`}>Ler mais..</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export async function getServerSideProps() {
  const posts = await axios
    .get(`https://dev.to/api/articles`, {
      params: {
        username: 'irangarcia',
      },
    })
    .then((res) => res.data);

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return { props: { posts } };
}

export default HomePage;
