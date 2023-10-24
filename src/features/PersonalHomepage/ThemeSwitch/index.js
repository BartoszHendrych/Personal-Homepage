import {  Wrapper, Button, Text, Box, IconWrapper, Icon } from "./styled";

export const ThemeSwitch = () => (
   <Wrapper>
      <Button>
         <Text>Dark made</Text>
         <Box>
            <IconWrapper >
               <Icon />
            </IconWrapper>
         </Box>
      </Button>
   </Wrapper>
);