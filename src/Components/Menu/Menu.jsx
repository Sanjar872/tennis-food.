import React from 'react'
import { Card, CenterDiv, Conteyner, FoodImg, HeadDiv, IconImg, LI, Login, LoginDiv, Main, MenuDiv, MuiUser, UL } from './style'

//Import Img
import Basket from './Image/Basket.png'
import Food1 from './Image/Food1.png'
import Food2 from './Image/Food2.png'
import Food3 from './Image/Food3.png'
import Food4 from './Image/Food4.png'
import Food5 from './Image/Food5.png'
import Food6 from './Image/Food6.png'
import Food7 from './Image/Food7.png'
import Food8 from './Image/Food8.png'
import Food9 from './Image/Food9.png'
import Food10 from './Image/Food10.png'
import Food11 from './Image/Food11.png'


const Menu = () => {
  return (
    <Main>
      <CenterDiv>
        <Conteyner>
          <HeadDiv>
            <LoginDiv>
              <Login>Личный кабинет</Login>
              <MuiUser />
              <IconImg src={Basket} />
            </LoginDiv>
          </HeadDiv>
          <UL>
            <LI>Завтраки </LI>
            <LI>Raw</LI>
            <LI>Холодные закуски</LI>
            <LI>Брускетты </LI>
            <LI>К вину </LI>
            <LI>Салаты</LI>
            <LI>Супы</LI>
            <LI>Паста и ризотто </LI>
            <LI>Мясо</LI>
            <LI>Рыба </LI>
            <LI>Grill </LI>
            <LI>Мангал </LI>
            <LI>Гарниры</LI>
          </UL>
          <MenuDiv>
            <Card>
              <FoodImg src={Food1} />
            </Card>
            <Card>
              <FoodImg src={Food2} />
            </Card>
            <Card>
              <FoodImg src={Food3} />
            </Card>
            <Card>
              <FoodImg src={Food4} />
            </Card>
            <Card>
              <FoodImg src={Food5} />
            </Card>
            <Card>
              <FoodImg src={Food6} />
            </Card>
            <Card>
              <FoodImg src={Food7} />
            </Card>
            <Card>
              <FoodImg src={Food8} />
            </Card>
            <Card>
              <FoodImg src={Food9} />
            </Card>
            <Card>
              <FoodImg src={Food10} />
            </Card>
            <Card>
              <FoodImg src={Food11} />
            </Card>
            <Card>
              <FoodImg src={Food8} />
            </Card>
          </MenuDiv>
        </Conteyner>
      </CenterDiv>
    </Main>
  )
}

export default Menu