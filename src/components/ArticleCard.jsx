import PropTypes from "prop-types";

const ArticleCard = ({ article }) => {
  return (
    <div className="p-4 rounded-lg">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div className="text-sm text-gray-400">
        By <span className="text-red-500">{article.author}</span> |{" "}
        {article.date}
      </div>
      <h3 className="text-lg font-semibold mt-2 mb-2">{article.title}</h3>
      <p className="text-gray-400">{article.description}</p>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleCard;
