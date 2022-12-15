import styled from "styled-components";

//Mui Import 
import PersonIcon from '@mui/icons-material/Person';
import { Button } from "@mui/material";


//Start
export const Main = styled.div`
    width: 100%;
    height: 2000px;
    /* max-width: 1520px;
    margin: 0 auto; */
`

export const CenterDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Conteyner = styled.div`
    width: 1260px;
    height: 100%;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
`

export const HeadDiv = styled.div`
    width: 100%;
    height: 60px;
    border: 1px solid black;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const LoginDiv = styled.div`
    width: 230px;
    height: 40px;
    border: 2px solid blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Login = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    cursor: pointer;

`

export const MuiUser = styled(PersonIcon)`
    font-size: 26px !important;
    color: #333;
    cursor: pointer;
`

export const IconImg = styled.img`
    width: 26px;
    height: 20px;
    cursor: pointer;

`

// Navbar start

export const UL = styled.ul`
    width: 100%;
    height: 70px;
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    margin-bottom: 20px;
`

export const LI = styled.li`
    list-style: none;
    cursor: pointer;
`


// Menu Loop

export const MenuDiv = styled.div`
    width: 100%;
    height: 1260px;
    border: 1px solid blue;
    display: flex;
    flex-wrap: wrap;
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
`

export const Card = styled.div`
    width: 300px;
    height: 404px;
    border: 1px solid rgba(51, 51, 51, 0.2);
    display: flex;
    flex-direction: column;
`

export const FoodImg = styled.img`
    width: 100%;
    height: 220px;
`
export const InfoDiv = styled.div`
    width: 100%;
    height: calc(100% - 220px);
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const FoodName = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
`

export const PriceAndBtn = styled.div`
    width: 100%;
    height: 50px;
    /* border: 1px solid black; */
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Price = styled.h3`
    font-weight: 700;
    font-size: 30px;
    line-height: 120%;
`

export const MuiBtn = styled(Button)`
    width: 120px !important;
    height: 42px !important;
    background: #B59571 !important;
    color: white !important;
    border: 0px !important;
`