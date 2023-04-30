import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return(
    <Container>
        <Main>
          <LeftSide>
            <ProfileData 
            username={'lucaseduardocrp'} 
            name={'Lucas Eduardo'} 
            avatarUrl={'https://avatars.githubusercontent.com/u/110936570?v=4'}
            followers={0}
            following={5}
            company={'Freelancer'}
            location={'Rio de Janeiro, Brasil'}
            email={'lucaseduardocrp@gmail.com'}
            blog={'https://lucascode.vercel.app/'}
            />
          </LeftSide>

          <RightSide></RightSide>
        </Main>
    </Container>
  )
}

export default Profile;