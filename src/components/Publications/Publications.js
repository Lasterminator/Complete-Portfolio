import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const PublicationCell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <a href={data.link}>{data.title}</a>
        </h3>
        <time className="published">
          {dayjs(data.date).format('MMMM, YYYY')}
        </time>
      </header>
      <div className="description">
        <p>{data.description}</p>
        {/* Add more details if needed */}
      </div>
      <style jsx>{`
        .mini-post header {
          margin-bottom: 30px; /* Adjust the margin as needed */
        }

        .mini-post .description p {
          margin-top: 9px; /* Adjust the margin as needed */
        }
      `}</style>
    </article>
  </div>
);

PublicationCell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // Add more PropTypes as needed
  }).isRequired,
};

export default PublicationCell;
