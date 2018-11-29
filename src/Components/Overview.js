import React from 'react';
import { Table } from 'reactstrap';
import styled from 'styled-components';
import '../Assets/css/overview.css';
import { FaCheck } from "react-icons/fa";

export default class Overview extends React.Component {
  render() {

    const Layout = styled.div`
        width: 90%;
        margin: 0 auto;
        padding: 20px 0;
    `;
    const Main = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: white;
    `;

    const Head = styled.div`
        display: flex;
        align-items: center;
        border-left: solid 1px #d9d9d9;
        border-right: solid 1px #d9d9d9;
        border-top: solid 1px #d9d9d9;
        padding: 5px;
    `;

    const Innertitle = styled.h4`
        font-size: .95rem;
        padding: 10px;
    `;

    const Information = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        border: solid 1px #d9d9d9;
    `;

    return (
        <Layout>
            <Main>
                <Head>
                    <Innertitle>OVERVIEW</Innertitle>
                </Head>
                <Information>
                    <div>
                        <Table borderless>
                            <tbody>
                                <tr>
                                    <td>Status</td>
                                    <td className="align-right-overview active"><FaCheck/> Active</td>
                                </tr>
                                <tr>
                                    <td>Method</td>
                                    <td className="align-right-overview">Multimodal</td>
                                </tr>
                                <tr>
                                    <td>Capacity</td>
                                    <td className="align-right-overview">LCL</td>
                                </tr>
                                <tr>
                                    <td>Drayage</td>
                                    <td className="align-right-overview">Pickup, Delivery</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="division">
                        <Table borderless>
                            <tbody>
                                <tr>
                                    <td>Incoterms</td>
                                    <td className="align-right-overview">FOB</td>
                                </tr>
                                <tr>
                                    <td>Service Options</td>
                                    <td className="align-right-overview">Deconsolidation, Customs Clearance.</td>
                                </tr>
                                <tr>
                                    <td>Hazardous or forbidden comodities</td>
                                    <td className="align-right-overview">Lithium Batteries, Hazmat, Other</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Information>
            </Main>
        </Layout>
    );
  }
}