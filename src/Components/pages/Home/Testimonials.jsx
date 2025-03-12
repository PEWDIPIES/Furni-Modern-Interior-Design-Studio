import React from "react";

const Testimonials = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide text-center carousel-dark"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="rounded-circle shadow-1-strong mb-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjKTW6TzQegnbo0bSeas0BlhdIcoB6W9eIIURuef0yLp-vS9c39t0ue9ytKBijutFlLZE&usqp=CAU"
              alt="avatar"
              style={{ width: "120px" }}
            />
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h5 className="mb-3">John Doe</h5>
                <p>Photographer</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  "John Doe is a talented and passionate photographer with over
                  10 years of experience in capturing stunning visuals across
                  various genres, including portrait, landscape, and event
                  photography. Known for his creative eye and meticulous
                  attention to detail, John has worked with a wide range of
                  clients, from individual portraits to large-scale commercial
                  projects. He has a unique ability to bring out the personality
                  of his subjects and capture moments in their most authentic
                  form. His work is characterized by a natural aesthetic, and he
                  often experiments with light and composition to create
                  breathtaking images. When he's not behind the camera, John
                  enjoys traveling the world, seeking new inspirations for his
                  photography. His dedication to his craft and his commitment to
                  excellence has earned him a respected reputation in the
                  photography community."
                </p>
              </div>
            </div>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="far fa-star fa-sm"></i>
              </li>
            </ul>
          </div>
          <div className="carousel-item">
            <img
              className="rounded-circle shadow-1-strong mb-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGGPm8VsUgt6KL5gWb8gHyrUWpDxhVJM1UQ4OQB8My7IQZSlzooFmHVgrbjUzoUNJKQ5o&usqp=CAU"
              alt="avatar"
              style={{ width: "150px" }}
            />
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h5 className="mb-3">Jane Smith</h5>
                <p>Web Developer</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  "Jane Smith is a highly skilled web developer with over 8
                  years of experience in designing and developing responsive
                  websites. She has a deep understanding of front-end and
                  back-end technologies, specializing in HTML, CSS, JavaScript,
                  and popular frameworks like React and Angular. Jane is known
                  for her attention to detail and her ability to deliver
                  intuitive, user-friendly designs that enhance the overall user
                  experience. She works closely with clients to ensure their
                  needs are met while also keeping up with the latest industry
                  trends and technologies. Outside of coding, Jane enjoys
                  mentoring junior developers and contributing to open-source
                  projects. Her passion for coding is evident in the creative
                  solutions she brings to every project she takes on."
                </p>
              </div>
            </div>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="far fa-star fa-sm"></i>
              </li>
            </ul>
          </div>
          <div className="carousel-item">
            <img
              className="rounded-circle shadow-1-strong mb-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgcsY7blUSL0cVmZ8hTgsrssx_aHKr0ql9Q7e64SUrodi8fFvq2JyUYq88TuN8l8Z5mfE&usqp=CAU"
              alt="avatar"
              style={{ width: "150px" }}
            />
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h5 className="mb-3">Michael Brown</h5>
                <p>UX Designer</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  "Michael Brown is a highly experienced UX designer with a keen focus on creating seamless, user-centered digital experiences. With over 6 years in the industry, Michael has a deep understanding of user behavior and design principles, which allows him to craft intuitive interfaces that prioritize both aesthetics and functionality. He excels in conducting user research, developing wireframes, and prototyping to ensure the best possible user experience. Michael works closely with clients to translate their vision into designs that engage and resonate with their target audiences. He’s a strong advocate for continuous learning and innovation, always staying up-to-date with the latest design trends and tools. When not working on projects, Michael enjoys teaching design workshops and collaborating with other creatives to push the boundaries of UX design."


                </p>
              </div>
            </div>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="far fa-star fa-sm"></i>
              </li>
            </ul>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
