import React from "react";
import style,{
    Textcategoria,
    Cardcategory,
    Cortediv,
    CardRowleft,
    CardRowright,
    Infopromo,
    Diagonalbox,
    Page,

} from './styledhomepage';
import {
    CardImg,
    CardBody,
    CardImgOverlay,
} from 'reactstrap';
import {MdOutlineNavigateBefore, MdOutlineNavigateNext} from 'react-icons/md';
import Navbar from '../../components/Navbar';



function Home () {
  const cards = [
    {
      id: '1',
      title: 'Escavadeiras',
      images: ['https://th.bing.com/th/id/OIP.OmC2cmBDXV-Dm_8BJnoRngHaEK?pid=ImgDet&rs=1'],
    },

    {
    id:'2',
    title: 'Britadeiras',
    images: ['https://www.inglesgratuito.com.br/wp-content/uploads/2015/08/FERRAMENTAS-EM-INGL%C3%8AS-02.jpg'],
    },

    {
    id:'3',
    title: 'Tratores',
    images: ['https://th.bing.com/th/id/R.a2b27751a88be66bcfd48579b3f1de55?rik=rc%2fWNJU5tCvwaw&pid=ImgRaw&r=0'],
    },

    {
    id:'4',
    title: 'Ferramentas',
    images: ['https://www.inglesgratuito.com.br/wp-content/uploads/2015/08/FERRAMENTAS-EM-INGL%C3%8AS-02.jpg'],
    },
  ]

 return(
    <>
      <Navbar/>
      <Infopromo>
        
      </Infopromo>
      <Page> 
        <CardRowleft>
          <MdOutlineNavigateBefore style={{fontSize:'40px', color:'#fff'}}/>
        </CardRowleft>
        <CardRowright>
          <MdOutlineNavigateNext style={{fontSize:'40px', color:'#fff'}}/>
        </CardRowright>
        {cards.map((item, index) => (
        <Cardcategory inverse>
          <div 
           key={index}
          >
          <CardImg
          alt="Card image cap"
          width="100%"
          src={item.images}
          style={{height: '250px'}}
          />
          <CardImgOverlay>
            <Cortediv>
            <Textcategoria tag="h5">
                {item.title}
              </Textcategoria>
            </Cortediv>
          </CardImgOverlay>
          </div>
        </Cardcategory>
    ))}
      <CardRowleft>
          <MdOutlineNavigateBefore style={{fontSize:'40px', color:'#fff'}}/>
        </CardRowleft>
        <CardRowright>
          <MdOutlineNavigateNext style={{fontSize:'40px', color:'#fff'}}/>
        </CardRowright>
        {cards.map((item, index) => (
        <Cardcategory inverse>
          <div 
          key={index}
          >
          <CardImg
          alt="Card image cap"
          width="100%"
          src={item.images}
          style={{height: '250px'}}
          />
          <CardImgOverlay>
            <Cortediv>
            <Textcategoria tag="h5">
                {item.title}
              </Textcategoria>
            </Cortediv>
          </CardImgOverlay>
            </div>
        </Cardcategory>
        ))}
      </Page>  
    </>
 );
}

export default Home;