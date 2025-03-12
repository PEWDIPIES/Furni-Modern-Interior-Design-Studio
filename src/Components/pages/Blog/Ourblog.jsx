import React from "react";

const Ourblog = () => {
  const obj = [
    {
      img: "/assets/images/post-1.jpg", // updated path
      tittle: "Top Tips for First-Time Home Buyers",
      desc: "by Kristin Watson on Dec 19, 2025",
    },
    {
      img: "/assets/images/post-2.jpg", // updated path
      tittle: "How to Decorate Your New Home Like a Pro",
      desc: "by John Doe on Jan 5, 2026",
    },
    {
      img: "/assets/images/post-3.jpg", // updated path
      tittle: "Budget-Friendly Home Renovation Ideas",
      desc: "by Emily Clark on Feb 10, 2026",
    },
    {
      img: "/assets/images/post-1.jpg", // updated path
      tittle: "Must-Know Tips for Selling Your First Home",
      desc: "by Michael Lee on Mar 15, 2026",
    },
    {
      img: "/assets/images/post-2.jpg", // updated path
      tittle: "Common Mistakes to Avoid as a First-Time Home Owner",
      desc: "by Sarah Adams on Apr 20, 2026",
    },
    {
      img: "/assets/images/post-3.jpg", // updated path
      tittle: "Creating a Home Office in Your First Home",
      desc: "by James Brown on May 12, 2026",
    },
  ];

  return (
    <div>
      <div className="blog-section">
        <div className="container">
          <div className="row">
            {obj.map((elem, index) => {
              return (
                <div key={index} className="col-12 col-sm-6 col-md-4 mb-5">
                  <div className="post-entry">
                    <a href="#" className="post-thumbnail">
                      <img
                        src={elem.img}
                        alt="ourblogimages"
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-content-entry">
                      <h3>
                        <a href="#">{elem.tittle}</a>
                      </h3>
                      <div className="meta">{elem.desc}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourblog;
