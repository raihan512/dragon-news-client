import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { title, image_url, details, _id, author, rating, total_view } = news;
  return (
    <Card className='mb-3'>
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
        <Card.Img variant='top' src={image_url} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details.length > 250 ? (
            <p>
              {details.slice(0, 250) + "..."}{" "}
              <Link to={`/news/${_id}`}>Read More</Link>
            </p>
          ) : (
            details
          )}
        </Card.Text>
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

export default NewsSummaryCard;
