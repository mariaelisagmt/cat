import React from "react";
import styled from 'styled-components';

const ContainerBox = styled.div`
	margin: 0px;
	background: #D9D9D9;
	border-radius:2px;
`;

const Heading = styled.p`
	font-size: 20px;
	color: black;
	margin-bottom: 5px;
	font-weight: bold;
	background: pink;
`;

const Line = styled.div`
	background: #52A5D9;
	width:25%;
	height:8px;
	margin-bottom:5px;
	border-radius:25px;
`;

const Info = styled.div`
	margin-left:10px;
`;

const Avaliation = () => {
return (
	<>
		<Heading>Avaliação Diagnóstica</Heading>
		<ContainerBox>
			<Info>
			<table>
				<tr>
					<td><b>
						Categoria:
						</b>
						</td>
					<td>Pesquisa</td>
				</tr>
				<tr>
					<td>
					<b>Recurso:</b></td>
					<td>Formulário de Pesquisa</td>
				</tr>
				<tr>
					<td><b>Periodicidade:</b></td>
					<td>No início do curso</td>
				</tr>
				<tr>
					<td><b>Ferramentas:</b></td>
					<td>Formulário do Google</td>
				</tr>
				<tr>
					<td><b>Trabalhos Relacionados:</b></td>
					<td>Link 1</td>
				</tr>
			</table>
			</Info>
		</ContainerBox>
	</>
);
};

export default Avaliation;
