import React from "react";
import WritingHeader from "../components/WritingHeader";
import WritingFooter from "../components/WritingFooter";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import { Link } from "react-router-dom";

import { useTaggedPost } from "../custom-hooks";
import { readableDate } from "../components/helpers";
import FeaturedContent from "../components/FeaturedContent";
export default function Writing() {
  const [post, isLoading] = useTaggedPost("featured");

  const feature = post;
  const renderPost = () => {
    if (isLoading) return <p>Loading...</p>;
    return (
      <>
        <WritingHeader />
        <hr className="menuLines" />

        <div className="content">
          <h3 className="featureTitle">Feature</h3>

          <div className="posts">
            <div className="feature">
              <div className="featureTitle">
                <Link
                  key={"/writing/" + feature.slug}
                  to={"/writing/" + feature.slug}
                  className="preview"
                >
                  <h1 className="featureTitle">{feature.title}</h1>
                  <small>{readableDate(feature.date)}</small>
                  <div
                    className="featureContent"
                    dangerouslySetInnerHTML={{
                      __html:
                        documentToHtmlString(feature.body).substring(0, 300) +
                        " ... ",
                    }}
                  ></div>
                  <div className="featuredimage">
                    <img
                      src={feature.feature_image.fields.file.url}
                      alt={feature.title}
                    />
                  </div>
                </Link>
              </div>
            </div>
            <hr className="feat"></hr>
            <FeaturedContent />
          </div>
        </div>
        <div className="playlist">
          <h2 className="playlist">playlist</h2>
          <iframe
            src="https://player.vimeo.com/video/425396315?color=ffffff&badge=0"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="We are George Floyd"
            width="100%"
          ></iframe>
          <p>
            <a href="https://vimeo.com/425396315">WE ARE GEORGE FLOYD</a> from{" "}
            <a href="https://vimeo.com/julianmarshall">Julian Marshall</a> on{" "}
            <a href="https://vimeo.com">Vimeo</a>.
          </p>
          <iframe
            src="https://open.spotify.com/embed-podcast/episode/4RfBWD7ODOmxRIi5VdpZMB"
            width="100%"
            height="160"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="Uprising"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed-podcast/episode/3QEuqzMi8UJMg73LXihsRG"
            width="100%"
            height="232"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="For Ima"
          ></iframe>
        </div>
        <WritingFooter />
      </>
    );
  };

  return <div className="post">{renderPost()}</div>;
}
