import React from 'react';
import './example.css';

function Post({ imageUrl, location, openHours, heading, content }) {
  return (
    <article className="post vt-post">
      <div className="row">
        <div className="col-xs-12 col-sm-5 col-md-5 col-lg-4">
          <div className="onebox">
            <a href="#"><img src={imageUrl} className="img-responsive" alt="image post" /></a>
            <div className="author-info author-info-2">
              <ul className="list-inline">
                <li>
                  <div className="info1">
                    <p>Location</p>
                    <strong>{location}</strong>
                  </div>
                </li>
                <li>
                  <div className="info2">
                    <p>Open</p>
                    <strong>{openHours}</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-7 col-md-7 col-lg-8">
          <div className="caption1">
            <h3 className="heading"><a href="#">{heading}</a></h3>
            <p>{content}</p>
            <a className="btn btn-default" href="#" role="button">Read More</a>
          </div>
        </div>
      </div>
    </article>
  );
}

function Container() {
  return (
    <div className="container">
      <div className="decription">
        <Post
          imageUrl="https://bootdey.com/img/Content/avatar/avatar1.png"
          postDate="Mar 21, 2015"
          comments="127"
          heading="The Heading Text Size Should Match"
          content="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
        />
        <div className="clearfix"></div>
      </div>
    </div>
  );
}

export default Container;
