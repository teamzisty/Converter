import FadeIn from "@/components/ui/FadeIn"
import { RetroGrid } from "@/components/magicui/RetroGrid";
import { VelocityScroll } from "@/components/magicui/ScrollBasedVelocity";
import { NumberTicker } from "@/components/magicui/NumberTicker";
import FileUpload from "@/components/client/FileUpload";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full mt-15">
      <FadeIn>
        <div className="w-240 mb-20 p-13 border border-neutral-100 dark:border-neutral-900 rounded-2xl text-center">
          <FadeIn>
            <h1 className="text-[42px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Converter</h1>
          </FadeIn>

          <FadeIn delay={300} duration={700}>
            <p className="text-neutral-900 dark:text-neutral-300 mt-1 text-base">You can convert files of <span className="font-bold">Unlimited Size</span> into any format.</p>
          </FadeIn>

          <FileUpload />

          <FadeIn delay={700} duration={700} className="mt-12">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="border border-neutral-100 dark:border-neutral-900 rounded relative flex items-center justify-center overflow-hidden">
                  <RetroGrid opacity={0.15} />
                  <div className="relative z-10 text-center p-6">
                    <h2 className="text-[45px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/10 via-white to-white/10">Unlimited Size</h2>
                    <p className="text-neutral-900 dark:text-neutral-300">By using the Evex Storage API, we enable unlimited file storage</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col border border-neutral-100 dark:border-neutral-900 rounded p-6 items-center justify-center">
                    <div className="text-left">
                      <h2 className="text-2xl font-bold mb-4">Over 30 formats</h2>
                      <p className="text-neutral-900 dark:text-neutral-300">Support for over 30 formats, including MP4, PNG, JPEG, GIF, and more.</p>
                    </div>
                    <div className="mt-1 relative flex w-full flex-col items-center justify-center overflow-hidden">
                      <VelocityScroll defaultVelocity={1} numRows={2}>PNG JEPG JPG GIF SVG ICO WEBP PDF PS AVI MOV WEBM MP4 MP3 WAV OGG</VelocityScroll>
                      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                    </div>
                  </div>

                  <div className="border border-neutral-100 dark:border-neutral-900 rounded p-6 flex items-center justify-center">
                    <div className="text-center">
                      <h2 className="text-5xl font-bold"><NumberTicker value={100} />% Free</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={900} duration={700}>
            <footer className="mt-20">
              <p className="text-neutral-500">Provided by <a href="https://zisty.net" target="_blank" className="hover:underline">Zisty</a></p>
            </footer>
          </FadeIn>
        </div>
      </FadeIn>
    </div>

  );
}
