import Carousel from 'react-bootstrap/Carousel';


function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src='https://img.freepik.com/free-photo/watercolor-paint-background-holi-festival_23-2148093636.jpg?t=st=1728967903~exp=1728971503~hmac=d10e0d9a53e26a672165c533e981e2b5087073cc4254403ec2825067c2a71e7c&w=740' style={{width:'100%',height:"400px"}} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
        <img src="https://img.freepik.com/free-photo/watercolor-paint-background-holi-festival_23-2148093702.jpg?t=st=1728967949~exp=1728971549~hmac=34afc6c48b1c007441dc0f9ff04f07ad24f93be3c5be59bbc12fa4db1cd9b0a7&w=740" style={{width:'100%',height:"400px"}} />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
        <img src="https://img.freepik.com/free-photo/pink-yellow-holi-powder-bowl-with-stained-white-background_23-2147924677.jpg?t=st=1728967973~exp=1728971573~hmac=8291e081839b8d9be1be05ea39f2672ad3f28a16943491eeb0384f239913aa49&w=740" style={{width:'100%',height:"400px"}} />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;