"use client";
import Image from "next/image";
import Container from "./spacing";
import Label from "./lable";
import Typography from "./Typography";

const WhatWeDo = ({
  // TEXT
  label = "",
  title = "",
  description = "",

  // WORD ARRAYS ✅
  titleWords = [],
  descriptionWords = [],

  // VARIANTS
  titleVariant = "",
  descriptionVariant = "",

  // FEATURES
  features = [],
}) => {
  return (
    <section className="what-we-do">
      <Container variant="secondary">
        <div className="what-we-do-grid">
          {/* LEFT */}
          <div className="what-we-do-left">
            <div className="what-we-do-content">
              {label && <Label text={label} />}

              {title && (
                <Typography
                  variant="h2"
                  overrideVariant={titleVariant}
                  words={titleWords}
                  className="what-we-do-title"
                >
                  {title}
                </Typography>
              )}

              {description && (
                <Typography
                  variant="body-4"
                  overrideVariant={descriptionVariant}
                  words={descriptionWords}
                  className="what-we-do-desc"
                >
                  {description}
                </Typography>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className="what-we-do-icons-grid">
            {features.map((item, i) => (
              <div key={i} className="what-we-do-icon-card">
                <div className="what-we-do-icon-circle">
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt="feature icon"
                      width={26}
                      height={26}
                    />
                  )}
                </div>

                <Typography
                  variant="body-4"
                  words={item.descriptionWords || []}
                >
                  {item.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatWeDo;
