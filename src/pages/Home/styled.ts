import styled from 'styled-components'

import bgConceptual from '../../assets/bgConceptual.png'

export const Container = styled.section``

export const ConceptualContainer = styled.section`
  background: url(${bgConceptual});
  background-position: center center;
  min-height: 34rem;
  display: flex;
  justify-content: center;
`

export const ConceptualContent = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;

  @media (max-width: 997px) {
    flex-direction: column;
  }

  h1 {
    font-family: 'baloo 2';
    font-weight: 900;
    font-size: 3rem;
    line-height: 130%;
  }

  h2 {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
  }

  div.caption {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      margin-top: 4.125rem;

      @media (max-width: 997px) {
        margin-top: 2rem;
        flex-wrap: nowrap;
        flex-direction: column;
      }

      li {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1.25rem;
        width: 45%;
        &:nth-child(even) {
          width: 55%;
        }
        @media (max-width: 997px) {
          margin-bottom: 0.5rem;
          width: 100% !important;
        }
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
          height: 2rem;
          border-radius: 100%;
          background-color: ${(props) => props.theme['yellow-700']};
          &.v1 {
            background-color: ${(props) => props.theme['gray-700']};
          }
          &.v2 {
            background-color: ${(props) => props.theme['yellow-500']};
          }
          &.v3 {
            background-color: ${(props) => props.theme['purple-500']};
          }
        }
      }
    }
  }
`

export const ListContainer = styled.section`
  margin: 1rem auto;
  h2 {
    font-family: 'baloo 2';
    font-weight: 900;
    font-size: 2rem;
    line-height: 130%;
  }

  @media (max-width: 554px) {
    margin-top: 2rem;
  }
`

export const ListConent = styled.div`
  display: flex;
  margin: 1rem auto;
  gap: 1.5rem;

  @media (max-width: 554px) {
    flex-direction: column;
  }
`
