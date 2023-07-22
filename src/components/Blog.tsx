import React from "react";
import { Row } from "react-bootstrap";
// import { connect } from "react-redux";
import SingleCard from "./SingleCard";
import { useSelector } from "react-redux";

const Blogs:React.FC = () => {
  const currentUser:any = useSelector((state) => state);

  return (
    <div className="blog">
      <div className="container ">
        <h1>Editor's picked</h1>
        <h4>Featured and highly rated articles</h4>
        <Row className="g-5 py-5 ">
          {currentUser?.map((item:any, i:number) => {
            return (
              <SingleCard
                key={i}
                ptitle={item.title}
                pphoto={item.photo}
                pdesc={item.desc}
              
              />
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Blogs;
