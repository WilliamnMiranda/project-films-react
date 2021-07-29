import React from 'react'
import {ButtonLogin,ContainerHeader,Navegacao,Lista,ItemLista,Logo,IconMenu,MenuMobile} from './styleHeader.js'
import {AiOutlineUser,AiOutlineTrophy,AiTwotoneHeart,AiTwotoneFire,AiOutlineMenu,AiOutlineClose} from "react-icons/ai";

const Header = () => {
    let [menu,setMenu] = React.useState(false);

    return (
        <ContainerHeader>
            <Navegacao>
                <Logo>
                    MinhaLogo
                </Logo>

                    <MenuMobile onClick={()=> setMenu(!menu)}>
                      { 
                        menu ? <AiOutlineClose/> : <AiOutlineMenu/>
                      }
                    </MenuMobile>

                <Lista menu = {menu}>
                    <ItemLista>
                        <IconMenu >
                          < AiTwotoneHeart style={{ color: 'red' }} />  
                        </IconMenu>
                            Favoritos
                    </ItemLista>

                    <ItemLista>
                        <IconMenu>
                          <AiOutlineTrophy style={{ color: '#FFFF00' }} />  
                        </IconMenu>
                            Lançamentos
                    </ItemLista>

                    <ItemLista>
                        <IconMenu>
                            <AiTwotoneFire style={{ color: '#FA8072' }} />
                        </IconMenu>
                        Mais Assistidos
                    </ItemLista>

                    <ItemLista>
                        <ButtonLogin>
                            <IconMenu>
                                <AiOutlineUser style={{ color: 'white' }}/>
                            </IconMenu>
                            Login
                        </ButtonLogin>
                            
                    </ItemLista>

                </Lista>
            </Navegacao>
        </ContainerHeader>
    )
}

export default Header
