import React from "react";
import styled from 'styled-components';

const Box = styled.div`
padding: 30px 20px;
background: #00324B;
position: absolute;
width: 100%;

@media (max-width: 1000px) {
	padding: 20px 10px;
}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 25px;
`;

const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(250px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(250px, 1fr));
}
`;

const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 16px;
text-decoration: none;

&:hover {
	color: #DE4F00;
	transition: 200ms ease-in;
}
`;

const Heading = styled.p`
font-size: 20px;
color: #fff;
margin-bottom: 30px;
font-weight: bold;
`;

const Reserved = styled.div`
font-size: 16px;
color: #fff;
margin-top: 10px;
text-align: center;
`;

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>Conheça-nos</Heading>
			<FooterLink href="#">Termos de Uso</FooterLink>
			<FooterLink href="#">Política de Privacidade</FooterLink>
		</Column>
		<Column>
			<Heading>Pensamento Computacional</Heading>
			<FooterLink href="#">Sobre</FooterLink>
			<FooterLink href="#">Comunidade</FooterLink>
		</Column>
		<Column>
			<Heading>Entre em Contato</Heading>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Email
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>				
				Facebook			
				</span>	
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>	
	<Reserved>
		@ Todos os direitos reservados - CT4ALL
	</Reserved>
	</Box>
);
};

export default Footer;
