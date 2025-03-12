import React from "react";

const Sendingmethod = () => {
  const obj = [
    {
      img: "/assets/images/truck.svg",
      tittle: "Fast & Free Shipping",
      desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      img: "/assets/images/bag.svg",
      tittle: "Easy to Shop",
      desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      img: "/assets/images/support.svg",
      tittle: "24/7 Support",
      desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      img: "/assets/images/return.svg",
      tittle: "Hassle Free Returns",
      desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      img: "/assets/images/truck.svg",
      tittle: "100% Quality Guarantee",
      desc: "We ensure the best quality of products. All items are thoroughly tested to meet the highest standards before shipping.",
    },
    {
      img: "/assets/images/support.svg",
      tittle: "Secure Payment Options",
      desc: "We accept a variety of payment methods including credit/debit cards, PayPal, and more for a seamless shopping experience.",
    },
    {
      img: "/assets/images/bag.svg",
      tittle: "Exclusive Offers & Discounts",
      desc: "Get amazing discounts and offers on our products. Sign up for exclusive deals and save more!",
    },
  ];

  return (
    <div>
      <div className="why-choose-section">
        <div className="container">
          <div className="row my-5">
            {obj.map((elem, index) => {
              return (
                <div key={index} className="col-6 col-md-6 col-lg-3 mb-4">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src={elem.img}
                        alt="productimg"
                        className="img-fluid" // Corrected className
                      />
                    </div>
                    <h3>{elem.tittle}</h3>
                    <p>{elem.desc}</p>
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

export default Sendingmethod;
