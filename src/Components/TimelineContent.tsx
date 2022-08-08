import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Typography } from "@mui/material";

interface Props {
  icon: React.ReactNode;
  smallText: string;
  titleText: string;
  mainText: string;
  mainOnLeft?: boolean;
}

export default function CustomTimelineContent(props: Props) {
  if(props.mainOnLeft === undefined || props.mainOnLeft === true)
  {
    return (<TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        {props.smallText}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>
          {props.icon}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          {props.titleText}
        </Typography>
        <Typography>{props.mainText}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
  }
  return(<></>);
}