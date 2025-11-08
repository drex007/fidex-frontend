import React, { useContext, CSSProperties } from 'react'
import BounceLoader from "react-spinners/BounceLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    width: 50,
    height: 40
}
const color = "#ffffff"


const ButtonLoader = () => {
    return (
        <div
            _hover={{
                boxShadow: 'inset 450px 0px 0px 0px #FF9723'
            }}
            transition="0.5s ease" w="100%" bg="linear-gradient(92.99deg, #FF2C52 -22.58%, #FFE600 114.69%)" color="white" mb="3px"
            className='bg-black pt-2 rounded-md '
        >

            <BounceLoader


                color={color}
                // loading={loading}
                cssOverride={override}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

        </div>
    )
}


export default ButtonLoader