import React from "react";

const ArticleLoader = () => {
  return (
    <div className="mb-3">
      {Array(4)
        .fill()
        .map((_, index) => (
          <ArticleItemSkeleton key={index} />
        ))}
    </div>
  );
};

function ArticleItemSkeleton() {
  return (
    <div className="d-flex align-items-start border-bottom pb-3 mb-3">
      {/* Thumbnail */}
      <div
        className="me-3 flex-shrink-0 rounded bg-secondary bg-opacity-25 placeholder-glow"
        style={{ width: "80px", height: "64px" }}
      ></div>

      <div className="flex-grow-1">
        {/* Title text with right alignment */}
        <div className="d-flex justify-content-end mb-2">
          <div
            className="rounded bg-secondary bg-opacity-25 placeholder-glow"
            style={{ height: "16px", width: "83%" }}
          ></div>
        </div>

        {/* Subtitle text with right alignment */}
        <div className="d-flex justify-content-end mb-3">
          <div
            className="rounded bg-secondary bg-opacity-25 placeholder-glow"
            style={{ height: "16px", width: "75%" }}
          ></div>
        </div>

        {/* Date indicator */}
        <div className="d-flex justify-content-end align-items-center">
          <div
            className="rounded bg-secondary bg-opacity-25 placeholder-glow me-2"
            style={{ height: "20px", width: "20px" }}
          ></div>
          <div
            className="rounded bg-secondary bg-opacity-25 placeholder-glow"
            style={{ height: "16px", width: "100px" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ArticleLoader;
