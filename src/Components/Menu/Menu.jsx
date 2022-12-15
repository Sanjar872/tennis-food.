import React from 'react'
import { Card, CenterDiv, Conteyner, FoodImg, FoodName, HeadDiv, IconImg, InfoDiv, LI, Login, LoginDiv, Main, MenuDiv, MuiBtn, MuiUser, Price, PriceAndBtn, UL } from './style'

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
              <InfoDiv>
                <FoodName>Яичница-глазунья из трех яиц</FoodName>
                <PriceAndBtn>
                  <Price>250 ₽</Price>
                  <MuiBtn variant='contained' >В корзину</MuiBtn>
                </PriceAndBtn>
              </InfoDiv>
            </Card>
            <Card>
              <FoodImg src={Food2} />
              <InfoDiv>
                <FoodName>Омлет из трёх яиц</FoodName>
                <PriceAndBtn>
                  <Price>250 ₽</Price>
                  <MuiBtn variant='contained' >В корзину</MuiBtn>
                </PriceAndBtn>
              </InfoDiv>
            </Card>
            <Card>
              <FoodImg src={Food3} />
              <InfoDiv>
                <FoodName>Домашние сырники</FoodName>
                <PriceAndBtn>
                  <Price>490 ₽</Price>
                  <MuiBtn variant='contained' >В корзину</MuiBtn>
                </PriceAndBtn>
              </InfoDiv>
            </Card>
            <Card>
              <FoodImg src={Food4} />
              <InfoDiv>
                <FoodName>Блины</FoodName>
                <PriceAndBtn>
                  <Price>от 190 ₽</Price>
                  <MuiBtn variant='contained' >В корзину</MuiBtn>
                </PriceAndBtn>
              </InfoDiv>
            </Card>
            <Card>
              <FoodImg src={Food5} />
              <InfoDiv>
                <FoodName>Каша c ягодами и кедровыми орехами</FoodName>
                <PriceAndBtn>
                  <Price>450 ₽</Price>
                  <MuiBtn variant='contained' >В корзину</MuiBtn>
                </PriceAndBtn>
              </InfoDiv>
            </Card>
            <Card>
              <FoodImg src={Food6} />
              <InfoDiv>
                <FoodName>Скрэмбл</FoodName>
                <PriceAndBtn>
                  <Price>290 ₽</Price>
                  <MuiBtn variant='contained' >В корзину</MuiBtn>
                </PriceAndBtn>
              </InfoDiv>
            </Card>
            <Card>
              <FoodImg src={Food7} />
              <InfoDiv>
                <FoodName>Яйцо Бенедикт с лососем</FoodName>
                <PriceAndBtn>
                  <Price>850 ₽</Price>
                  <MuiBtn variant='contained' >В корзину</MuiBtn>
                </PriceAndBtn>
              </InfoDiv>
            </Card>
            <Card>
              <FoodImg src={Food8} />
              <InfoDiv>
                <FoodName>Яйцо Бенедикт с беконом</FoodName>
                <PriceAndBtn>
                  <Price>650 ₽</Price>
                  <MuiBtn variant='contained' >В корзину</MuiBtn>
                </PriceAndBtn>
              </InfoDiv>
            </Card>
            <Card>
              <FoodImg src={Food9} />
              <InfoDiv>
                <FoodName>Гречневая каша с авокадо, яйцом пашот и пармезаном</FoodName>
                <PriceAndBtn>
                  <Price>490 ₽</Price>
                  <MuiBtn variant='contained' >В корзину</MuiBtn>
                </PriceAndBtn>
              </InfoDiv>
            </Card>
            <Card>
              <FoodImg src={Food10} />
              <InfoDiv>
                <FoodName>Кобб – салат с лососем</FoodName>
                <PriceAndBtn>
                  <Price>890 ₽</Price>
                  <MuiBtn variant='contained' >В корзину</MuiBtn>
                </PriceAndBtn>
              </InfoDiv>
            </Card>
            <Card>
              <FoodImg src={Food11} />
              <InfoDiv>
                <FoodName>Кобб – салат с креветками</FoodName>
                <PriceAndBtn>
                  <Price>960 ₽</Price>
                  <MuiBtn variant='contained' >В корзину</MuiBtn>
                </PriceAndBtn>
              </InfoDiv>
            </Card>
            <Card>
              <FoodImg src={Food8} />
              <InfoDiv>
              <FoodName>Гречневая каша  и пармезаном</FoodName>
                <PriceAndBtn>
                  <Price>490 ₽</Price>
                  <MuiBtn variant='contained' >В корзину</MuiBtn>
                </PriceAndBtn>
              </InfoDiv>
            </Card>
          </MenuDiv>
        </Conteyner>
      </CenterDiv>
    </Main>
  )
}

export default Menu