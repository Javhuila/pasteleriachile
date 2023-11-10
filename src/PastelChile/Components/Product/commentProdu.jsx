import React, { Fragment } from 'react';

function commentProdu(props) {
  return (
    <Fragment>
        <div>
          <ul id="comments-list" className="comments-list">
            <li>
              <div className="comment-main-level">
                <div className="comment-avatar"><img src={props.ImgAvatar} alt="img-avatar"/></div>
                <div className="comment-box">
                  <div className="comment-head">
                    <h6 className="comment-name">{props.NameAvatar}</h6>
                  </div>
                  <div className="comment-content">{props.CommentAvatar}</div>
                </div>
              </div>
            </li>            
          </ul>
        </div>
    </Fragment>
  )
}

export default commentProdu