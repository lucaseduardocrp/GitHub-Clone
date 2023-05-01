import React from 'react';
import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, Tab, RepoIcon } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className='content'>
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">21</span>
    </div>
  )

  return(
    <Container>
        <Main>
          <LeftSide>
            <ProfileData 
            username={'lucaseduardocrp'} 
            name={'Lucas Eduardo'} 
            avatarUrl={'https://avatars.githubusercontent.com/u/110936570?v=4'}
            followers={800}
            following={15}
            company={'Freelancer'}
            location={'Rio de Janeiro, Brasil'}
            email={'lucaseduardocrp@gmail.com'}
            blog={'https://lucascode.vercel.app/'}
            />
          </LeftSide>

          <RightSide>
            <Tab className='mobile'>
              <TabContent />
              <span className="line" />
            </Tab>
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

            <CalendarHeading></CalendarHeading>

            <RandomCalendar />
          </RightSide>
        </Main>
    </Container>
  )
}

export default Profile;