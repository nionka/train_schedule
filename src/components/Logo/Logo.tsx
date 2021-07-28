import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './logo.scss';

function Logo(): ReactElement {
  return (
    <div className="logo">
      <Link to="/" className="logo__link">
        Лого
      </Link>
    </div>
  )
}

export default Logo