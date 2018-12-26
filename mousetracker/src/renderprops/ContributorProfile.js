import React, {Component} from 'react';
import './Contributor.css';

const ContributorProfile = ({total, avatar,username}) =>
(
    <div className="contributor">
    <div className="profile">
      <img src={avatar} width="60px" />
      <p>{username}</p>
    </div>
    <div className="total">
      <p className="number">{total}</p> commits
    </div>
  </div>
);

ContributorProfile.defaultProps = {
    total: 0,
    avatar: 'https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif',
    username: 'unknown'
};

export default ContributorProfile;