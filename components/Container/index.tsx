import React from "react";
import styled from 'styled-components';

const Box = styled.div`
	width:100%;
    border-radius:5px;
    border: solid 1px #D3D3D3;
    padding: 10px;
    margin-top:20px;
`;

const Container: React.FC<{}>= ({children}) => {
return (
    <Box>
        {children}
    </Box>    	
)}

export default Container;
