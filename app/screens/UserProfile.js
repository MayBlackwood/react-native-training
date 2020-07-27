import React from 'react';

import Profile from './Profile';

const UserProfile = ({
  navigation,
  route: {
    params: { userData },
  },
}) => <Profile userData={userData} />;

export default UserProfile;
