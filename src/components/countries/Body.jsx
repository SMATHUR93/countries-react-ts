import React from "react";
import Container from 'react-bootstrap/Container';
import { Table } from "react-bootstrap";

const Body = (props) => {
    // const data = props.data;
    const regionsMap = props.regionsMap;
    const regionRows = Object.keys(regionsMap).map((el1)=>{
        // console.log(regionsMap[el1]);
        const subRegionRows = Object.keys(regionsMap[el1]).map((el2)=>{
            // console.log(regionsMap[el1][el2]);
            const countriesRows = Object.keys(regionsMap[el1][el2]).map((el3)=>{
                // console.log(regionsMap[el1][el2][el3]);
                let detail = regionsMap[el1][el2][el3];
                return (
                    <tr key={el3}>
                        <td>{el3}</td>
                        <td>{detail?.capital[0]}</td>
                        <td>{detail?.population}</td>
                        <td>{detail?.flag}</td>
                    </tr>
                );
            });

            return (
                <tr key={el2}>
                    <td>{el2}</td>
                    <td>
                        <Table striped bordered style={{width:'600px'}}>
                            <thead>
                                <tr>
                                    <th style={{width:'30%'}}>Country Name</th>
                                    <th style={{width:'30%'}}>Capital </th>
                                    <th style={{width:'20%'}}>population </th>
                                    <th style={{width:'20%'}}>flag </th>
                                </tr>
                            </thead>
                            <tbody>
                                {countriesRows}
                            </tbody>
                        </Table>
                    </td>
                </tr>
            );
        });
        return (
            <tr key={el1}>
                <td>{el1}</td>
                <td>
                    <Table striped bordered style={{width:'650px'}}>
                        <thead>
                            <tr>
                                <th>SubRegion</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {subRegionRows}
                        </tbody>
                    </Table>
                </td>
            </tr>
        );
    });
    return (
        <>
            <Container>
                <Table striped bordered style={{width:'800px'}}>
                    <thead>
                        <tr>
                            <th>Region</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {regionRows}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default Body;