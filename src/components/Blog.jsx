import React from "react";
import { section_description } from "../data";
import { blog_links } from "../data";

const Blog = () => {
  return (
    <>
      <section id='blogs' className='blogs'>
        <div className='blogs-info'>
          <h2 className='section-title'>Blog</h2>
          {section_description.map((des, index) =>
            des.section === "Blog" ? (
              <p
                className='blog-description-text'
                key={index}
                dangerouslySetInnerHTML={{ __html: des.description }}
              />
            ) : null
          )}
          <div className='blog-articles-container'>
            <h3 className='section-subtitle-title'>Latest Blogs</h3>
            <ul className='blog-links'>
              {blog_links.map((link) => (
                <li className='blog-link-item' key={link.title}>
                  <a
                    href={link.link}
                    key={link.title}
                    className='blog-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
