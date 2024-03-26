import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative">
      <video
        playsInline
        muted
        loop
        autoPlay
        width={2856}
        height={2121}
        className="w-[200vw] max-w-[200vw] sm:w-[100vw] sm:max-w-[100vw] absolute sm:left-0 left-[-100px] top-0 aspect-[2856/2121]"
      >
        <source src="/kv.mp4" />
      </video>
    </main>
  )
}
