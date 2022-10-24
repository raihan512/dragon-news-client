import React from "react";
import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";
import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const News = () => {
  const news = useLoaderData();
  const { rating, total_view, title, author, image_url, details } = news;
  return (
    <Card ard className='mb-3'>
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className='d-flex justify-content-between align-items-center'>
          <Image
            roundedCircle
            className='me-2 '
            src={author.img}
            style={{ height: "60px" }}
          ></Image>
          <div>
            <p className='mb-0'>{author.name}</p>
            <p className='mb-0'>{author.published_date}</p>
          </div>
        </div>
        <div>
          <FaBookmark />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Image
          className='me-2 '
          src={image_url}
          style={{ width: "100%" }}
        ></Image>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
      </Card.Body>
      <Card.Footer className='text-muted d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <FaStar className='text-warning me-2' />
          <span>{rating.number}</span>
        </div>
        <div className='d-flex align-items-center'>
          <FaEye className='text-dark me-2' />
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default News;
