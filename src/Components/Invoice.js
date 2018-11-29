import React from 'react';
import { Table } from 'reactstrap';
import styled from 'styled-components';
import '../Assets/css/invoice.css';

export default class Invoice extends React.Component {
  render() {

    const Title = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
    `;

    const InvoiceNumber = styled.span`
        padding-left: 10px;
    `;

    const Layout = styled.div`
        width: 90%;
        margin: 0 auto;
    `;

    const Main = styled.div`
        display: grid;
        grid-template-rows: 50px 1fr;
        background-color: #fff;
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
        grid-template-columns: 1fr 2fr 1fr;
        border: solid 1px #d9d9d9;
    `;

    return (
        <Layout>
            <Title>
                <h4>Invoice</h4> <InvoiceNumber>SO3834754</InvoiceNumber>
            </Title>
            <Main>
                <Head>
                    <Innertitle>INVOICE - REVISION</Innertitle>
                </Head>
                <Information>
                    <div>
                        <Table borderless>
                            <tbody>
                                <tr>
                                    <td>Invoice #</td>
                                    <td className="align-right">33-092kkOO</td>
                                </tr>
                                <tr>
                                    <td>Date</td>
                                    <td className="align-right">7/31/18</td>
                                </tr>
                                <tr>
                                    <td>Due Date</td>
                                    <td className="align-right">7/31/18</td>
                                </tr>
                                <tr>
                                    <td>Terms</td>
                                    <td className="align-right">Net O</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="borders">
                        <Innertitle>Bill to</Innertitle>
                    </div>
                    <div>
                        <Innertitle>New Balance upon Re-booking</Innertitle>
                        <span className="balance">$452.45</span>
                    </div>
                </Information>
            </Main>
        </Layout>
    );
  }
}