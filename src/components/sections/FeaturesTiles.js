import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import { boxicon } from "boxicons";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "What we do",
    paragraph:
      "Floppy C.S provide comprehensive web service ranging from custom website design/development and business support services.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div
                    className="features-tiles-item-image mb-16"
                    padding="1rem"
                  >
                    <box-icon
                      name="mobile-alt"
                      size="2.5rem"
                      color="white"
                      padding="1em"
                    ></box-icon>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Mobil App Development</h4>
                  <p className="m-0 text-sm">
                    Building high-quality mobile application on Android and iOS
                    both platforms.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <box-icon
                      name="laptop"
                      size="2.5rem"
                      color="white"
                      padding="1em"
                    ></box-icon>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Website/Software Development</h4>
                  <p className="m-0 text-sm">
                    Website/software development provide solutions for our
                    business bran or identy.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <box-icon
                      name="pen"
                      type="solid"
                      size="2.5rem"
                      color="white"
                      padding="1em"
                    ></box-icon>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">UI/UX Designe</h4>
                  <p className="m-0 text-sm">
                    Higly compelling design results in good retention of
                    customers..
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <box-icon
                      name="dumbbell"
                      size="2.5rem"
                      color="white"
                      padding="1em"
                    ></box-icon>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Hire Dedicated Team</h4>
                  <p className="m-0 text-sm">
                    Experience and dedicated developers make good websites or
                    mobile apps.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <box-icon
                      name="headphone"
                      size="2.5rem"
                      color="white"
                      padding="1em"
                    ></box-icon>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Customer Support Services</h4>
                  <p className="m-0 text-sm">
                    An approach how well you interact with customer and solve
                    their queries.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <box-icon
                      name="rocket"
                      type="solid"
                      size="2.5rem"
                      color="white"
                      padding="1em"
                    ></box-icon>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">And more</h4>
                  <p className="m-0 text-sm">
                    Our services are broad and beyond your expectation. Get
                    ready to know more about all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
