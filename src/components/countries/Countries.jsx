import React from "react";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "./Header";
import SideBar from "./SideBar";
import Body from "./Body";
import Footer from "./Footer";

// import TEST_DATA from "../../TEST_DATA";
import PROD_DATA from "../../PROD_DATA";

const Countries = () => {

    // API response
    // const data = TEST_DATA;
    const data = PROD_DATA;
    
    const regionsMap = {};
    let subRegionsMap = {};
    let countriesMap = {};
        
    const regions = new Set();
    const subRegions = new Set();
    const countries = new Set();

    const [dataMap, setDataMap] = useState(regionsMap);
    const [dataFilterType, setDataFilterType] = useState('none');

    for(const obj in data){

        let region = data[obj]?.region;
        let subRegion = data[obj]?.subregion;
        let country = data[obj]?.name?.common

        regions.add(region);
        subRegions.add(subRegion);
        countries.add(country);

        subRegionsMap = {};
        countriesMap = {};
                
        if( regionsMap[region] ) { // { americas: { NA: { USA: {} } } }
            subRegionsMap = regionsMap[region];
            if( subRegionsMap[subRegion] ){   // { NA: { USA: {} } }
                countriesMap = subRegionsMap[subRegion];
                countriesMap[country] = data[obj]; // { USA: {} }
            } else{
                countriesMap = {};
                countriesMap[country] = data[obj];
                subRegionsMap[subRegion] = countriesMap;
            }
        } else {
            countriesMap[country] = data[obj];  // USA: {}
            subRegionsMap[subRegion] = countriesMap;
            regionsMap[region] = subRegionsMap;
        }
    }

    const filterDataBasedOnRegion = (regionVal) => {
        console.log("regionVal = " + regionVal);
        setDataMap({...regionsMap[regionVal]});
        setDataFilterType("region");
    };

    const filterDataBasedOnSubRegion = (selectedRegion, subRegionVal) => {
        console.log("selectedRegion = " + selectedRegion + " , subRegionVal = "+ subRegionVal);
        setDataMap({...regionsMap[selectedRegion][subRegionVal]});
        setDataFilterType("subregion");
    };

    const filterDataBasedOnCountry = (selectedRegion, selectedSubRegion, countryVal) => {
        console.log("selectedRegion = " + selectedRegion + " , selectedSubRegion = "+ selectedSubRegion + " , countryVal = "+ countryVal);
        setDataMap({...regionsMap[selectedRegion][selectedSubRegion][countryVal]});
        setDataFilterType("country");
    };

    console.log(regions);
    console.log(subRegions);
    console.log(countries);
    console.log(regionsMap);
    
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <Header></Header>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <br></br>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                
                    <Col lg="2">
                        <SideBar 
                            regions={regions} 
                            subRegions={subRegions} 
                            countries={countries} 
                            regionsMap={regionsMap}
                            filterDataBasedOnRegion={filterDataBasedOnRegion}
                            filterDataBasedOnSubRegion={filterDataBasedOnSubRegion}
                            filterDataBasedOnCountry={filterDataBasedOnCountry}
                        ></SideBar>
                    </Col>

                    <Col lg="10">
                        <Body 
                            // regionsMap={regionsMap}
                            data={dataMap}
                            dataFilterType={dataFilterType}
                        ></Body>
                    </Col>
                
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <br></br>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <Footer></Footer>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Countries;