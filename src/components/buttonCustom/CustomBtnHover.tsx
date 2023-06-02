import React, {JSX} from "react";
export default function CustomBtnHover({ text }: any): JSX.Element {
    return (
        <div className='link-text effect '>
        <span className='btn-txt '>{text}</span>
        <span className='btn-icon '>
          <i className='fas fa-arrow-right '></i>{' '}
        </span>
      </div>
    );
}
