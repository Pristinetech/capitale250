import Navbar from "../components/Navbar";
import FeaturedArticles from "./sections/FeaturedArticles";
import Footer from "./sections/Footer";
import Subscribe from "./sections/Subscribe";

const BlogDetails = () => {
  const post = {
    title: "Step-by-step guide to choosing great font pairs",
    author: "Joselyn Bizumuremyi",
    date: "Posted on January 27, 2022",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      },
      {
        type: "list",
        items: [
          "Lorem ipsum dolor sit amet",
          "Non blandit massa enim nec scelerisque",
          "Neque egestas congue quisque egestas",
        ],
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg", // Replace with actual image path
  };
  return (
    <>
      <Navbar />
      <section className="bg-[#0b0320] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
              alt={post.author}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-bold">{post.author}</h2>
              <p className="text-sm text-gray-400">{post.date}</p>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
          <div>
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-auto rounded-lg shadow-md mb-8"
            />
          </div>

          <div className="prose prose-lg max-w-6xl text-gray-400 mx-auto">
            {post.content.map((block, index) => {
              if (block.type === "paragraph") {
                return <p key={index}>{block.text}</p>;
              } else if (block.type === "heading") {
                return (
                  <h3
                    key={block.index}
                    className="font-semibold text-4xl text-white mb-10"
                  >
                    {block.text}
                  </h3>
                );
              } else if (block.type === "list") {
                return (
                  <ul key={index} className="list-disc list-inside">
                    {block.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>

      {/* Featured posts */}
      <FeaturedArticles />
      {/* Subscribe */}
      <Subscribe />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default BlogDetails;
