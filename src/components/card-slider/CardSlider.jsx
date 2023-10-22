import {motion} from 'framer-motion'
import Card from 'react-bootstrap/Card';
import img1 from '../../images/people/people1.avif'
import img2 from '../../images/people/people2.jpg'
import img3 from '../../images/people/people3.jpg'
import img4 from '../../images/people/people4.avif'
import './CardSlider.style.css'

const textAnimation = {
    hidden:{
        y:100,
        opacity:0,
    },
    visible:custom=>({
        y:0,
        opacity:1,
        transition:{delay: custom*0.15}
    })
  }


            

const CardSlider = () => {
    return (
        <motion.div
            id='card-slider'
            initial="hidden"
            whileInView="visible"
        >
            <div className="container">
                <div className="d-flex justify-content-around">
                    <motion.div custom={1} variants={textAnimation}>
                        <Card  style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Anya Anya</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </motion.div>
                    <motion.div custom={2} variants={textAnimation}>
                        <Card  style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Anya Anya</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </motion.div>
                    <motion.div custom={3} variants={textAnimation}>
                        <Card  style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img4} />
                            <Card.Body>
                                <Card.Title>Sasha Sasha</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </motion.div>
                    <motion.div custom={4} variants={textAnimation}>
                        <Card  style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Vova Vova</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default CardSlider;