import React from 'react';

import { Container, Breadcrumb, RepoIcon, Stats, ForkIcon, StarIcon, LinkButton, GithubIcon } from './styles';
import { Link } from "react-router-dom";


const Repo: React.FC = () => {
  return(
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={'/lucaseduardocrp'}>
          lucaseduardocrp
        </Link>

        <span></span>

        <Link className={'reponame'} to={'https://github.com/lucaseduardocrp/NewPortfolio'}>NewPortfolio</Link>
      </Breadcrumb>

      <p>Contains all of my projects and informations about me</p>

      <Stats>
        <li>
          <StarIcon />
          <b>8</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/lucaseduardocrp/NewPortfolio'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  )
}

export default Repo;