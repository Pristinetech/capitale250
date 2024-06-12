import ArticleCard from "../../components/ArticleCard";

const FeaturedArticles = () => {
  const articles = [
    {
      id: 1,
      author: "John Doe",
      date: "Aug 23, 2021",
      title: "A UX Case Study Creating a Studious Environment for Students:",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      imageUrl:
        "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg", // replace with the path to your image
    },
    {
      id: 2,
      author: "John Doe",
      date: "Aug 23, 2021",
      title: "A UX Case Study Creating a Studious Environment for Students:",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      imageUrl:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg", // replace with the path to your image
    },
    {
      id: 3,
      author: "John Doe",
      date: "Aug 23, 2021",
      title: "A UX Case Study Creating a Studious Environment for Students:",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      imageUrl:
        "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg", // replace with the path to your image
    },
  ];

  return (
    <div className="bg-[#0b0320]">
      <div className="container mx-auto text-white p-8">
        <h2 className="text-3xl font-bold mb-8">What to read next</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticles;
