import Card from 'react-bootstrap/Card';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Teamcard() {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Our Team Members</h1>

        <div className="team">
            <Card style={{ width: '18rem', height: '24rem' }}>
               <div className="teamimage">
               <Card.Img variant="top" src="src/assets/Mayank_image.png" />
               </div>
                <Card.Body>
                    <Card.Title>Name</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Full Stack Developer</Card.Subtitle>
                    <Card.Text>
                        description
                    </Card.Text>
                    <Card.Link href="#"><FaGithub /></Card.Link>
                    <Card.Link href="#"><FaLinkedin /></Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '24rem' }}>
               <div className="teamimage">
               <Card.Img variant="top" src="src/assets/Mayank_image.png" />
               </div>
                <Card.Body>
                    <Card.Title>Name</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Full Stack Developer</Card.Subtitle>
                    <Card.Text>
                        description
                    </Card.Text>
                    <Card.Link href="#"><FaGithub /></Card.Link>
                    <Card.Link href="#"><FaLinkedin /></Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '24rem' }}>
               <div className="teamimage">
               <Card.Img variant="top" src="src/assets/Mayank_image.png" />
               </div>
                <Card.Body>
                    <Card.Title>Name</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Full Stack Developer</Card.Subtitle>
                    <Card.Text>
                        description
                    </Card.Text>
                    <Card.Link href="#"><FaGithub /></Card.Link>
                    <Card.Link href="#"><FaLinkedin /></Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '24rem' }}>
               <div className="teamimage">
               <Card.Img variant="top" src="src/assets/Mayank_image.png" />
               </div>
                <Card.Body>
                    <Card.Title>Name</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Full Stack Developer</Card.Subtitle>
                    <Card.Text>
                        description
                    </Card.Text>
                    <Card.Link href="#"><FaGithub /></Card.Link>
                    <Card.Link href="#"><FaLinkedin /></Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '24rem' }}>
               <div className="teamimage">
               <Card.Img variant="top" src="src/assets/Mayank_image.png" />
               </div>
                <Card.Body>
                    <Card.Title>Name</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Full Stack Developer</Card.Subtitle>
                    <Card.Text>
                        description
                    </Card.Text>
                    <Card.Link href="#"><FaGithub /></Card.Link>
                    <Card.Link href="#"><FaLinkedin /></Card.Link>
                </Card.Body>
            </Card>


           

            
        </div>
        </div>
    );
}

export default Teamcard;