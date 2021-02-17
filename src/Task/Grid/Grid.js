import Block from './Block';
import { Container, Row, Col} from 'react-bootstrap';


const Grid = () => {

    const blocksJSXArray = [];
    for (let k = 0; k < 15; k++) {
        blocksJSXArray.push(
            <Col key={k} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mt-5">
                <Block />
            </Col>
        );
    };


    return (
        <div>

            <Container>
                <Row className="justify-content-center mt-5">
                    <h1> Grid </h1>
                </Row>
                <Row className="justify-content-center mt-5">
                    {blocksJSXArray}
                </Row>
            </Container>
        </div>
    );

};
export default Grid;
