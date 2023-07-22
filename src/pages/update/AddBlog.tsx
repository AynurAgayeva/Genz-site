import React from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BlogForm from "../../components/admin/BlogForm";
import {  addBlogToDatabase } from "../../manager/actions/blogAction";

const AddBlog = (props:any) => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#0f172a", color: "#94a9c9" }}>
      <h1 className="text-center">Add Blog</h1>
      <BlogForm
        blogEdit={null}
        blogSubmit={(items:any) => {
          console.log(items)
          props.dispatch(addBlogToDatabase(items));
          navigate("/dashboard");

            window.location.reload();
        }}
      />
    </div>
  );
};
export default connect()(AddBlog);