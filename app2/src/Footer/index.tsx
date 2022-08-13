import React from 'react';

import './style.scss'

export interface ILinkData {
  text: string;
  link: string;
}

export interface IFooterProps {
  listLink: ILinkData[];
}

const Footer = ({ listLink }: IFooterProps) => {
  return (
    <div className="footer-container">
      This is Footer
      <div className='link-container'>
        {listLink.map(d => {
          return (
            <div key={d.link}>
              <a href={d.link} target="_blank">{d.text}</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Footer

