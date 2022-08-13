import React from 'react'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './style.scss'

export interface IHeaderProps {
  text: string;
  onClick?: () => void;
}

const Header = ({ text, onClick }: IHeaderProps) => {
  return (
    <div className="header-container">
      <div className="title-container">{text}</div>
      <Button primary onClick={onClick}>DO SOMETHING</Button>
    </div>
  )
}

export default Header