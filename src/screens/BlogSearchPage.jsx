import { Link } from "react-router-dom";
import PcPerson from "../assets/pc-person.png";
import Navbar from "../components/Navbar";
import Footer from "./sections/Footer";
import Subscribe from "./sections/Subscribe";

const BlogSearchPage = () => {
  const posts = [
    {
      id: 1,
      title: "Isco 2024 Graduation Ceremony",
      author: "John Doe",
      date: "May 23, 2022",
      excerpt:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      category: "Security",
      imageUrl:
        "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg", // Replace with actual image paths
    },
    {
      id: 2,
      title: "Isco 2024 Graduation Ceremony",
      author: "John Doe",
      date: "May 23, 2022",
      excerpt:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      category: "Security",
      imageUrl:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    },
    {
      id: 3,
      title: "Isco 2024 Graduation Ceremony",
      author: "John Doe",
      date: "May 23, 2022",
      excerpt:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      category: "Security",
      imageUrl:
        "https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg",
    },
    {
      id: 1,
      title: "Isco 2024 Graduation Ceremony",
      author: "John Doe",
      date: "May 23, 2022",
      excerpt:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      category: "Security",
      imageUrl:
        "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg", // Replace with actual image paths
    },
    {
      id: 2,
      title: "Isco 2024 Graduation Ceremony",
      author: "John Doe",
      date: "May 23, 2022",
      excerpt:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      category: "Security",
      imageUrl:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    },
    {
      id: 3,
      title: "Isco 2024 Graduation Ceremony",
      author: "John Doe",
      date: "May 23, 2022",
      excerpt:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      category: "Security",
      imageUrl:
        "https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="container mx-auto flex flex-col lg:flex-row items-center justify-between bg-white p-6 lg:p-12 ">
        <div className="lg:w-1/2">
          <h2 className="text-gray-500 text-sm uppercase mb-2">
            Featured Post
          </h2>
          <h1 className="text-3xl font-bold mb-4">
            Isco 2024 Graduation
            <br /> Ceremony.
          </h1>
          <div className="text-gray-600 mb-4">
            <span className="mr-2">
              By{" "}
              <a href="#" className="text-blue-600 hover:underline">
                John Doe
              </a>
            </span>
            <span> | May 23, 2022</span>
          </div>
          <p className="text-gray-600 mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <button className="bg-red-600 text-white py-3 px-8 hover:bg-red-700 transition">
            Read More &gt;
          </button>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <img
            src={PcPerson}
            alt="Person working on a computer"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* blogs list */}
      <section className="bg-[#0b0320] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">All posts</h1>
          <div className="border-b-2 border-t-2 border-white border-opacity-20">
            {posts.map((post) => (
              <div
                key={post.id}
                className="mb-12 flex flex-col lg:flex-row items-start lg:items-center bg-dark-800 p-6 lg:p-8"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full lg:w-1/3 h-auto mb-4 lg:mb-0"
                />
                <div className="lg:ml-6 lg:w-2/3">
                  <span className="text-sm font-bold uppercase text-gray-400 mb-2 block">
                    {post.category}
                  </span>
                  <Link to="..\blog-details">
                    <h2 className="text-4xl font-bold mb-4 hover:text-blue-600 max-w-96">
                      {post.title}
                    </h2>
                  </Link>
                  <div className="text-gray-400 mb-4">
                    <span className="mr-2">
                      By{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        {post.author}
                      </a>
                    </span>
                    <span> | {post.date}</span>
                  </div>
                  <p className="text-gray-400 mb-6">{post.excerpt}</p>
                  {/* <button className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition">
                  Read More &gt;
                </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Subscribe */}
      <Subscribe />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default BlogSearchPage;
