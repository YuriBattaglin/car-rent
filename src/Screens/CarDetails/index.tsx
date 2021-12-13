import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import  speedSvg  from '../../assets/speed.svg';
import  accelerationSvg  from '../../assets/acceleration.svg';
import  forceSvg  from '../../assets/force.svg';
import  gasolineSvg  from '../../assets/gasoline.svg';
import  exchangeSvg  from '../../assets/exchange.svg';
import  peopleSvg  from '../../assets/people.svg';

import { 
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Accessories,
    Footer,
} from './styles';

export function CarDetails(){
    return (
        <Container>
           <Header>
                <BackButton onPress={() => {}} />
           </Header>

            <CarImages>
                <ImageSlider imagesUrl={['https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png']}></ImageSlider>
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborguini</Brand>
                        <Name>Huracan</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>

                <Accessories>
                    <Accessory name="380Km/h" icon={speedSvg} />
                    <Accessory name="3.2s" icon={accelerationSvg} />
                    <Accessory name="800 HP" icon={forceSvg} />
                    <Accessory name="Gasolina" icon={gasolineSvg} />
                    <Accessory name="Auto" icon={exchangeSvg} />
                    <Accessory name="2 pessoas" icon={peopleSvg} />
                </Accessories>

                <About>
                Cotação realizada com Euro à R$ 4,50. Valor com todos os impostos e
                taxa de assessoria da Direct Imports inclusos. Importe com uma empresa sólida. 
                </About>

            </Content>
            
            <Footer>
                <Button title="Confirmar"/>
            </Footer>

        </Container>
    );
}