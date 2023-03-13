/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge'
}

export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          objectFit: 'cover'
        }}
      >
        <img
          alt='og image'
          width='100%'
          src='https://res.cloudinary.com/daobmfotr/image/upload/v1675451808/preview_ljqwef.png'
          style={{
            borderRadius: 20
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  )
}
