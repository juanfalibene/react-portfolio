import React from "react";

const ProjectLinks = ({ blog_link, github_link, behance_link, figma_link }) => {
  return (
    ((blog_link && blog_link !== "") ||
      (github_link && github_link !== "") ||
      (behance_link && behance_link !== "") ||
      (figma_link && figma_link !== "")) && (
      <div className='project-links'>
        <ul>
          {github_link && github_link !== "" && (
            <li>
              <a
                href={github_link}
                key={github_link}
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/img/skills/github-mark-white.svg'
                  className='github-project'
                  alt='github.com'
                />
              </a>
            </li>
          )}
          {behance_link && behance_link !== "" && (
            <li>
              <a
                href={behance_link}
                key={behance_link}
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/img/skills/behance.svg'
                  className='behance-project'
                  alt='behance.com'
                />
              </a>
            </li>
          )}
          {figma_link && figma_link !== "" && (
            <li>
              <a
                href={figma_link}
                key={figma_link}
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/img/skills/figma.svg'
                  className='figma-project'
                  alt='figma.com'
                />
              </a>
            </li>
          )}
          {blog_link && blog_link !== "" && (
            <li>
              <a
                href={blog_link}
                key={blog_link}
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/img/skills/blog-writing.svg'
                  className='blog-writing'
                  alt='read on my blog'
                />
              </a>
            </li>
          )}
        </ul>
      </div>
    )
  );
};

export default ProjectLinks;
