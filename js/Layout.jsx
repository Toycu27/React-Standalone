function Layout () {
    return (<>
        <header>
            <Navbar bg="light" expand="md" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/">React Standalone</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/About">About</Nav.Link>
                            <Nav.Link href="https://github.com/Toycu27/React-Standalone" target="_blank">Github</Nav.Link>
                            <Nav.Link as={Link} to="/page1">Link#1</Nav.Link>
                            <Nav.Link as={Link} to="/page2">Link#2</Nav.Link>
                            <Nav.Link as={Link} to="/page3">Link#3</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <a style={{position:"absolute", top:0, right:0, zIndex:9999}} href="https://github.com/Toycu27/React-Standalone">
                <img loading="lazy" width="149" height="149" 
                src="https://github.blog/wp-content/uploads/2008/12/forkme_right_gray_6d6d6d.png?resize=149%2C149" 
                className="attachment-full size-full d-none d-md-block" alt="Fork me on GitHub" data-recalc-dims="1" />
            </a>
        </header>

        <main>
            <br />
            <Container>
                <Row>
                    <Col lg="1"></Col>
                    <Col lg="6">
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </main>

        <footer>
        </footer>
    </>);
}