import FeatImage01 from '../../public/images/creator.jpg'
import FeatImage02 from '../../public/images/professional.jpg'

export default function JoinCommunity() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">You made it this far</div>
                        <h1 className="h2 mb-4 font-bold text-3xl">Join Our Community</h1>
                        <p className="text-xl text-gray-400">Welcome to the ultimate platform for creators and social media influencers to collaborate, grow, and succeed.</p>
                    </div>

                    {/* Items */}
                    <div className="grid gap-20">

                        {/* 1st item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" />
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">As a creator</div>
                                    <h3 className="h3 mb-3 font-bold text-2xl">Why should creators choose us</h3>
                                    {/* <p className="text-xl text-gray-400 mb-4">Seamlessly discover exciting collaboration opportunities through our powerful job search feature, connecting creators with professionals effortlessly</p> */}
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Discover the right talent effortlessly</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Collaborate with experts seamlessly</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Simplify your hiring process by finding, evaluating, and hiring professionals effortlessly.</span>
                                        </li>
                                        <li className="flex items-center justify-center my-10">
                                            <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0 p-5 font-bold" href="#">Join as Creator</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        {/* 2nd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">As a Professionals</div>
                                    <h3 className="h3 mb-3 font-bold text-2xl">Why should Professionals choose us</h3>
                                    {/* <p className="text-xl text-gray-400 mb-4">Seamlessly discover exciting collaboration opportunities through our powerful job search feature, connecting creators with professionals effortlessly</p> */}
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Grow your professional network.</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Showcase your skills effectively to potential clients.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Join a community of like-minded professionals, share experiences, and collaborate on creative projects.</span>
                                        </li>
                                        <li className="flex items-center justify-center my-10">
                                            <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0 p-5 font-bold" href="#">Join as Professional</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
