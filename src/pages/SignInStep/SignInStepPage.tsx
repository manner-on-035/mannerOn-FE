import { Box, SvgWrapper } from '@UI/atoms';
import backIcon from '@assets/icon/backIcon.svg';

const SignInStepPage = () => {
  return (
    <Box width={'auto'} height={'100vh'}>
      <Box width={'auto'} height={50} padding={'0 16px'} display={'flexAlignItemsCenter'}>
        <SvgWrapper svg={backIcon} onClick={() => {}} style={{ cursor: 'pointer' }} />
      </Box>
      <Box width={'auto'} height={'auto'} backgroundColor="warning">
        1,2,3,4
      </Box>
    </Box>
  );
};

export default SignInStepPage;
