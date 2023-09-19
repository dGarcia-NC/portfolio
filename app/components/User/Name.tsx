import Typewriter from 'typewriter-effect';

export default function Name() {
  return (
    <div className="font-mono text-4xl flex justify-center mt-8 ml-4 h-1/7 text-[#323232]">
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('David Garcia')
            .start();
        }}
      />
    </div>
  )
}

