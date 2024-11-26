import React from "react";
import Card from "./Card";

type Props = {};

const Possibilities = (props: Props) => {
  return (
    <section>
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2 className="heading  text-center text-capitalize">
              Mall of: endless possibilities
            </h2>
            <p className="para text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
              consequuntur soluta quidem adipisci nobis sit veritatis dolorem
              ipsa at quae! Molestiae aut corrupti quia voluptatem natus
              pariatur cumque. Odit, veniam!
            </p>
            <video
              width="100%"
              height="auto"
              className="my-4"
              controls
              poster={"/assets/images/thumbnail.png"} // Set the thumbnail as the poster image
            >
              <source
                src={"/assets/images/Flowers - Video Background HD 1080p.mp4"}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Possibilities;
