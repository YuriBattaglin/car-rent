import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

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
    Accessories,
    Footer,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentarlPriceTotal,
    RentalPriceQuota,
} from './styles';

export function SchedulingDetails(){
    const theme = useTheme();

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

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather
                            name="calendar"
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </CalendarIcon>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>18/06/2021</DateValue>
                    </DateInfo>

                      <Feather
                            name="chevron-right"
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>18/06/2021</DateValue>
                    </DateInfo>
                </RentalPeriod>
                
                <RentalPrice>
                    <RentalPriceLabel>
                        TOTAL
                    </RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ 580 x3 di??rias</RentalPriceQuota>
                        <RentarlPriceTotal>R$ 2.900</RentarlPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Content>
            
            <Footer>
                <Button title="Confirmar"/>
            </Footer>

        </Container>
    );
}