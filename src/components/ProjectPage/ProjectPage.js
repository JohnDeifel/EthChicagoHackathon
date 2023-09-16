import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "./ProjectPage.css"
import image15 from '../../assets/penguin.png'
import image2 from '../../assets/crypto.png'
import image3 from '../../assets/nouns.png'
import image4 from '../../assets/chromie.png'
import { FaChevronRight } from 'react-icons/fa';


export default function ProjectPage() {
    const navigate = useNavigate();

    const NavigateToTank = () => {
        navigate("/tank");
    }

    const NavigateToCwf = () => {
        navigate("/cwf");
    }

    const NavigateToSweet = () => {
        navigate("/sweet");
    }

    const NavigateToBean = () => {
        navigate("/bean");
    }

    return (
        <>
            <div id="project" className="project">
                <h1>Featured NFT projects.</h1>
                <div className="project-container">

                    <Card bg="dark">
                        <Card.Body>
                            <Card.Title>Chromie Squiggle</Card.Title>
                            <Card.Text>
                            Abstract. Striking.
                            </Card.Text>
                            <Card.Link variant="primary" onClick={NavigateToBean}>Learn more <FaChevronRight /></Card.Link>
                        </Card.Body>
                        <Card.Img variant="top" src={image4} alt="Bean" />
                    </Card>

                    <Card bg="dark">
                        <Card.Body>
                            <Card.Title>Lil Nouns DAO</Card.Title>
                            <Card.Text>
                            Where identity & governance meets NFTs. The community favorites.
                            </Card.Text>
                            <Card.Link variant="primary" onClick={NavigateToTank}>Learn more <FaChevronRight /></Card.Link>
                        </Card.Body>
                        <Card.Img variant="top" src={image3} alt="Sweet" />
                    </Card>
                  
                    <Card bg="dark">
                        <Card.Body>
                            <Card.Title>CryptoPunks</Card.Title>
                            <Card.Text>
                            10,000 pixelated collectible characters on the Ethereum blockchain.
                            </Card.Text>
                            <Card.Link variant="primary" onClick={NavigateToCwf}>Learn more <FaChevronRight /></Card.Link>
                        </Card.Body>
                        <Card.Img variant="top" src={image2} alt="Challenge with Friends" />
                    </Card>
    
                    <Card bg="dark">
                        <Card.Body>
                            <Card.Title>Pudgy Penguin</Card.Title>
                            <Card.Text>
                            Art from the Northern Descent.                       </Card.Text>
                            <Card.Link variant="primary" onClick={NavigateToTank}>Learn more <FaChevronRight /></Card.Link>
                        </Card.Body>
                        <Card.Img variant="top" src={image15} alt="Aliens Hate Avocados" />
                    </Card>
                </div>
            </div>
        </>
    );
}