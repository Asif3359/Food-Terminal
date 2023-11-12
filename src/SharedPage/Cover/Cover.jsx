import { Parallax } from 'react-parallax';

const Cover = ({ img, title, description }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
            bgImageStyle={{ width: '100%', opacity: '.7' }}
        >

            <div className="hero h-[300px] lg:h-[600px]">
                <div className="hero-overlay bg-opacity-20"></div>
                <div className=" text-center text-neutral-content ">
                    <div className=" w-full h-[200px] lg:w-[800px] lg:h-[300px] mx-auto space-y-3  bg-[#00000057] flex justify-center items-center ">
                        <div className='px-4'>
                            <h1 className=" text-5xl font-bold uppercase">{title}</h1>
                            <p className="">{description}</p>
                        </div>

                    </div>
                </div>
            </div>

        </Parallax>

    );
};

export default Cover;