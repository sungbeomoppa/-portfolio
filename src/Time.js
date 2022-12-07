import * as React from 'react';
import './css/time.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import SchoolIcon from '@mui/icons-material/School';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import RepeatIcon from '@mui/icons-material/Repeat';
import StoreIcon from '@mui/icons-material/Store';
import Typography from '@mui/material/Typography';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
export default function Time() {
  return (
    <div className = 'time_back' style ={{height : 900 }}>
    <Timeline position="alternate">
       <TimelineItem>
        <TimelineOppositeContent
          sx={{ py: '12px', px: 2  }}
          align="right"
          variant="h8"
          color="text.primary"
        >
          2018.03~
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  sx={{ bgcolor: 'black' }}/>
          <TimelineDot color ='primary'>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector  sx={{ bgcolor: 'black' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h8" component="span">
            신구대학교 입학
          </Typography>
          <Typography>IT 소트웨어학과 18학번</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ py: '25px', px: 2 }}
          variant="h8"
          color="text.primary"
        >
          제27보병사단 육군 운전병 만기전역
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <DriveEtaIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '25px', px: 2 }}>
          <Typography variant="h8" component="span">
            
          </Typography>
          <Typography>2019.01.29~2020.09.03</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ py: '25px', px: 2  }}
          variant="h8"
          color="text.primary"
        >
          2021~
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  sx={{ bgcolor: 'black' }} />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h7" component="span">
            언어공부,실무 용어정리,뉴스파악
          </Typography>
          <Typography>python,react,AI에 대해 심층있게 공부중</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ py: '25px', px: 2  }}
          align="right"
          variant="h8"
          color="text.primary"
        >
          다양한 경험을 위한 아르바이트 경력
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  sx={{ bgcolor: 'black' }}/>
          <TimelineDot color ='primary'>
            < StoreIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h7" component="span">
            
          </Typography>
          <Typography>
            <br/>
          2018~2022

          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'black' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector  sx={{ bgcolor: 'black' }}/>        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h7" component="span">
            2022.11.30~
          </Typography>
          <Typography>미래를 위해 자신을 투자 중입니다</Typography>
        </TimelineContent>
      </TimelineItem>
    <br/>
    
    
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ py: '25px', px: 2 }}
          variant="h8"
          color="text.primary"
        >
          회사 입사하기
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineConnector  sx={{ bgcolor: 'black' }}/>          <TimelineDot color="primary">
            < TipsAndUpdatesIcon/>
          </TimelineDot>
          <TimelineConnector  sx={{ bgcolor: 'black' }}/>        </TimelineSeparator>
        <TimelineContent sx={{ py: '25px', px: 2 }}>
          <Typography variant="h8" component="span">
            
          </Typography>
          <Typography>다음 커리어는?</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>

  );
}