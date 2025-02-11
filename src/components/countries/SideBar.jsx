import React from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const SideBar = (props) => {

    const regionsMap = props.regionsMap;

    const allRegions = [...props.regions];
    const allSubRegions = [...props.subRegions];
    const allCountries = [...props.countries];

    const [selectedRegion, setSelectedRegion] = useState();
    const [selectedSubRegion, setSelectedSubRegion] = useState();
    const [selectedCountry, setSelectedCountry] = useState();

    const [subRegions, setSubRegions] = useState([]);
    const [countries, setCountries] = useState([]);

    /* const countries = allCountries.filter((e)=> {
        return e;
    }); */

    const changeRegion = (e) => {
        let regionVal = e.target.value;
        setSelectedRegion(regionVal);
        let subregionsArr = Object.getOwnPropertyNames(regionsMap[regionVal]);
        setSubRegions([...allSubRegions.filter((e)=> {
            return subregionsArr.includes(e);
        })]);
        setCountries([]);
        props.filterDataBasedOnRegion(regionVal);
    };

    const changeSubRegion = (e) => {
        let subRegionVal = e.target.value;
        setSelectedSubRegion(subRegionVal);
        let countriesArr = Object.getOwnPropertyNames(regionsMap[selectedRegion][subRegionVal]);
        setCountries([...allCountries.filter((e)=> {
            return countriesArr.includes(e);
        })]);
        props.filterDataBasedOnSubRegion(selectedRegion, subRegionVal);
    };

    const changeCountry = (e) => {
        let countryVal = e.target.value;
        setSelectedCountry(countryVal);
        props.filterDataBasedOnCountry(selectedRegion, selectedSubRegion, countryVal);
    }

    /* console.log(allRegions);
    console.log(subRegions);
    console.log(countries);
    console.log(regionsMap) */

    return (
        <>
            <Container>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Select Region</Form.Label>
                            <Form.Select aria-label="Default select regionCombos" id="selectedRegion" onChange={changeRegion}>
                                {/* <option>Select Region</option> */}
                                {allRegions.map(el => {
                                    return (
                                        <option value={el} key={el}>{el}</option>
                                    );
                                })}
                            </Form.Select>                            
                        </Form.Group>
                        <br/>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Select Sub-Region</Form.Label>
                            <Form.Select aria-label="Default select subRegionCombos" id="selectedRegion" onChange={changeSubRegion}>
                                {/* <option>Select Sub-Region</option> */}
                                {subRegions.map(el => {
                                    // console.log(el);
                                    return (
                                        <option value={el} key={el}>{el}</option>
                                    );
                                })}
                            </Form.Select>
                        </Form.Group>
                        <br/>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Select Country</Form.Label>
                            <Form.Select aria-label="Default select countriesCombos" id="selectedCountry" onChange={changeCountry}>
                                {/* <option>Select Country</option> */}
                                {countries.map(el => {
                                    // console.log(el);
                                    return (
                                        <option value={el} key={el}>{el}</option>
                                    );
                                })}
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        </>
    );
}

export default SideBar;