import Post from './post';

const Content = ({ posts }) => {
  return (
    <div className="w-full md:w-5/6 lg:w-full mt-5">
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Content;
