import React from 'react';
import { Container, Main, LeftSide, RightSide, Repos } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

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

          <RightSide>
            <Repos>
              <h2>Radom Repos</h2>

              <div>
                {[1, 2, 3, 4, 5, 6].map(n=>(
                  <RepoCard 
                    key={n}
                    username={'lucaseduardocrp'}
                    reponame={'NewPortfolio'}
                    description={'Meu portfolio pessoal'}
                    language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                    stars={8}
                    forks={4}
                  />
                ))}
              </div>
            </Repos>
          </RightSide>
        </Main>
    </Container>
  )
}

export default Profile;