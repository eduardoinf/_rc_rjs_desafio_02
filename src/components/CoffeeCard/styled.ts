import styled from 'styled-components'

export const CardItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px;
  width: 25%;
  margin-top: 3rem;
  padding: 0 1rem 1rem;

  img {
    margin-top: -1.25rem;
    max-width: 100%;
  }

  h3 {
    font-family: 'baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
  }

  p {
    color: ${(props) => props.theme['gray-600']};
    font-size: 0.875rem;
    text-align: center;
    line-height: 130%;
  }

  @media (max-width: 997px) {
    width: 50%;
  }

  @media (max-width: 554px) {
    width: 100%;
  }
`

export const CardTags = styled.div`
  display: flex;
  gap: 0.5rem;
  span {
    background: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-700']};
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 10px;
  }
`

export const CardInfo = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`

export const CardPrice = styled.div`
  flex-grow: 1;
  font-family: 'baloo 2';
  color: ${(props) => props.theme['gray-700']};
  font-size: 1.5rem;
  font-weight: 900;

  small {
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
  }
`

export const ResumeCardItem = styled.div`
  display: flex;
  gap: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};
  img {
    width: 64px;
    height: 64px;
  }
  padding: 0 0 1.9rem;
  margin-bottom: 1.9rem;
`
export const ResumeCardInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
  h3 {
    font-size: 1rem;
    font-weight: 400;
  }
`
export const ResumeCardActions = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const ResumeCardPrice = styled.div`
  text-wrap: nowrap;
  font-size: 1rem;
  font-weight: 500;
  text-align: right;
  flex-grow: 1;
`
