import React, { useState, useEffect } from "react";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import PortfolioModal from "../PortfolioModal/PortflioModal";
import $ from "jquery";

import slotmachineImg from "../../../images/slotmachine.png";
import slotmachineCmcImg from "../../../images/slotmachinecmc.png";
import bubbleSortImg from "../../../images/bublesort.png";
import mytechImg from "../../../images/mytech-logo.png";
import masterChefImg from "../../../images/master-chef-logo.jpg";
import theMatrixImg from "../../../images/matrix.jpeg";
import amplifyImg from '../../../images/amplify-now-logo.png';
import ailoImg from '../../../images/ailo-logo.png';
import rangemeImg from '../../../images/rangeme-logo.png';



const PortfolioRight = () => {
  const [portfolioState, setPortfolioState] = useState({
    items: [
      {
        id: 9,
        title: "RangeMe",
        content:
          "Collaborate with other software engineers and stakeholders to identify requirements, design solutions, and focus on delivering effective software solutions to support RangeMe's e-commerce platform",
        src: rangemeImg,
        href: "/portfolio-view?id=9"
      },
      {
        id: 8,
        title: "Ailo",
        content:
          "Work closely with other software engineers, designers, product managers, and stakeholders to identify requirements, brainstorm solutions, and deliver high-quality software products that met the needs of the company and our clients in the proptech industry.",
        src: ailoImg,
        href: "/portfolio-view?id=8"
      },
      {
        id: 7,
        title: "Amplify-Now",
        content:
          "Develop and maintain strategic project management software, and support clients with the issues they have while using the app.",
        src: amplifyImg,
        href: "/portfolio-view?id=7"
      },
      {
        id: 1,
        title: "Slot Machine Game",
        content:
          "A HTML5 slot machine game that is used to attract clients at a public event for marketing purpose.",
        src: slotmachineImg,
        href: "/portfolio-view?id=1"
      },
      {
        id: 2,
        title: "2nd Slot Machine Game",
        content:
          "Another HTML5 slot machine game for another marketing strategy, with more functions, allows client to select city where they're living, and prizes are set based on the city selected, with limitation in the amount of daily prizes.",
        src: slotmachineCmcImg,
        href: "/portfolio-view?id=2"
      },
      {
        id: 3,
        title: "Bubble Sort Algorithm",
        content:
          "A visualisation of bubble sort algorithm in order to see how it looks like.",
        src: bubbleSortImg,
        href: "/portfolio-view?id=3"
      },
      {
        id: 4,
        title: "M&Y Technology Official site",
        content:
          "Developed a site for company to display their necessary information to clients, a calculator for international students to calculate their current immigration points, and a voucher system that using QR code scanning to activate.",
        src: mytechImg,
        href: "/portfolio-view?id=4"
      },
      {
        id: 5,
        title: "Master Chef App",
        content:
          "A SPA that provides huge amount of recipes of multiple cuisines around the world, together with nutrition details",
        src: masterChefImg,
        href: "/portfolio-view?id=5"
      },
      {
        id: 6,
        title: "The Matrix",
        content:
          "A puzzle game for developers",
        src: theMatrixImg,
        href: "/portfolio-view?id=6"
      }
    ],
    displayModal: false,
    modalContents: {
      title: "",
      content: "",
      src: "",
      href: ""
    }
  });

  $(window).ready(function () {
    $("#modal-btn").click();
    $("#portfolio-modal").on("hidden.bs.modal", function () {
      hideModal();
    });
  });

  $(window).resize(function () {
    let portfolio_item_width = $(".portfolio-item .portfolio-item-img").width();
    $(".portfolio-item img").height(portfolio_item_width);
  });

  useEffect(() => {
    let portfolio_item_width = $(".portfolio-item .portfolio-item-img").width();
    $(".portfolio-item img").height(portfolio_item_width);
  }, []);

  const showModal = id => {
    const itemIndex = portfolioState.items.findIndex(i => {
      return i.id === id;
    });

    const item = { ...portfolioState.items[itemIndex] };

    let displayModal = portfolioState.displayModal;
    displayModal = true;

    setPortfolioState({
      items: [...portfolioState.items],
      displayModal: displayModal,
      modalContents: {
        title: item.title,
        content: item.content,
        src: item.src,
        href: item.href
      }
    });
  };

  const hideModal = () => {
    $(".modal-backdrop").remove();
    $("body").removeClass("modal-open");
    let displayModal = portfolioState.displayModal;
    displayModal = false;
    setPortfolioState({
      items: [...portfolioState.items],
      displayModal: displayModal
    });
  };

  return (
    <React.Fragment>
      <div className="right col-md-6 pt-4">
        <h4 className="text-center pb-4 text-vanila">My related stuffs</h4>
        <div className="row">
          {portfolioState.items.map(item => {
            return (
              <PortfolioItem
                key={item.id}
                id={item.id}
                src={item.src}
                click={() => showModal(item.id)}
              />
            );
          })}

          {portfolioState.displayModal ? (
            <PortfolioModal
              click={hideModal}
              title={portfolioState.modalContents.title}
              content={portfolioState.modalContents.content}
              src={portfolioState.modalContents.src}
              href={portfolioState.modalContents.href}
            />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};
export default PortfolioRight;
