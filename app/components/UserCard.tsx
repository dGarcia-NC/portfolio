import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Image from 'next/image';
import sample_profile_photo from '../../images/sample_profile_photo.jpeg'

export default function UserCard() {
  return (
    <Card variant="outlined" sx={{ width: 700, height: '100%' }}>
          <Image
            src={sample_profile_photo}
            width={700}
            height={500}
            alt=""
          />
      <CardContent>
        <Typography level="title-md">
          <Link href="#multiple-actions" overlay underline="none">
            Yosemite National Park
          </Link>
        </Typography>
        <Typography level="body-sm">
          <Link href="#multiple-actions">California</Link>
        </Typography>
      </CardContent>
      <CardOverflow variant="soft">
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body-xs">6.3k views</Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs">1 hour ago</Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
