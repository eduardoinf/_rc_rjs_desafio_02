import styled from 'styled-components'

export const CartContainer = styled.section`
  margin: 2rem auto !important;
  display: flex;
  gap: 2rem;

  @media (max-width: 997px) {
    flex-direction: column;
    div {
      width: 100%;
    }
  }

  h2 {
    font-family: 'baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    width: 100%;
    margin-bottom: 0.75rem;
  }
`

export const NoResult = styled.div`
  width: 100%;
  text-align: center;
`

export const FormContainer = styled.div`
  width: 58%;
`

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
`

export const FormContent = styled.div`
  flex-grow: 1;
  background-color: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;

  border-radius: 6px;
  &.styled {
    border-radius: 6px 36px;
  }

  .resume {
    display: flex;
    justify-content: space-between;
    font-size: 0.925rem;
    min-height: 2rem;
  }

  .total {
    font-weight: bold;
    font-size: 1.25rem;
  }

  .btn-confirm {
    margin-top: 1rem;
    button {
      width: 100%;
      text-align: center;
      display: inline;
      text-transform: uppercase;
    }
  }
`

export const ResumeCart = styled.div`
  width: 42%;
`

export const FieldsetFormTitle = styled.div`
  display: flex;
  gap: 0.55rem;
  h1 {
    gap: 0.2rem;
    margin-top: 0.1rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
    span {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme['gray-700']};
    }
  }
`

export const FieldsetFormBody = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1.125rem;
  flex-direction: column;
`

export const FieldsetFormField = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const FormControl = styled.div`
  &.full {
    flex-grow: 1;
  }
  input {
    background: ${(props) => props.theme['gray-300']};
    border: 1px solid ${(props) => props.theme['gray-400']};
    line-height: 130%;
    border-radius: 4px;
    padding: 0.75rem;
    width: 100%;
    font-size: 0.875rem;

    &:focus-visible {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-500']};
    }

    &::placeholder {
      color: ${(props) => props.theme['gray-600']};
    }

    &.w60 {
      width: 60px;
    }
  }
`
