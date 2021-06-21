import React from "react";
import Logo from "./Logo/Logo";
import HamburgerButton from "./HamburgerButton/HamburgerButton";
import Typed from "typed.js";
import $ from "jquery";
import "./Header.scss";

const Header = () => {
  let typedAboutStyles = {
    display: "inline"
  };

  let is_open_menu = false;
  let nav_open_count = 0;
  $(window).ready(function() {
    display_logo();
    update_nav_height();
    update_nav_btn_height();
    hide_nav();
    $(window).on("scroll", function() {
      display_logo();
    });

    $(window).resize(function() {
      update_nav_height();
      update_nav_btn_height();
      hide_nav();
      update_nav_collapse_width();
    });
  });

  function display_logo() {
    if (is_open_menu) {
      $(".logo").fadeIn(400);
    } else {
      if ($(window).scrollTop() > 100) {
        $(".logo").fadeOut(400);
      } else {
        $(".logo").fadeIn(400);
      }
    }
  }

  function open_menu() {
    is_open_menu = true;
    nav_open_count++;
    update_nav_collapse_width();
    update_nav_height();
    update_nav_btn_height();
    $(".nav-btn-container svg").fadeOut(300);
    $(".nav-btn-container .nav-close")
      .delay(300)
      .fadeIn(400);
    $(".logo")
      .delay(200)
      .fadeIn(400);
    $(".logo").css("background-color", "#5e42a6");
    $(".logo").css("transition", ".7s");
    $("nav").css("top", "0");
    if (nav_open_count === 1) {
      setTimeout(function() {
        $("#typed-about-container").fadeIn(400);
        // eslint-disable-next-line no-unused-vars
        let typed = new Typed("#typed-about", {
          stringsElement: "#typed-strings-about",
          typeSpeed: 25
        });
      }, 400);
    }
  }

  function close_menu() {
    is_open_menu = false;
    if ($(window).scrollTop() > 100) {
      $(".logo").slideToggle(200);
    }
    $(".nav-btn-container svg")
      .delay(200)
      .fadeIn(400);
    $(".nav-btn-container .nav-close").fadeOut(200);
    $(".logo").css("background-color", "#f5f4bc");
    hide_nav();
  }

  function is_mobile() {
    if ($(window).width() <= 575) {
      return true;
    }
    return false;
  }

  function is_ipad() {
    if ($(window).width() <= 991) {
      return true;
    }
    return false;
  }

  function update_nav_collapse_width() {
    //when phone keyboard is trigger (window height is <400 then hide nav -collapse)
    if ($(window).height() <= 500) {
      $(".nav-collapse").css("width", "999vw");
    } else if (is_mobile()) {
      $(".nav-collapse").css("width", "80vw");
    } else if (is_ipad()) {
      $(".nav-collapse").css("width", "45vw");
    } else {
      $(".nav-collapse").css("width", "35vw");
    }
  }

  function update_nav_height() {
    let nav_height = get_nav_height();
    $("nav").css("height", nav_height + "vh");
  }

  function update_nav_btn_height() {
    let nav_btn_mt;
    let client_height = $(window).height();
    if (client_height <= 575) {
      nav_btn_mt = "69.5";
    } else if (client_height <= 767) {
      nav_btn_mt = "53.9";
    } else if (client_height <= 991) {
      nav_btn_mt = "49.9";
    } else {
      nav_btn_mt = "39.9";
    }
    $(".nav-btn-container div").css("margin-top", nav_btn_mt + "vh");
  }

  function hide_nav() {
    let nav_height = get_nav_height();
    $("nav").css("top", "-" + nav_height + "vh");
    $(".nav-btn-container i")
      .delay(200)
      .fadeIn(400);
    $(".nav-btn-container .nav-close").fadeOut(200);
    $(".nav-btn-container div").css("margin-top", "0");
  }

  function get_nav_height() {
    let nav_height;
    let client_height = $(window).height();

    if (client_height <= 575) {
      nav_height = "70";
    } else if (client_height <= 767) {
      nav_height = "55";
    } else if (client_height <= 991) {
      nav_height = "50";
    } else {
      nav_height = "40";
    }
    return nav_height;
  }

  $(window).on("scroll", function() {
    if (is_mobile()) {
      if ($(window).scrollTop() >= 700) {
        $(".backtotop").fadeIn(400);
      } else {
        $(".backtotop").fadeOut(400);
      }
    } else {
      if ($(window).scrollTop() >= 300) {
        $(".backtotop").fadeIn(400);
      } else {
        $(".backtotop").fadeOut(400);
      }
    }
  });

  return (
    <React.Fragment>
      <Logo />
      <HamburgerButton onOpenClick={open_menu} onCloseClick={close_menu} />

      <nav>
        <div className="nav-collapse text-center text-vanila">
          <h4 className="colapse-i-about">About me</h4>

          <div id="typed-about-container" className="pb-4">
            <div id="typed-strings-about">
              <p>
                A software engineer with enthusiastic to use innovative
                tech to improve human life and to become proficient in full-stacks
                developement.
              </p>
            </div>
            <p id="typed-about" style={typedAboutStyles}></p>
          </div>

          {/* <a href="#portfolio"><span><i className="fas fa-user"></i>Portfolio</span></a><br /> */}
          {/* <a href="https://codeant.a-universe.net/">
            <span>
              <i className="far fa-comment-dots"></i>My Blog
            </span>
          </a>
          <br /> */}
          {/* <a href="#contact" className=""><span><i className="fas fa-phone"></i>Contact</span></a> */}
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Header;
