import React from 'react';
import { FaIndustry } from "react-icons/fa";
import styled from 'styled-components';
import '../Assets/css/overview.css';
import map from '../Assets/images/map.png';
import { Button, ButtonGroup } from 'reactstrap';

export default class Direction extends React.Component {
    constructor() {
        super();
        this.state = {
            toggle: true
        }
    }

    handleDiagram = () => {
        this.setState ({
            toggle: true
        })
    }

    handleMap = () => {
        this.setState ({
            toggle: false
        })
    }

    render() {

        const {toggle} = this.state;

        const Layout = styled.div`
            width: 90%;
            margin: 0 auto;
            padding: 20px 0;
        `;
        const Main = styled.div`
            display: grid;
            grid-template-rows: 50px 1fr;
        `;

        const Titlemenu = styled.div`
            border: 1px solid #d9d9d9;
            background-color: white;
        `;

        const Headtitle = styled.div`
            display: grid;
            grid-template-columns: 200px 1fr 200px;
            text-align: center;
        `;

        const Direction = styled.div`
            padding: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        `;

        const Symbol = styled.span`
            border: solid 1px rgba(0,0,0,.5);
            background-color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            text-align: center;
            font-weight: bold;
            font-size: 1.25em;
            margin: 0 auto;
            z-index: 2;
            :hover {
                border: solid 1.5px black;
            }
        `;

        const Text = styled.h5`
            font-size: .9rem;
            font-weight: bold;
        `;

        const Line = styled.div`
            border: 1px #d9d9d9 solid;
            position: absolute;
            width: 80%;
        `;
        
        const Map = styled.div`
            padding: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                border: 2px solid black;
            }
        `;

        return (
            <Layout>
                <Main>
                    <Headtitle>
                        <div></div>
                        <div><Text>Text</Text></div>
                        <div>
                            <ButtonGroup>
                                <Button color="dark" outline onClick={this.handleDiagram} active={toggle}>Diagram</Button>
                                <Button color="dark" outline onClick={this.handleMap} active={!toggle}>Map</Button>
                            </ButtonGroup>
                        </div>
                    </Headtitle>
                    <Titlemenu>
                        {toggle? 
                            <Direction>
                                <Line />
                                <Symbol><FaIndustry /></Symbol>
                                <Symbol><FaIndustry /></Symbol>
                                <Symbol><FaIndustry /></Symbol>
                                <Symbol><FaIndustry /></Symbol>
                                <Symbol><FaIndustry /></Symbol>
                                <Symbol><FaIndustry /></Symbol>
                                <Symbol><FaIndustry /></Symbol>
                            </Direction>
                            :
                            <Map>
                                <img src={ map } alt="map"/>
                            </Map>
                        }
                        
                    </Titlemenu>
                </Main>
            </Layout>
        );
    }
}