import React from 'react';
import home from '../assets/Untitled.png';
import {Box} from "@mui/material";

export const Body: React.FC = () => {
    return (
        <Box>
            <Box className="container section1">
                <img className="homeImg" src={home} alt={"good"}/>
                <img className="homeImg"
                     src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/13/e34b394c-36b1-4774-8639-5aeb2c5716121652442642122-DK-TSHIRT-67--1-.gif" alt={"good"}/>
                <img className="homeImg"
                     src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/1e599d37-1ed6-4e39-9057-ffb4065173b51651897264796-Unbelievable-Deals.jpg" alt={"good"}/>
            </Box>
            <Box className="container section1 flex flex-wrap">
                <img className="itemImg"
                     src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/5d1b7ad3-c3ed-4ef9-a654-18231743d3cd1651484798059-Anouk-Inddus.jpg" alt={"good5"}/>
                <img className="itemImg"
                     src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/f7575784-edbf-411f-acc0-51891ea7f4331651484798329-Inddus-_Varanga.jpg" alt={"good4"}/>
                <img className="itemImg"
                     src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/ce40419d-6408-404e-9320-96e41aee1b791651484798300-Hrx-_Puma_-_More.jpg" alt={"good4"}/>
                <img className="itemImg"
                     src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/44192c45-7393-4ede-a926-11f30b0b92a51651484798036-All.jpg" alt={"good3"}/>
                <img className="itemImg"
                     src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/764761e7-c505-459e-92a2-6c4387f9e2511651484798319-Hush_Puppies-_Arrow.jpg" alt={"good-image"}/>
                <img className="itemImg"
                     src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/2f424664-e746-4af1-b0e1-366ccb0f2c681651484798552-Red_Tape.jpg" alt={"good1"}/>
                <img className="itemImg"
                     src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/a802fc48-8f5b-4d69-97ab-e6a3cf3fb70c1651484798800-USPA-_Flying_Machine.jpg" alt={"good2"}/>
            </Box>
        </Box>
    )
}
