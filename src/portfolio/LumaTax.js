import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
 
const LumaTax = () => {
    return(
        <div className="page">
            <section>
                <Container>
                <a
                    onClick={e => {
                        e.preventDefault();
                        this.props.history.goBack();
                    }}
                >
                    ←
                </a>
                <Row>
                    <Col sm={4}>
                    <h1 className="f1">LumaTax</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={7}>
                    <div className="p-title-context">Context</div>
                    <p>LumaTax is a startup out of Pioneer Square Labs. Built to remove the burden of sales and use tax compliance from everyday businesses.</p>
                    <p>LumaTax has received $5 million in seed funding to further validate and iterate on this objective.</p>
                    </Col>
                    <Col sm={5}>
                    <div className="p-title-context">My Roles</div>
                    <ul>
                        <li>Research</li>
                        <li>Ideation</li>
                        <li>Customer Journey</li>
                        <li>Product Design</li>
                        <li>Product Analytics</li>
                    </ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <div className="p-title-sub">Problem Space</div>
                        <div className="p-title">Heavy Government Compliance Costs on Small Business</div>
                        <p>They feel that “the decisive factor for the birth of typography”, the use of reusable moulds for casting type, might have been a more progressive process than was previously thought. They suggest that the additional step of using the punch to create a mould that could be reused many times was not taken until twenty years later, in the 1470s. Others have not accepted some or all of their suggestions, and have interpreted the evidence in other ways, and the truth of the matter remains very uncertain.</p>
                        <p>The 19th century printer and typefounder Fournier Le Jeune suggested that Gutenberg might not have been using type cast with a reusable matrix, but possibly wooden types that were carved individually. A similar suggestion was made by Nash in 2004. This remains possible, albeit entirely unproven.</p>
                        
                        {/* initial process image goes here */}
                        <div className="portfolio-image">100</div>
                        <div className="portfolio-image-desc">My initial process was taking the topics from the action plan, mergingn them together then abstracting to potential points of interest.</div>
           
                        <div className="p-title-sub">Problem Space</div>
                        <div className="p-title">Heavy Government Compliance Costs on Small Business</div>
                        <p>They feel that “the decisive factor for the birth of typography”, the use of reusable moulds for casting type, might have been a more progressive process than was previously thought. They suggest that the additional step of using the punch to create a mould that could be reused many times was not taken until twenty years later, in the 1470s. Others have not accepted some or all of their suggestions, and have interpreted the evidence in other ways, and the truth of the matter remains very uncertain.</p>
                        <p>The 19th century printer and typefounder Fournier Le Jeune suggested that Gutenberg might not have been using type cast with a reusable matrix, but possibly wooden types that were carved individually. A similar suggestion was made by Nash in 2004. This remains possible, albeit entirely unproven.</p>
                        
                        {/* initial process image goes here */}
                        <div className="portfolio-image">100</div>
                        <div className="portfolio-image-desc">My initial process was taking the topics from the action plan, mergingn them together then abstracting to potential points of interest.</div>
            
                        <div className="p-title-sub">Get it Shipped</div>
                        <div className="p-title">Doing X</div>
                        <p>They feel that “the decisive factor for the birth of typography”, the use of reusable moulds for casting type, might have been a more progressive process than was previously thought. They suggest that the additional step of using the punch to create a mould that could be reused many times was not taken until twenty years later, in the 1470s. Others have not accepted some or all of their suggestions, and have interpreted the evidence in other ways, and the truth of the matter remains very uncertain.</p>
                        
                        <div className="p-title">Doing Y</div>
                        <p>They feel that “the decisive factor for the birth of typography”, the use of reusable moulds for casting type, might have been a more progressive process than was previously thought. They suggest that the additional step of using the punch to create a mould that could be reused many times was not taken until twenty years later, in the 1470s. Others have not accepted some or all of their suggestions, and have interpreted the evidence in other ways, and the truth of the matter remains very uncertain.</p>
             
                        <div className="p-title-sub">Reflections</div>
                        <div className="p-title">Takeaways</div>
                        <p>They feel that “the decisive factor for the birth of typography”, the use of reusable moulds for casting type, might have been a more progressive process than was previously thought. They suggest that the additional step of using the punch to create a mould that could be reused many times was not taken until twenty years later, in the 1470s. Others have not accepted some or all of their suggestions, and have interpreted the evidence in other ways, and the truth of the matter remains very uncertain.</p>
                    
                        <div className="p-title">Don't do this</div>
                        <p>They feel that “the decisive factor for the birth of typography”, the use of reusable moulds for casting type, might have been a more progressive process than was previously thought. They suggest that the additional step of using the punch to create a mould that could be reused many times was not taken until twenty years later, in the 1470s. Others have not accepted some or all of their suggestions, and have interpreted the evidence in other ways, and the truth of the matter remains very uncertain.</p>
                       
                        <div className="p-title">Learn, Learn, Learn</div>
                        <p>They feel that “the decisive factor for the birth of typography”, the use of reusable moulds for casting type, might have been a more progressive process than was previously thought. They suggest that the additional step of using the punch to create a mould that could be reused many times was not taken until twenty years later, in the 1470s. Others have not accepted some or all of their suggestions, and have interpreted the evidence in other ways, and the truth of the matter remains very uncertain.</p>
                    </Col>
                </Row>
                
                </Container>
            </section>
        </div>   
    )
}

export default LumaTax;