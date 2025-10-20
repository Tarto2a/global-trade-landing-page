import { Image } from "./image";
import React, { useState } from "react";

export const Gallery = (props) => {
  const [expanded, setExpanded] = useState(false);

  const images = props.data || [];
  const visibleImages = expanded ? images : images.slice(0, 3);

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Products</h2>
          <p>
            See What We’ve Been Working On <br />
            Real products traded with care and delivered on time.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {visibleImages.length > 0
              ? visibleImages.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
        {images.length > 3 && (
          <div style={{ marginTop: "20px" }}>
            <button
              className="btn btn-custom"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};