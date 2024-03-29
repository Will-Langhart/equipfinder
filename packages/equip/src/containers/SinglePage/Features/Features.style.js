import styled from 'styled-components';

const FeaturesWrapper = styled.div`
  padding: 10px 0;

  .features_title {
    margin-bottom: 10px;
  }

  a {
    &:hover {
      color: #31b8bd;
    }
  }
`;

export const FeaturesArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  justify-content: space-between;
  margin-bottom: -15px;

  > div {
    width: calc(100% / 4 - 10px);

    @media (max-width: 767px) {
      width: calc(100% / 3 - 10px);
      margin-bottom: 20px;
    }

    @media (max-width: 580px) {
      width: calc(100% / 2 - 10px);
      margin-bottom: 20px;
    }
  }
`;

export default FeaturesWrapper;
