import styled from 'styled-components'

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin: 1.5rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 32px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 32px 0;
    gap: 12px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    margin: 16px 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
  max-width: 160px;
  margin-bottom: 10px;
  font-size: initial;
  color: transparent;
  &:hover{
    font-size: initial;
    color: yellow;
  }

@media ${props => props.theme.breakpoints.md}{
  max-width: 101px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 7px;
  max-width: 160px;
}
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`
export const Blink = styled.span`
  @keyframes blink{
    0%{opacity: 1;}
    50%{opacity: 0.5;}
    100%{opacity: 1;}

  }
`
export const Span = styled.span`
  animation: blink 1.5s linear infinite;
  
`
export const Image = styled.img`
  height: 90%;
  width: 90%;
  border-radius: 50%;
`

export const Text = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`