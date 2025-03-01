import Globe from 'react-globe.gl';

const About = () => {
  return (
    <section className='c-space my-20'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px]" />

            <div>
              <p className="grid-headtext">Hi, I&apos;m Daris</p>
              <p className="grid-subtext">With 1 year of experience, I have honed my skills in frontend and backend development, with a focus on animated 3D websites.</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid2" className="w-full sm:w-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">I specialize in JavaScript/TypeScript with a focus on React and Next.js ecosystems</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[236px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor='rgba(0,0,0,0)'
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{
                  lat:43.6, lng: 4,
                  text: "I'm here!",
                  color: 'white',
                  size: 20,
                }]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About