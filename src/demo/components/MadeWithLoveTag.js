import React from 'react';
import './MadeWithLoveTag.css';

function Heart() {
  return <span className={'made-with-love-tag__heart'}>♥</span>;
}

function AuthorLink({ author, link }) {
  return (
    <a className={'made-with-love-tag__author-link'}
      href={link}
    >
      {author}
    </a>
  );
}

export default function MadeWithLoveTag(props) {
  return (
    <div className={'made-with-love-tag'}>
      made with <Heart /> by <AuthorLink {...props} />
    </div>
  );
}
