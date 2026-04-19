import React from "react";
import { section_description, blog_links } from "../data";
import { section_description_es, blog_links_es } from "../data_es";
import { useLanguage } from "../LanguageContext";

const Blog = () => {
  const { language, t } = useLanguage();
  const currentSectionDescription = language === "en" ? section_description : section_description_es;
  const currentBlogLinks = language === "en" ? blog_links : blog_links_es;

  return (
    <>
      <section id='blogs' className='blogs'>
        <div className='blogs-info'>
          <h2 className='section-title'>{t("blog")}</h2>
          {currentSectionDescription.map((des, index) =>
            des.section === "Blog" ? (
              <p
                className='blog-description-text'
                key={index}
                dangerouslySetInnerHTML={{ __html: des.description }}
              />
            ) : null
          )}
          <div className='blog-articles-container'>
            <h3 className='section-subtitle-title'>{language === "en" ? "Latest Blogs" : "Últimos Blogs"}</h3>
            <ul className='blog-links'>
              {currentBlogLinks.map((link) => (
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
