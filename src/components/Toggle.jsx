import { Button, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";

const Toggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div>
            <Flex align="center" justify="center" marginTop="10px">
                <Button size="lg" onClick={ () => toggleColorMode() }>
                    { colorMode } Mode
                </Button>
            </Flex>
        </div>
    );
};

export default Toggle;