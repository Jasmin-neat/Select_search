import React from "react";
import KnowledgeItem from "./KnowledgeItem";
import FilterOption from "./FilterOption";

const Knowledge: React.FC = () => {
  const knowledgeData = [
    {
      id: 1,
      name: "素材集(アイコン、イラスト)",
      data: "提案書や反訴資料などで利用できる...",
      itemNumber: 12,
      editor: "Name",
      date: "xx years ago",
    },
    {
      id: 2,
      name: "AF2323",
      data: "AF2023関連のリンク集です",
      itemNumber: 12,
      editor: "Name",
      date: "xx years ago",
    },
    {
      id: 3,
      name: "外部ファイルへの交換サイト",
      data: "WebFOCUSサポセンで、ASIS-2の問い...",
      itemNumber: 12,
      editor: "Name",
      date: "xx years ago",
    },
    {
      id: 4,
      name: "哲学と信念やセブンハート(アシストの組織風土/文化)",
      data: "WebFOCUSサポセンで、ASIS-2の問い...",
      itemNumber: 12,
      editor: "Name",
      date: "xx years ago",
    },
    {
      id: 5,
      name: "People who work at SOSHI AI",
      data: "メーカー担当者リスト",
      itemNumber: 12,
      editor: "Name",
      date: "xx years ago",
    },
    {
      id: 6,
      name: "STA関連",
      data: "STA関連のリンク",
      itemNumber: 12,
      editor: "Name",
      date: "xx years ago",
    },
  ];
  return (
    <div className="w-full p-20">
      <div className="flex mb-10">
        <FilterOption />
      </div>

      <div className="flex mb-5 pb-5 border-b-2 font-medium">
        <h1 className="w-80 grow">Name</h1>
        <h1 className="mr-16">Items</h1>
        <h1 className="mr-48">Created by</h1>
        <h1 className="mr-7 text-knowledge-name">Updated</h1>
      </div>
      {knowledgeData.map((knowledgeOne, index) => (
        <KnowledgeItem
          key={knowledgeOne.id}
          name={knowledgeOne.name}
          data={knowledgeOne.data}
          itemNumber={knowledgeOne.itemNumber}
          editor={knowledgeOne.editor}
          date={knowledgeOne.date}
        />
      ))}
    </div>
  );
};

export default Knowledge;
