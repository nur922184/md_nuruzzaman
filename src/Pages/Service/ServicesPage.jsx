import React from 'react';
import Freelansing from "../../assets/service_img/freelancer.gif";
import Teaching_Computers from "../../assets/service_img/computer_taning.gif";
import Web_Development from "../../assets/service_img/web_devolopment.gif";
import Computer_Services from "../../assets/service_img/it_service.gif";
import it_solotion from "../../assets/service_img/it_solotion.gif";
import All_computer from "../../assets/service_img/all_computer.gif";
const ServicesPage = () => {
    return (
        <div className=" bg-gradient-to-r from-[#BBD2C5] via-[#536976] to-[#536976] py-10 md:py-32 px-6 text-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Our Services</h2>
                <p className="text-lg mb-12">
                    We provide complete computer-related services with professional expertise.
                </p>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Service 1 */}
                    <div className="bg-white text-gray-800 rounded-2xl shadow-lg overflow-hidden">
                        <img
                            src={Freelansing}
                            alt="Freelancing"
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3">Freelancing</h3>
                            <p>
                                We guide and support you in becoming a professional freelancer in different marketplaces.
                            </p>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-white text-gray-800 rounded-2xl shadow-lg overflow-hidden">
                        <img
                            src={Teaching_Computers}
                            alt="Teaching Computers"
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3">Computer Training</h3>
                            <p>
                                Learn computer skills from basic to advanced with expert instructors.
                            </p>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-white text-gray-800 rounded-2xl shadow-lg overflow-hidden">
                        <img
                            src={Web_Development}
                            alt="Web Development"
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3">Web Development</h3>
                            <p>
                                Professional and responsive websites for businesses, portfolios, and organizations.
                            </p>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className="bg-white text-gray-800 rounded-2xl shadow-lg overflow-hidden">
                        <img
                            src={Computer_Services}
                            alt="Computer Services"
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3">Computer Services</h3>
                            <p>
                                Hardware, software installation, troubleshooting, and repair services.
                            </p>
                        </div>
                    </div>

                    {/* Service 5 */}
                    <div className="bg-white text-gray-800 rounded-2xl shadow-lg overflow-hidden">
                        <img
                            src={it_solotion}
                            alt="IT Solutions"
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3">IT Solutions</h3>
                            <p>
                                Complete IT solutions for business growth, networking, and digital security.
                            </p>
                        </div>
                    </div>

                    {/* Service 6 */}
                    <div className="bg-white text-gray-800 rounded-2xl shadow-lg overflow-hidden">
                        <img
                            src={All_computer}
                            alt="All Computer Related"
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3">All Computer Related</h3>
                            <p>
                                From learning to services, we cover all aspects of computers for your needs.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default ServicesPage;
