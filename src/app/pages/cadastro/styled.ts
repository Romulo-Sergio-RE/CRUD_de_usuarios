import styled from "styled-components";

export const ContainerLoginPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
    .ContainerFormRegisterPage{
        display: flex;
        justify-content: center;
        width: 29.688rem;
        height: 37rem;
        background-color: #004E98;
        border-radius: 1.5rem;
    }
    .formularioRegisterPage{
        display: flex;
        align-items:center;
        justify-content: center;
        flex-direction: column;
    }
    .labelRegisterPage{
        display: flex;
        flex-direction: column;
        color: #FFFFFF;
        font-size: 1.125rem;
        margin: 0.938rem 0;
    }
    .inputRegisterPage{
        display: flex;
        width: 18.75rem;
        height: 3.125rem;
        border-radius: 0.8rem;
        padding: 0 0.5rem;
        font-size: 1.125rem;
        margin: 0.25rem 0;
        border: none;
        :focus{
            border: 0.125rem solid rgba(0, 0, 0, 0.8);
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }
    .spanRegisterPage{
        color: red;
        position: absolute;
        font-size: 0.875rem;
        margin-top: 5.125rem;
    }
    .buttonRegisterPage{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18.75rem;
        height: 4rem;
        color: #FFFFFF;
        background-color: #FF6700;
        border-radius: 0.938rem;
        font-size: 1.25rem;
        cursor: pointer;
        border: none;
        margin-top: 1rem;
    }
`;