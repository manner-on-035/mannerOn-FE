import { Box, SvgWrapper, Text, Input, Button } from '@UI/atoms';
import { Container } from '@UI/template';
import backIcon from '@assets/icon/backIcon.svg';

const SignInStepPage = () => {
  const handleInputChange = (e: any) => {};
  const handleButtonClick = (e: any) => {};

  return (
    <Box height={'100vh'}>
      <Box height={50} display={'flexAlignItemsCenter'}>
        <SvgWrapper svg={backIcon} onClick={() => {}} style={{ cursor: 'pointer' }} />
      </Box>
      <Container>
        <Box>
          <Box padding={'20px 0 40px 0'} display={'flexAlignItemsCenter'} gap={6}>
            {[1, 2, 3, 4].map((item) => (
              <Box
                key={item}
                width={24}
                height={24}
                color={'white'}
                borderRadius={50}
                display={'flexCC'}
                backgroundColor={'secondary'}
                fontWeight={600}>
                {item}
              </Box>
            ))}
          </Box>
          <Box fontWeight={500}>
            <Box fontSize={24} fontWeight={700}>
              매너ON에서 사용할
              <br />
              <Text fontSize={24} fontWeight={700} color={'secondary'}>
                닉네임
              </Text>
              을 입력해 주세요
            </Box>
            <Box fontSize={16} color={'gray50'} margin={'8px 0 40px 0'}>
              닉네임은 공백없이 10자 이하, <br />
              특수문자는 제외해주세요.
            </Box>
            <Input placeholder={'닉네임 입력'} maxLength={30} onChange={handleInputChange} />
          </Box>
        </Box>
        <Button backGroundColor={'black'} margin={'0 0 40px 0'} onClick={handleButtonClick}>
          다음
        </Button>
      </Container>
    </Box>
  );
};

export default SignInStepPage;
