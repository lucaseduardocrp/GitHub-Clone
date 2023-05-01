import { useState } from 'react';
import { Container, GithubLogo, SearchForm } from './styles' 
import { useNavigate } from 'react-router-dom';
import { ThemeName } from '../../styles/themes';

interface Props {
    themeName: ThemeName
    setThemeName: (newName: ThemeName) => void;
}

export default function Header({ themeName, setThemeName }: Props){
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    
    function handleSubmit(event: React.FormEvent){
        event.preventDefault();

        navigate('/' + search.toLowerCase().trim());
    }

    function toggleTheme(){
        setThemeName(themeName === 'light' ? 'dark' : 'light')
    }

    return(
        <Container>
            <GithubLogo onClick={toggleTheme}/>
            <SearchForm onSubmit={handleSubmit}>
                <input placeholder='Enter Username or Repo...'
                value={search} 
                onChange={e => setSearch(e.currentTarget.value)} />
            </SearchForm>
        </Container>
    )
}