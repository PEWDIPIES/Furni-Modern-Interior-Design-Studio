import React from "react";

const Ourblog = () => {
	const obj = [
		{
		  img: "/src/assets/images/post-1.jpg",
		  tittle: "Top Tips for First-Time Home Buyers", // changed tittle wording
		  desc: "by Kristin Watson on Dec 19, 2025", // changed desc wording
		},
		{
		  img: "/src/assets/images/post-2.jpg",
		  tittle: "How to Decorate Your New Home Like a Pro", // changed tittle wording
		  desc: "by John Doe on Jan 5, 2026", // changed desc wording
		},
		{
		  img: "/src/assets/images/post-3.jpg",
		  tittle: "Budget-Friendly Home Renovation Ideas", // changed tittle wording
		  desc: "by Emily Clark on Feb 10, 2026", // changed desc wording
		},
		{
		  img: "/src/assets/images/post-1.jpg",
		  tittle: "Must-Know Tips for Selling Your First Home", // changed tittle wording
		  desc: "by Michael Lee on Mar 15, 2026", // changed desc wording
		},
		{
		  img: "/src/assets/images/post-2.jpg",
		  tittle: "Common Mistakes to Avoid as a First-Time Home Owner", // changed tittle wording
		  desc: "by Sarah Adams on Apr 20, 2026", // changed desc wording
		},
		{
		  img: "/src/assets/images/post-3.jpg",
		  tittle: "Creating a Home Office in Your First Home", // changed tittle wording
		  desc: "by James Brown on May 12, 2026", // changed desc wording
		},
	  ];
	  

  return (
    <div>
      <div className="blog-section">
        <div className="container">
          <div className="row">
            {
              obj.map((elem, index) => {
                return (
                  <div key={index} className="col-12 col-sm-6 col-md-4 mb-5">
                    <div className="post-entry">
                      <a href="#" className="post-thumbnail">
                        <img
                          src={elem.img}
                          alt={elem.tittle}
                          className="img-fluid" // Corrected className
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
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourblog;
