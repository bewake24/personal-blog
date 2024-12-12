import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config.js";
import { truncateText } from "../../utils";

function PostCard({ $id, title, content, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full  rounded-md shadow-xl border border-gray-200 p-4 hover:border-blue-200  hover:shadow-blue-300 ">
        <div className="w-full justify-center mb-4 ">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-md w-full aspect-[16/10] object-cover object-center "
          />
        </div>
        <h2 className="text-lg font-semibold">{truncateText(title, 40)}</h2>
        <p className="text-sm text-justify">{truncateText(content, 220)}</p>
      </div>
    </Link>
  );
}

export default PostCard;
