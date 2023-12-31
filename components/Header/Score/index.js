import {
  ScoreContainer,
  ScorePoints,
  HealthPoints,
  HealthIcon,
  BackArrow,
  ArrowIcon,
  HealthContainer,
  Timer,
  HealthIconImg,
} from './Score.styles.js';

const heartIcon = '/resources/heart-icon.png';
export const Score = ({ HP, scorePoints, handleHeaderBack, timer }) => {
  return (
    <ScoreContainer>
      <BackArrow>
        <ArrowIcon
          onClick={handleHeaderBack}
          height='24px'
          viewBox='0 0 24 24'
          width='24px'>
          <path d='M24 0v24H0V0h24z' fill='none' opacity='.87' />
          <path d='M12.29 8.71L9.7 11.3c-.39.39-.39 1.02 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z' />
        </ArrowIcon>
      </BackArrow>
      <ScorePoints>
        <span>{scorePoints}</span>
      </ScorePoints>
      <HealthContainer>
        <HealthPoints>
          <HealthIcon>
            <HealthIconImg off={!(HP > 0)} src={heartIcon} />
          </HealthIcon>
          <HealthIcon>
            <HealthIconImg off={!(HP > 1)} src={heartIcon} />
          </HealthIcon>
          <HealthIcon>
            <HealthIconImg off={!(HP > 2)} src={heartIcon} />
          </HealthIcon>
        </HealthPoints>
        <Timer>{timer}</Timer>
      </HealthContainer>
    </ScoreContainer>
  );
};
