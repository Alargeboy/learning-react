import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'
function WeatherAboutTable(props) {
    const {findDay} = props
    return (
        <div>
            <Container className = "table">
          <Row className = "row">
              <Col>
              <h3>Gün</h3>
             </Col>
              <Col>
              <h3>Tarih</h3>
              </Col>
              <Col>
              <h3>Durum</h3>
              </Col>
              <Col>
              <h3>Derece</h3>
              </Col>
            </Row>  
            <Row className = "row">
              <Col>
              <h4 className="info">Pazartesi</h4>
              </Col>
              <Col>
              <h4 className ="info">{findDay("Pazartesi",true,false,false)}</h4>
              </Col>
              <Col>
              <h4 className="info">{findDay("Pazartesi",false,true,false)}</h4>
              </Col>
              <Col>
              <h4 className="info">{findDay("Pazartesi",false,false,true)}</h4>
              </Col>
            </Row>  

            <Row className = "row">
              <Col>
              <h4 className="info">Salı</h4>
              </Col>
              <Col>
              <h4 className ="info">{findDay("Salı",true,false,false)}</h4>
              </Col>
              <Col>
              <h4 className="info">{findDay("Salı",false,true,false)}</h4>
              </Col>
              <Col>
              <h4 className="info">{findDay("Salı",false,false,true)}</h4>
              </Col>
            </Row> 

            <Row className = "row" >
              <Col>
              <h4 className="info">Çarşamba</h4>
              </Col>
              <Col>
              <h4 className ="info">{findDay("Çarşamba",true,false,false)}</h4>
              </Col>
              <Col>
              <h4 className="info">{findDay("Çarşamba",false,true,false)}</h4>
              </Col>
              <Col>
              <h4 className="info">{findDay("Çarşamba",false,false,true)}</h4>
              </Col>
            </Row> 

            <Row className = "row">
              <Col>
              <h4 className="info">Perşembe</h4>
              </Col>
              <Col>
              <h4 className ="info">{findDay("Perşembe",true,false,false)}</h4>
              </Col>
              <Col>
            <h4 className="info">{findDay("Perşembe",false,true,false)}</h4>
              </Col>
              <Col>
              <h4 className="info">{findDay("Perşembe",false,false,true)}</h4>
              </Col>
            </Row> 
            
            <Row className = "row">
              <Col>
              <h4 className="info">Cuma</h4>
              </Col>
              <Col>
              <h4 className ="info">{findDay("Cuma",true,false,false)}</h4>
              </Col>
              <Col>
              <h4 className="info">{findDay("Cuma",false,true,false)}</h4>
              </Col>
              <Col>
              <h4 className="info">{findDay("Cuma",false,false,true)}</h4>
              </Col>
            </Row> 

            <Row className = "row">
              <Col>
              <h4 className="info">Cumartesi</h4>
              </Col>
              <Col>
              <h4 className ="info">{findDay("Cumartesi",true,false,false)}</h4>
              </Col>
              <Col>
              <h4 className="info">{findDay("Cumartesi",false,true,false)}</h4>
              </Col>
              <Col>
              <h4 className="info">{findDay("Cumartesi",false,false,true)}</h4>
              </Col>
            </Row> 

            <Row className = "row">
              <Col>
              <h4 className="info">Pazar</h4>
              </Col>
              <Col>
              <h4 className ="info">{findDay("Pazar",true,false,false)}</h4>
              </Col>
              <Col>
              <h4 className="info">{findDay("Pazar",false,true,false)}</h4>
              </Col>
              <Col>
              <h4 className="info">{findDay("Pazar",false,false,true)}</h4>
              </Col>
            </Row> 
        </Container>
        </div>
    )
}

export default WeatherAboutTable
