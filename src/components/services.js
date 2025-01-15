import React from "react";
import { Modal } from "./modal";
const servicesList = [
  {
    id: "1",
    serviceId: "myBtn",
    serviceTitle: "Web Application",
    serviceIcon: "fa-brands fa-react",
    discription:
      "Building dynamic frontend applications with React, JavaScript, HTML, and Bootstrap.",
    serviceImg:
      "https://cdn.pixabay.com/photo/2017/01/29/13/21/mobile-devices-2017980_960_720.png",
    serviceDiscription:
      "I specialize in creating high-performance, responsive, and user-friendly web applications tailored to your unique business needs, using modern technologies like React, Node.js, and AWS to deliver seamless digital experiences. With a strong focus on performance optimization, scalability, and security, I ensure that your web applications are both functional and future-proof. Whether you're looking to build a dynamic portfolio, a scalable e-commerce platform, or a custom web solution, I provide end-to-end development that enhances user engagement and drives business growth.",
  },
  {
    id: "2",
    serviceId: "myBtn1",
    serviceTitle: "E-commerce Website",
    serviceIcon: "fa-sharp fa-solid fa-cart-shopping",
    discription:
      "Build your eCommerce website and sell worldwide without investing in a physical store.",
    serviceImg:
      "https://cdn.pixabay.com/photo/2016/08/17/04/43/template-1599667_960_720.png",
    serviceDiscription:
      "We develop serverless e-commerce applications using React, Node.js, Commercetools, JavaScript, HTML, CSS, Material-UI, and AWS Lambda. Commercetools offers a portfolio of composable commerce services that enable you to tailor commerce solutions to your business needs, empowering you to create powerful, highly customized customer interactions while building a profitable, sustainable brand at infinite scale.",
  },
  {
    id: "3",
    serviceId: "myBtn2",
    serviceTitle: "Portfolio Website",
    serviceIcon: "fa-brands fa-wordpress",
    discription:
      "We design and develop portfolio static websites using HTML, CSS, JavaScript, and Bootstrap.",
    serviceImg:
      "https://media.istockphoto.com/id/1072179256/vector/concept-ux-user-experience-development-design-usability-improve-software-develop-company-ui.jpg?s=2048x2048&w=is&k=20&c=PCZ9m5QjA-fRDJOo1IvqBm0pfGNle7ScvFFySBROGrQ=",
    serviceDiscription:
      "Offering portfolio website development services, including the creation of static websites using HTML, CSS, JavaScript, and Bootstrap, as well as dynamic, interactive frontend applications using React, JavaScript, HTML, CSS, and Bootstrap. I craft visually appealing and responsive websites that are tailored to your personal or professional brand, ensuring seamless user experiences across all devices and platforms.",
  },
  {
    id: "4",
    serviceId: "myBtn3",
    serviceTitle: "Mobile App",
    serviceIcon: "fa-brands fa-app-store",
    discription:
      "Offering freelance mobile app development services to build intuitive, high-performance apps for Android and iOS.",
    serviceImg:
      "https://cdn.pixabay.com/photo/2016/02/07/14/45/smartphone-1184883_960_720.png",
    serviceDiscription:
      "I design and develop high-quality Android and iOS applications using React Native, a popular and widely adopted JavaScript framework that enables the creation of natively rendering mobile apps. Built on React, it allows me to deliver seamless, responsive, and feature-rich mobile experiences tailored to your needs.",
  },
];
function ServicesComponenet() {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({});

  const handleModalClose = () => {
    setModalOpen(false);
    setModalData({});
  };

  const handleModalOpen = (data) => {
    setModalData(data);
    setModalOpen(true);
  };
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">
          My <span>Services</span>
        </h1>
        <div className="services-list">
          {servicesList.map((item) => (
            <div
              id={item.serviceId}
              key={item.id}
              onClick={() => handleModalOpen(item)}
            >
              <i className={item.serviceIcon}></i>
              <h2>{item.serviceTitle}</h2>
              <p>{item.discription}</p>
              <a>Learn more ...</a>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          data={modalData}
          handleModalClose={handleModalClose}
        />
      )}
    </div>
  );
}

export const Services = React.memo(ServicesComponenet);
