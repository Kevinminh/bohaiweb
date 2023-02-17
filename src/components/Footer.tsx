import { Link } from 'react-router-dom'

// COMPONENTS
import FormInput from './input/FormInput'

// SVG
import LogoSvg from '../assets/svg/Logo.svg'
import InstagramLogo from '../assets/svg/socials/Instagram.svg'
import FacebookLogo from '../assets/svg/socials/Facebook.svg'
import LinkedInLogo from '../assets/svg/socials/Linkedin.svg'
import SendFilled from '../assets/svg/misc/SendFilled.svg'

const Footer = () => {
    return (
        <div className="bottom-0 w-full bg-slate-800 py-12 px-40 ">
            <div className="flex justify-between pb-10">
                <div>
                    <p className="uppercase text-sm pb-4">Nysgjerrig på boligmarkedet?</p>
                    <p className="text-4xl font-bold pb-8">Meld deg på nyhetsbrevet!</p>
                    <FormInput placeholder="Din e-post...">
                        <img src={SendFilled} alt="" className="w-5 pb-2" />
                    </FormInput>
                </div>
                <div>
                    <h1>Insert lottie here</h1>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="text-sm font-normal">
                    <img src={LogoSvg} alt="" className="w-32" />
                    <p className=" mt-3">For deg som elsker eiendom © 2023</p>
                    <p className="text-slate-400 text-xs mt-1">Org.nr. 930 725 846</p>
                </div>
                <div className="flex gap-14">
                    <div className="font-normal text-base">
                        <ul>
                            <li className="mb-2 hover:text-slate-300 ">
                                <Link to="/kontakt">Kontakt</Link>
                            </li>
                            <li className="mb-2 hover:text-slate-300">
                                <Link to="/personvern">Personvern</Link>
                            </li>
                            <li className="mb-2 hover:text-slate-300">
                                <Link to="/cookie-policy">Cookie policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="font-normal text-base">
                        <ul>
                            <li className="mb-2 hover:text-slate-300">
                                <Link to="/faq">Ofte stilte spørsmål</Link>
                            </li>
                            <li className="mb-2 hover:text-slate-300">
                                <Link to="/personvern">Personvern</Link>
                            </li>
                            <li className="mb-2 hover:text-slate-300">
                                <Link to="/cookie-policy">Cookie policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="font-normal text-base">
                        <p className="font-bold mb-2">Kontakt oss!</p>
                        <p className="mb-2 hover:text-slate-300">kontakt@cancri.no</p>
                        <div className="flex mt-4 gap-10">
                            <img src={FacebookLogo} alt="" style={{ width: 20 }} />
                            <img src={InstagramLogo} alt="" style={{ width: 20 }} />
                            <img src={LinkedInLogo} alt="" style={{ width: 20 }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
