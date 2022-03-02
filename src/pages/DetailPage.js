import React, { Component } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import DetailsPageTitle from "parts/DetailsPageParts/Title";
import FeaturedImage from "parts/DetailsPageParts/FeaturedImage";
import Description from "parts/DetailsPageParts/Description";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import itemDetails from "json/itemDetails.json";
export default class DetailPage extends Component {
  componentDidMount() {
    window.title = "Detail Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <DetailsPageTitle
          breadcrumb={breadcrumb}
          data={itemDetails}
        ></DetailsPageTitle>
        <FeaturedImage data={itemDetails.imageUrls}></FeaturedImage>
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Description data={itemDetails}></Description>
            </div>
            <div className="col-5">
              <BookingForm itemDetails={itemDetails}></BookingForm>
            </div>
          </div>
        </section>
        <Categories data={itemDetails.categories} />
        <Testimony data={itemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}
