import { Container, GithubLogo, SearchForm } from './styles' 

export default function Header(){
    return(
        <Container>
            <GithubLogo />
            <SearchForm>
                <input placeholder='Enter Username or Repo...' />
            </SearchForm>
        </Container>
    )
}