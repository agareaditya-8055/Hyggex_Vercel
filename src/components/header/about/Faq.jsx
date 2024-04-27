// FAQ component for rendering a single FAQ item
const FAQ = ({ title, description, showItems, setShowItems }) => {
  // Function for handling the click event on the FAQ item
  const handleClick = () => {
    setShowItems();
  };

  return (
    // Container for the FAQ item
    <div className="border border-gray-400 rounded-lg w-full my-2.5 p-2.5 cursor-pointer">
      {/* Title of the FAQ item and the icon for expanding/collapsing the item */}
      <div className="flex justify-between ">
        <div className="py-1 flex justify-between " onClick={handleClick}>
          <h3 className="text-xl font-medium ">{title}</h3>
        </div>
        <div>
          {showItems ? (
            <i className={`fa-solid fa-chevron-up`}></i>
          ) : (
            <i className={`fa-solid fa-chevron-down`}></i>
          )}
        </div>
      </div>

      {/* Description of the FAQ item, which is only visible when the item is expanded */}
      {showItems && (
        <p className="border-t border-gray-300 w-full transition-all duration-200 ease-in overflow-hidden py-2.5">
          {description}
        </p>
      )}
    </div>
  );
};

export default FAQ;
