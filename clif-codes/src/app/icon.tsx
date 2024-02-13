import { ImageResponse } from 'next/og'
import { Great_Vibes } from 'next/font/google';
 
// Route segment config
export const runtime = 'edge'
 
//font
const great_vibes = Great_Vibes({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    variable: '--font-great-vibes'
})

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 28,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <p>C</p><p style={{color:'skyblue'}}>C</p>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}