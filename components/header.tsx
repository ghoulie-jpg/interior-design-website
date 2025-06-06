import React from 'react';
import { Box, Grid, Heading, Text, Button } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Box width="100vw" overflow="hidden">
      <Grid
        position="relative"
        width="100%"
        templateColumns="1fr"
        height={['80vh', '80vh', '80vh', '90vh']}
      >
        {/* Full-width hero with gradient overlay - moved to right */}




               
        <Box
          position="relative"
          backgroundImage={`linear-gradient(
               to right,
               rgba(255, 255, 255, 0.65) 20%,
               rgba(255, 255, 255, 0)   70%
             ), url(/DSC_0548-Edit3.jpg)`}
          backgroundSize="cover"
          backgroundPosition="center"
          width="100%"
          height="100%"
        >
          {/* 1) Montague heading in top-left */}
          <Box
            position="absolute"
            top={['20%', '20%', '20%', '20%']}
            left={['5%', '5%', '5%', '5%']} /* Changed from right to left */
            // bg="rgba(36, 72, 85, 1)"
            // boxShadow="0 8px 16px rgba(0, 0, 0, 0.4)"
            // px={[3, 4, 6, 10]}
            // py={[2, 3, 4, 8]}
          >
            <Heading
              // color="black"
              color ="rgb(39, 30, 30)"

              fontSize={['2xl', '3xl', '4xl', '6xl']}
              fontWeight="normal"
              lineHeight="1.2"
              m={0}
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
            >
              <Text as="span" fontWeight="thin">

              Montague
              <br />
              Mobile<br />
              </Text>
              <Text as="span" fontWeight="medium">
                Veterinary
                <br />
                Services
              </Text>
            </Heading>
          </Box>

          {/* 2) Clinic info below it, on the left */}
          <Box
            position="absolute"
            top={['60%', '60%', '60%', '55%']}
            left={['3%', '3%', '3%', '3%']} /* Changed from right to left */
            bg="rgba(255, 255, 255, 0)"
            color="black" 
            p={[3, 4, 6]}
            maxW={["60%", "60%", "40%", "40%"]}
            borderRadius="md"
          >
            <Text fontSize={['sm', 'md', 'lg', '2xl']} m={2} fontWeight="normal">
              Offering in home, virtual and telemedecine care for dogs and cats. <br />

              Serving the communities and residents of Lanark County. <br />


              A focus on desease prevention and the use of conventional and alternative strategies to preserve health. 
            </Text>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Header;