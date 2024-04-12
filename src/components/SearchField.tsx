import React from "react";

const SearchField: React.FC = () => {
  return (
    <div className="">
      <input
        type="text"
        placeholder="なんでも質問を入力してください！"
        className="container p-5 border rounded-search-field"
      />
    </div>
  );
};
export default SearchField;
