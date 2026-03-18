import React from "react";
import Container from 'react-bootstrap/Container';
import { Table, Card, ListGroup } from "react-bootstrap";
import { REGION, SUBREGION, NAME, CAPITAL, POPULATION, FLAG, FLAGS, MAPS } from "./Countries";;

const Body = (props) => {
    const data = props.data;
    const dataFilterType = props.dataFilterType;

    let table;
    if (dataFilterType === 'none') {
        table = (
            <Table striped bordered style={{ width: '800px' }}>
                <thead>
                    <tr>
                        <th>Region</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((el1) => {
                        // console.log(data[el1]);
                        const subRegionRows = Object.keys(data[el1]).map((el2) => {
                            // console.log(data[el1][el2]);
                            const countriesRows = Object.keys(data[el1][el2]).map((el3) => {
                                // console.log(data[el1][el2][el3]);
                                let detail = data[el1][el2][el3];
                                return (
                                    <tr key={el3}>
                                        <td>{el3}</td>
                                        <td>{detail[CAPITAL] ? detail.capital[0] : ''}</td>
                                        <td>{detail[POPULATION]}</td>
                                        <td>{detail[FLAG]}</td>
                                    </tr>
                                );
                            });

                            return (
                                <tr key={el2}>
                                    <td>{el2}</td>
                                    <td>
                                        <Table striped bordered style={{ width: '600px' }}>
                                            <thead>
                                                <tr>
                                                    <th style={{ width: '30%' }}>Country Name</th>
                                                    <th style={{ width: '30%' }}>Capital </th>
                                                    <th style={{ width: '20%' }}>population </th>
                                                    <th style={{ width: '20%' }}>flag </th>
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
                                    <Table striped bordered style={{ width: '650px' }}>
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
                    })}
                </tbody>
            </Table>
        );
    } else if (dataFilterType === REGION) {
        table = (
            <Table striped bordered style={{ width: '800px' }}>
                <thead>
                    <tr>
                        <th>SubRegion</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((el1) => {
                        // console.log(data[el1]);
                        const countriesRows = Object.keys(data[el1]).map((el2) => {
                            // console.log(data[el1][el2]);
                            let detail = data[el1][el2];
                            return (
                                <tr key={el2}>
                                    <td>{el2}</td>
                                    <td>{detail[CAPITAL] ? detail.capital[0] : ''}</td>
                                    <td>{detail[POPULATION]}</td>
                                    <td>{detail[FLAG]}</td>
                                </tr>
                            );
                        });
                        return (
                            <tr key={el1}>
                                <td>{el1}</td>
                                <td>
                                    <Table striped bordered style={{ width: '600px' }}>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '30%' }}>Country Name</th>
                                                <th style={{ width: '30%' }}>Capital </th>
                                                <th style={{ width: '20%' }}>Population </th>
                                                <th style={{ width: '20%' }}>Flag </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {countriesRows}
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    } else if (dataFilterType === SUBREGION) {
        table = (
            <Table striped bordered style={{ width: '600px' }}>
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Country Name</th>
                        <th style={{ width: '30%' }}>Capital </th>
                        <th style={{ width: '20%' }}>population </th>
                        <th style={{ width: '20%' }}>flag </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((el) => {
                        // console.log(data[el]);
                        let detail = data[el];
                        return (
                            <tr key={el}>
                                <td>{el}</td>
                                <td>{detail[CAPITAL] ? detail.capital[0] : ''}</td>
                                <td>{detail[POPULATION]}</td>
                                <td>{detail[FLAG]}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    } else if (dataFilterType === 'country') {
        table = (
            <Card style={{ width: '600px' }}>
                <Card.Img variant="top" src={data[FLAGS]?.svg} />
                <Card.Body>
                    <Card.Title>{data[NAME]?.common}</Card.Title>
                    <Card.Text>
                        {data[NAME]?.official}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{JSON.stringify(data?.currencies)}</ListGroup.Item>
                    <ListGroup.Item>{data[CAPITAL] ? data.capital[0] : ''}</ListGroup.Item>
                    <ListGroup.Item>{data[POPULATION]}</ListGroup.Item>
                    <ListGroup.Item>{data[FLAG]}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href={data[MAPS]?.googleMaps}>Google Maps</Card.Link>
                    <Card.Link href={data[MAPS]?.openStreetMaps}>Open Street Maps</Card.Link>
                </Card.Body>
            </Card>
        );
    }

    return (
        <>
            <Container>
                {table}
            </Container>
        </>
    );
}

export default Body;