import React, {Component} from 'react';

//Passing components as props and children as property
//https://www.robinwieruch.de/react-pass-props-to-component/

const User = ({user}) =>(
    <Profile user={user}>
        <AvatarRound user={user} />
    </Profile>
);

const Profile = ({user, children}) =>(
    <div className="profile">
        <div>{children}</div>
        <div>
        <p>{user.name}</p>
        </div>
  </div>
);

const AvatarRound = ({ user }) => (
    <img className="round" alt="avatar" src={user.avatarUrl} />
)

export default {User, Profile, AvatarRound};